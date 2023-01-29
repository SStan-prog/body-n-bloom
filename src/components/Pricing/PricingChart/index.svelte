<script>
  import { fade } from 'svelte/transition';

  export let pricing;
  let options = pricing.services.map((options) => options.serviceName);
  let services = pricing.services;
  let active = options[0];
</script>

<div class="pricing__container">
  <div class="pricing__options">
    <ul class="pricing__options__list">
      {#each options as option}
        <li
          class="pricing__option"
          class:active={active === option}
          on:click={() => (active = option)}
          on:keypress={() => (active = option)}
        >
          {option}
        </li>
      {/each}
    </ul>
  </div>
  <div class="pricing__tables-container">
    {#each services as service}
      {#if active === service.serviceName}
        <div in:fade={{ delay: 400 }} out:fade>
          {@html service.details}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss" global>
  .pricing {
    &__container {
      display: grid;
      grid-template-columns: min-content auto;
      background-color: var(--color-white);
      border-radius: 10px;

      box-shadow: var(--shadow-sm);

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }

    &__options {
      &__list {
        list-style: none;
        display: flex;
        flex-direction: column;
      }
    }
    &__option {
      cursor: pointer;
      padding: 2rem;
      background-color: var(--color-blue-light);
      color: var(--color-white);
      font-weight: bold;
      white-space: nowrap;

      @media (max-width: 1000px) {
        padding: 1rem;
      }

      &:first-child {
        border-radius: 10px 0 0 0;

        @media (max-width: 1000px) {
          border-radius: 10px 10px 0 0;
        }
      }

      &:last-child {
        border-radius: 0 0 0 10px;

        @media (max-width: 1000px) {
          border-radius: 0;
        }
      }

      &.active {
        color: var(--color-white);
        font-weight: bold;
        background-color: var(--color-blue);
      }
    }

    &__tables-container {
      overflow-y: scroll;

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      @media (max-width: 1000px) {
        max-height: 100%;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .tables {
    padding: 5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2.5rem;

    @media (max-width: 1000px) {
      flex-direction: column;
      padding: 2.5rem;
    }
  }

  .tables.single {
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;

    & .table {
      width: 100%;
    }

    & tr {
      grid-template-columns: 80% 20%;
      width: 100%;

      @media (max-width: 1000px) {
        grid-template-columns: 70% 30%;
      }
    }
  }

  .tables.double {
    width: 100%;

    & .table {
      width: 100%;
      max-width: 35rem;

      @media (max-width: 1000px) {
        max-width: 100%;
      }
    }

    & tr {
      grid-template-columns: 60% 40%;
      width: 100%;

      @media (max-width: 1000px) {
        grid-template-columns: 70% 30%;
      }
    }
  }

  .table {
    text-align: left;

    & th {
      padding: 0.5rem;
      background-color: var(--color-blue);

      color: var(--color-white);

      &:first-child {
        padding-left: 1rem;
        border-radius: 5px 0 0 0;
      }

      &:last-child {
        padding-right: 1rem;
        border-radius: 0 5px 0 0;
      }
    }

    & tr {
      display: grid;
      grid-template-columns: 200px 56px;
      border-right: solid 2px var(--color-blue);
      border-left: solid 2px var(--color-blue);
      padding: 0.5rem 0;

      @media (max-width: 1000px) {
        grid-template-columns: 80% 20%;
      }

      &:nth-child(odd) {
        background-color: rgb(250, 249, 249);
      }

      &:first-child {
        border-top: solid 2px var(--color-blue);
        border-radius: 8px 8px 0 0;
        background-color: transparent;
        padding: 0;
      }

      &:last-child {
        border-bottom: solid 2px var(--color-blue);
        border-radius: 0 0 8px 8px;
      }
    }
    & td {
      padding: 0.5rem;

      &:last-child {
        font-weight: bold;
      }
    }
  }
</style>
