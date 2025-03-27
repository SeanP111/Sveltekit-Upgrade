<script>
    import DegreeDescription from '$lib/components/degreeDescription.svelte';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    
</script>

<svelte:head>
    <title>Qualifications | Davey's Tutoring</title> 
</svelte:head>

<section>
    <article class="top" style="width:80vw; margin-top:5vh">
        <h2 style="font-size: 4rem; margin-bottom: 5vh;">Hi, I'm Davey; here's my qualifications</h2>
        <p>I have a completed bachelor's degree in <span class="accent">Computer Game Development</span> from the University of Technology Sydney and am awaiting my thesis marks for my degree in <span class="accent">Computer Science</span>, which is otherwise completed. I (will) have graduated both degrees with the highest possible award, and aim to use the research experience gained throughout my university career to pursue a post doctorate degree. My current research interests lie in the development of programming curriculums and course material, as well as productivity within university environments.</p>     
    </article>
    <aside style="height: 340px;">
        <div id="card3" style="position:absolute; z-index: 3">
            <enhanced:img src="$lib/image/whiteUTS.png" style="width: 100px; height:auto" alt="UTS logo" />
            <p>Bachelor of Computing Science (Honours)</p>
            <p>First Class Honours <br> <span style="color: grey">Awaiting Transcript</span></p>
            <p>2022 - 2024</p>
        </div>
        <div id="card1" style="position:absolute; --direction: -1; z-index: 2">
            <enhanced:img src="$lib/image/whiteUTS.png" style="width: 100px; height:auto" alt="UTS logo" />
            <p>Doctor of Philosophy (PhD)</p>
            <p>Coming Soon?</p>
        </div>
        <div id="card2" style="position:absolute; --direction: 1; z-index: 1">
            <enhanced:img src="$lib/image/whiteUTS.png" style="width: 100px; height:auto" alt="UTS logo" />
            <p>Bachelor of Science in Games Development</p>
            <p>WAM 85.15 | GPA 6.46</p>
            <p>2020 - 2022</p>
        </div>
    </aside>

    <article class="alignDegrees">
        {#each data.cards as output (output.title)}
            <DegreeDescription card={output} />
        {/each}
    </article>
</section>

<style>
    .alignDegrees{
        display: grid;
        grid-template-columns: repeat(1, 1fr);  /* 2 equal-width columns */
        grid-auto-rows: 1fr;                    /* Each row has the same height */
        width: 80%;
        gap: 50px; 
        height: max-content;  
        margin-bottom: 5vh;
    }
    .accent {
        color: #a76dc2;
        font-weight: 550;
    }

    section {
        display:flex;
        width:100%;
        flex-direction: column;
        align-items: center;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    section article > * {
        text-align: center;
    }

    aside {
        width: calc(225px + 10vw);
        padding: 0px 5vw;
        margin: 5vh 0px;

    }
    aside div {
        --direction: 0;
        width: 225px;
        height: 340px;
        padding: 10px;
        outline: 1px solid whitesmoke;
        cursor: pointer;
        box-shadow: 0px 0px 30px -10px rgba(255, 255, 255, 0.3);
        background-color: rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: .3s ease-in-out;
    }

    aside div > * {
        text-align: center; 
    }



    /*Card animation - copied from other site*/
    aside:hover #card1 {
        transform: translateX(100px) rotate(20deg);
    }

    aside:hover #card2 {
        transform: translateX(-100px) rotate(-30deg);
    }

    aside:hover #card3 {
        transform: translateX(0) rotate(0deg);
    }

    #card1:hover {
        transform: translateX(240px) rotate(0deg) !important;
        z-index: 1;
    }

    #card2:hover {
        transform: translateX(-240px) rotate(0deg) !important;
    }

    #card3:hover {
        transform: translateX(0px) rotate(0deg) !important;
    }

</style>