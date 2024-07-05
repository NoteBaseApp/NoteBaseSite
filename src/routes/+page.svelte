<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each $notes as note}
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
import { notes } from "../stores/Notestore";
</script>