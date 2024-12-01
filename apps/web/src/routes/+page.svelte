<script lang="ts">
	import {superForm} from 'sveltekit-superforms'

	let {data} = $props()

	const {form, errors, constraints, message, enhance} = superForm(data.form, {resetForm: false})
</script>

<h1>Welcome to Harmoni</h1>

<form method="POST" use:enhance class="space-y-4">
	<div>
		<label for="lengthInMinutes" class="block text-sm font-medium text-gray-700">
			Playlist Length (in minutes)
		</label>
		<input
			type="number"
			id="lengthInMinutes"
			name="lengthInMinutes"
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			aria-invalid={$errors.lengthInMinutes ? 'true' : undefined}
			bind:value={$form.lengthInMinutes}
			{...$constraints.lengthInMinutes}
		/>
	</div>
	<button
		class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>Generate</button
	>
</form>

{#if $message}
	<div>
		<p>{$message}</p>
	</div>
{/if}
