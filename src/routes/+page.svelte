<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<hr>

<hr>

{#each notes as note}
<div>
    <h2>{note.title}</h2>
    <p>{note.text}</p>
    {#each note.tagList as tag}
    <div>
        <p>{tag.title}</p>
    </div>
{/each}
</div>
{/each}

<script lang="ts">
	import { onMount } from "svelte";
	import { GetNotes, type Note } from "./+page";
	import { page } from "$app/stores";

    let notes: Note[] = [];
    onMount(async () => {
        notes = await GetNotes($page.data.session?.user?.email || "");
    })
</script>