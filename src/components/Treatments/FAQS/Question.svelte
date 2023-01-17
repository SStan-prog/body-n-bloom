<script>

import { slide } from 'svelte/transition'
export let question;
export let answer;

    let open = false
    const toggle = ()=> {
      open = !open
    }

</script>

<div class="question" >
    <button class="question__top {open ? "active" : ""}" on:click={toggle}>
            <div class="question__btn">
                <div class={open ? "active" : ""}></div>
                <div  ></div>
            </div>
            <p class="question__text">{question}</p>
    </button>
    {#if open}
    <div class="question__answer " transition:slide>{answer}</div>
    {/if}
</div>

<style lang="scss"> 

    .question{
        max-width: 80rem;
        width: 100%;
    }

    .question__top{
        background-color: #f1f1f1;
        border-radius: .3rem;
        border: 1px solid #ddd;
        font-size: 1.6rem;
        font-weight: bold;
        padding: 1rem 2rem;
        width: 100%;
        max-width: 80rem;
        text-align: left;

        margin-bottom: 1.5rem;
        cursor: pointer;

        display: flex;
        gap: 1rem;
        align-items: center;
        }

    .question__top.active{
        color:var(--color-blue);
    }
    .question__answer{
    font-size: 1.6rem;
    margin-bottom: 3rem;
     }

     .question__btn{
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;

     }

     .question__btn div{
        width: 1.4rem;
        height: .3rem;
        background-color: var(--color-blue);
     }

     .question__btn div:first-child{
        position: absolute;
        z-index: 2;
        transform: rotate(90deg);

        transition: .3s ease;
     }

     .question__btn div.active{
        transform: rotate(0deg)
     }

</style>