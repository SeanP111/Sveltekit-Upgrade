<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import DegreeDescription from '$lib/components/degreeDescription.svelte';

    let currentState = $state(true);
</script>

<div class="switch">
    <button onclick={() => {currentState = true}} class="{currentState === true ? 'active' : ''}">Academic Portfolio</button>
    <button onclick={() => {currentState = false}} class="{currentState === false ? 'active' : ''}">Development Portfolio</button>
</div>

<svelte:head>
    <title>Portfolio | Davey's Tutoring</title> 
</svelte:head>

{#if currentState===true}
    <section>
        {#each data.cards as output (output.title)}
            <DegreeDescription card={output} />
        {/each}
    </section>
{:else}
    <p>UNDER CONSTRUCTION</p>   
{/if}

<style>
    .switch {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        border-radius: 0.5rem;
        background-color: #8200d82c;
        box-sizing: border-box;
        box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
        padding: 0.25rem;
        width: 97.5%;
        font-size: 14px;
    }

    .switch button {
        width: 50%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        color:antiquewhite;
        padding: .5rem 0;
        border-style: none;
        background-color: rgba(196, 196, 196, 0.461);
    }

    .active {
        background-color: rgb(196, 196, 196) !important;
    }

    section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);  /* 2 equal-width columns */
        grid-auto-rows: 400px;                    /* Each row has the same height */
        width: 100%;
        gap: 20px;
        padding:0vh 2.5vw;                              /* Space between grid items */
    }

   
</style>
