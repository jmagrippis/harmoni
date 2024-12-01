import {Hono} from 'hono'

const app = new Hono()

app.get('/hello/:name?', (c) => {
	const name = c.req.param('name') ?? 'world'

	return c.json({
		message: `Hello, ${name}!`,
	})
})

export default app
