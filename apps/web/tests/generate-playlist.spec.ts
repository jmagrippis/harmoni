import {test, expect} from '@playwright/test'

test('allows changing the playlist length and shows message upon form submission', async ({
	page,
}) => {
	await page.goto('/')

	await page.getByRole('spinbutton').fill('30')

	await page.getByRole('button', {name: 'generate'}).click()

	await expect(page.getByText(/you would like a playlist for 30 minutes/i)).toBeVisible()
})
