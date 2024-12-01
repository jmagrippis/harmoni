import {z} from 'zod'

export const playlistSchema = z.object({
	lengthInMinutes: z.number().min(5, 'Playlist length must be at least 5 minutes').default(45),
})
