import { test, expect } from '@playwright/test';

const MOVE_UP_BUTTON = 'svg:nth-child(1)';
const MOVE_DOWN_BUTTON = 'svg:nth-child(2)';

test('loads the app and shows 5 post items in a list', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });
	await expect(page.locator('main h1')).toHaveText('Sortable Post List');
	await expect(page.locator('main h2')).toHaveText('List of actions commited');

	await expect(page.locator('.post-item')).toHaveCount(5);
	const postItems = await page.locator('.post-item').allInnerTexts();
	for (let i = 0; i < postItems.length; i++) {
		await expect(postItems[i]).toBe(`Post ${i + 1}`);
	}
});

test('shows first and last post items without render forbidden arrows actions', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });
	await expect(page.getByText('Post 1').locator(MOVE_UP_BUTTON).first()).toHaveAttribute('style', 'display: none;');
	await expect(page.getByText('Post 5').locator(MOVE_DOWN_BUTTON).first()).toHaveAttribute('style', 'display: none;');
});

test('loads one action in the history when a post item is moved', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });
	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(page.locator('.action-item p')).toHaveText('Moved Post 1 from index 0 to index 1');
});

test('loads actions in the top of history when a post item is moved bottom to top', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });

	const lastActionCommited = page.locator('.action-item').first().locator('p');
	await page.getByText('Post 5').locator(MOVE_UP_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 5 from index 4 to index 3');
	await page.getByText('Post 5').locator(MOVE_UP_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 5 from index 3 to index 2');
	await page.getByText('Post 5').locator(MOVE_UP_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 5 from index 2 to index 1');
	await page.getByText('Post 5').locator(MOVE_UP_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 5 from index 1 to index 0');
});

test('loads one action and redo the movement with time travel - empty history again', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });
	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(page.locator('.action-item p')).toHaveText('Moved Post 1 from index 0 to index 1');
	await page.getByRole('button', { name: 'Time travel' }).click();
	await expect(page.locator('.no-data')).toHaveText('There is no actions commited');
});

test('checks posts list in reverse order and then rewinds to the initial state', async ({ page }) => {
	await page.goto('/');
	await page.locator('.loading').waitFor({ state: 'hidden' });
	const lastActionCommited = page.locator('.action-item').first().locator('p');

	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 1 from index 0 to index 1');
	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 1 from index 1 to index 2');
	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 1 from index 2 to index 3');
	await page.getByText('Post 1').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 1 from index 3 to index 4');

	await page.getByText('Post 2').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 2 from index 0 to index 1');
	await page.getByText('Post 2').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 2 from index 1 to index 2');
	await page.getByText('Post 2').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 2 from index 2 to index 3');

	await page.getByText('Post 3').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 3 from index 0 to index 1');
	await page.getByText('Post 3').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 3 from index 1 to index 2');

	await page.getByText('Post 4').locator(MOVE_DOWN_BUTTON).first().click();
	await expect(lastActionCommited).toHaveText('Moved Post 4 from index 0 to index 1');

	await expect(page.locator('.action-item')).toHaveCount(10);

	const reversePostItems = await page.locator('.post-item').allInnerTexts();
	let postTitle = reversePostItems.length;
	for (let i = 0; i < reversePostItems.length; i++) {
		await expect(reversePostItems[i]).toBe(`Post ${postTitle}`);
		postTitle--;
	}

	const firstActionCommitedLocator = page.locator('.action-item').last();
	await firstActionCommitedLocator.getByRole('button', { name: 'Time travel' }).click();

	await expect(page.locator('.no-data')).toHaveText('There is no actions commited');
	const originalOrderPostItems = await page.locator('.post-item').allInnerTexts();
	for (let i = 0; i < originalOrderPostItems.length; i++) {
		await expect(originalOrderPostItems[i]).toBe(`Post ${i + 1}`);
	}
});
