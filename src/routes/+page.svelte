<script>
    import { onMount } from "svelte";
    import { TypeWriter } from "svelte-typewrite";
    //https://github.com/satohshi/svelte-typewriter typerwriter library used


    let { data } = $props();
    let headerHeight = $state(0)
    let footerHeight = $state(0)

    onMount(() => {
        headerHeight = document.getElementById("mainHeader");
        headerHeight = headerHeight.offsetHeight;

        footerHeight = document.getElementById("mainFooter");
        footerHeight = footerHeight.offsetHeight;
    })
</script>

<svelte:head>
    <title>Davey's Tutoring</title> 
</svelte:head>


<section style="--headerHeight:{headerHeight}px; --footerHeight:{footerHeight}px">
    <article>
        <h2 style="font-size: 4rem; margin-bottom: 5vh;">Hi, I'm Davey; <TypeWriter texts={data.typeQuotes} /></h2>
        <p>I am graduate of University of Technology who is constantly striving to develop myself and use my knowledge to benefit the people around me. I have over 2000 hours of in-class teaching experience, tutoring students in many disciplines of programming, game development and information technology. My experience ranges from lab supervision, to delivering lectures on self prepared materials to hundreds of students. I am currently branching into other aspects of development including indie-game development and freelancing, as well as hoping to expand my tutoring capabilities to a younger audience of future programmers.</p>
        <a href="/portfolio" style="text-decoration: none; margin: auto;">
            <button class="button" id="portBtn">See what I've created  <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
            </button>
        </a>
    </article>
    
    <div>
        <a href="https://profiles.uts.edu.au/david.dyer"><enhanced:img src="$lib/image/whiteUTS.png" alt="UTS logo" /></a>
        <a href="https://github.com/DaveyD24"><enhanced:img src="$lib/image/whiteGithub.png" alt="Github logo" /></a>
    </div>
</section>

<style>
    
    section {
        width: 100%;
        display: grid;
        grid-template-rows: 0.8fr auto 1fr;
        min-height: calc(100dvh - var(--headerHeight) - var(--footerHeight));
        grid-template-areas:
        "."
        "main"
        "redirects";
        justify-items: center;
    }

    p { 
        text-align: center;
    }

    article {
        grid-area: main;
        display: flex;
        flex-direction: column;
        width: 80vw;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 100px;
        height:auto;
        margin: 0 5vw;
        margin-bottom: 5vh;
        align-self: center;
        transition: scale 0.5s ease;
    }

    img:hover {
      scale: 1.1;
    }

    div {
        
        grid-area: redirects;
        display:flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

   

    /*Copy paste button styles*/
    .button {
        margin: 10px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        padding-block: 0.5rem;
        padding-inline: 1.25rem;
        /* background-color: rgb(0 107 179); */
        background-color: #a76dc2;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffff;
        gap: 10px;
        font-weight: bold;
        border: 2px solid #ffffff4d;
        outline: none;
        overflow: hidden;
        font-size: 22px;
        cursor: pointer;
        text-decoration:dotted;
    }

    .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }
  
  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }
  
  .button:hover .icon {
    transform: translate(4px);
  }
  
  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }
  
  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }
  
  @keyframes shine {
    0% {
      left: -100px;
    }
  
    60% {
      left: 100%;
    }
  
    to {
      left: 100%;
    }
  }
</style>