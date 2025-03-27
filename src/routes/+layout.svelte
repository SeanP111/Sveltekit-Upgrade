<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    // eslint-disable-next-line no-unused-vars
    let { data, children } = $props();
    import "$lib/modern-normalize.css"
    import "$lib/main.css"
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    let quote = $state("I have nothing!")

    async function rotateFeedback() {
        while(true) {
            for (let i = 0; i < data.quotes.length; i++) {
                quote = data.quotes[i];
                await delay(2000);
            }
        }
    }


    onMount(() => {
        rotateFeedback();

    })
</script>

<div>
    <header id="mainHeader">
        <a href="/" style="text-align:center"><h1>David Dyer</h1></a>
        <nav style="display: flex; flex-direction: row; justify-content: center; margin-right: 10vw; flex-wrap: wrap;">
            <a href="/qualifications"><button class="button-17" style="margin-right: 1vw">Qualifications</button></a>
            <a href="/portfolio"><button class="button-17">Portfolio</button></a>
        </nav>
    </header>
    <main>
        {@render children()}
    </main>
    
    <footer id="mainFooter">
        <h2 style="font-size: 2rem">Incredible feedback from Incredible Students</h2>
        <p transition:fade
        ><span style="font-size: 2rem;">&#x1F49C;</span>{quote}<span style="font-size: 2rem;">&#x1F49C;</span></p>
    </footer>
</div>



<style>
    div {
        display: grid;
        min-height: 100%;
        grid-template-rows: 1fr auto 1fr;
    }
    header {
        background-color: #3c404320;
        box-shadow: 0 2px black;
        padding: 30px;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    footer{
        background-color: #3c404320;
        text-align: center;
        padding: 10px;
    }

    h1 {
        font-size: 3rem;
        margin-left: 10vw;
        transition: color 0.3s ease;
    }

    h1:hover {
        color:cornflowerblue;
    }

    /* CSS */
    .button-17 {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform,opacity;
    z-index: 0;
    }

    .button-17:hover {
    background: #F6F9FE;
    color: #174ea6;
    }

    .button-17:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
    }

    .button-17:focus {
    outline: none;
    border: 2px solid #4285f4;
    }

    .button-17:not(:disabled) {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button-17:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }

    .button-17:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button-17:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }

    .button-17:disabled {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }
</style>

