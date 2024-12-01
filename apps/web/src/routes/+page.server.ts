import {fail} from '@sveltejs/kit'
import {superValidate, message} from 'sveltekit-superforms'
import {zod} from 'sveltekit-superforms/adapters'

import {playlistSchema} from './schema'
import type {Actions} from './$types'

export const load = async () => {
	const form = await superValidate(zod(playlistSchema))

	return {form}
}

export const actions: Actions = {
	default: async ({request}) => {
		const form = await superValidate(request, zod(playlistSchema))

		if (!form.valid) {
			return fail(400, {form})
		}

		const {lengthInMinutes} = form.data

		const output = 'You would like a playlist for ' + lengthInMinutes + ' minutes'
		console.info(output)

		return message(form, output)
	},
}
