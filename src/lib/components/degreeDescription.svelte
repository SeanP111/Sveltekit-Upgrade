<script>

    let { card } = $props();
</script>

<section>
    <div class="left" style="background-color:{card.color}"></div>
    <div class="cardGrid">
        <p style="padding: 10px; align-self:center">{card.title}<br>
            <span style="font-size: 0.75em;"><span style="color: grey">{card.span}</span><br>
            {card.year}</span>
        </p>
        <enhanced:img src="$lib/image/uts.png" style="width: 100px; height:auto"  alt="UTS logo" />
        <div class="tags">
            {#each card.tags as tag}
            <p class="tag">{tag}</p>
            {/each}
        </div>
        {#if card.isCompleted}
        <enhanced:img src="$lib/image/tickcircle.png" style="width: 100px; height:auto; padding:none;"/>
        {/if}
        {#if card.value !== undefined && card.value !== null}
        <p class="value">{card.value}</p>
        {/if}
        
        
    </div>
    
</section>

<style>
    section {
        height: 80%;
        min-height: 200px;
        width: 100%;
        background-color: whitesmoke;
        border-radius: 15px;
        display: flex;
        margin: 50px 0px;
        transition: transform 0.5s ease;
    }

    section:hover {
        z-index: 1;
        transform: scale(1.02);
    }

    .left {
        height: auto;
        background-color: #dcb5ee;
        width: 25%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        clip-path: polygon(0 0, 84% 0, 100% 100%, 0% 100%);
    }

    .cardGrid {
        height:100%;
        width: 75%;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto auto;
    }

    .cardGrid * {
        font-size: 1.5rem;
        text-align: left;
        color:black;
    }

    .tags {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        height: fit-content;
        gap: 10px
    }

    .tag {
        width:100%;
        align-self: center;
        font-size: 1rem;
        padding:5px;
        text-align: center;
        background-color: rgb(212, 212, 212);
        border-radius: 10px;
        color: rgb(65, 65, 65);
    }

    picture {
        padding: 5px 10px;
        justify-self: end;
    }

    .value {
        align-self: end;
        font-size: 4rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 450;
        color: rgb(230, 230, 230);
        text-align: right;
    }
</style>