<header>
    <nav>
        <a href="/">home</a>
        {#if $page.data.session}
            <a href="/login" > {$page.data.session.user?.name} - SignOut</a>
        {/if}
    </nav>
</header>

<slot />

<footer>

</footer>

<script>
	import { page } from "$app/stores";
</script>