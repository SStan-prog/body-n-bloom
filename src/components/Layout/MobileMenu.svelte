<script>
  import { slide } from 'svelte/transition';

  let openAboutMenu = false;
  const toggleAboutMenu = () => {
    openAboutMenu = !openAboutMenu;
  };

  let openTreatmentsMenu = false;
  const toggleTreatmentsMenu = () => {
    openTreatmentsMenu = !openTreatmentsMenu;
  };
</script>

<nav class="mobile-menu" transition:slide>
  <ul class="mobile-menu__list">
    <li class="mobile-menu__list-item">
      <button on:click={toggleAboutMenu}>About +</button>
      {#if openAboutMenu}
        <ul class="nested-menu" transition:slide>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li><a href="/frequently-asked-questions">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>

          <li><a href="/contact">Contact</a></li>
        </ul>
      {/if}
    </li>
    <li class="mobile-menu__list-item">
      <button on:click={toggleTreatmentsMenu}>Treatments +</button>
      {#if openTreatmentsMenu}
        <ul class="nested-menu" transition:slide>
          <li><a href="/treatments/acne-scar-removal">Acne Scar Removal</a></li>
          <li><a href="/treatments/green-peel">Green Peel</a></li>
          <li><a href="/treatments/hydrafacial">Hydrafacial</a></li>
          <li>
            <a href="/treatments/wrinkles-reduction">Laser Wrinkle Treatment</a>
          </li>
          <li>
            <a href="/treatments/laser-hair-removal">Laser Hair Removal</a>
          </li>

          <li><a href="/treatments/mesotherapy/">Mesotherapy</a></li>
          <li><a href="/treatments/nail-fungus">Nail Fungus</a></li>
          <li>
            <a href="/treatments/platelet-rich-plasma-treatments"
              >Platelet Rich Plasma Treatments</a
            >
          </li>

          <li><a href="/treatments/stretch-marks/">Stretch Marks</a></li>
          <li><a href="/treatments/spider-veins">Spider Veins</a></li>
          <li><a href="/treatments/sun-spot-damage">Sun Spot Damage</a></li>

          <li><a href="/treatments/weight-loss-diet">Weight Loss Diet</a></li>
        </ul>
      {/if}
    </li>
    <li class="mobile-menu__list-item">
      <a href="/bridal-party-facial-packages/">Wedding</a>
    </li>
    <li class="mobile-menu__list-item">
      <a href="/pricing">Pricing</a>
    </li>
    <li>
      <a
        href="https://bodynbloom.janeapp.com/"
        class="btn"
        target="_blank"
        rel="noreferrer"
      >
        Book Online
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .mobile-menu {
    border-radius: 0 0 10px 10px;

    background-color: var(--color-white);
    margin: 0 5rem;
    position: absolute;
    box-shadow: var(--shadow-sm);

    z-index: 80;
    display: none;

    width: calc(100% - 10rem);

    @media (max-width: 900px) {
      display: block;
    }

    @media (max-width: 600px) {
      margin: 0 2.5rem;
      width: calc(100% - 5rem);
    }

    &__list {
      list-style: none;

      &-item {
        padding: 1rem;
        width: 100%;

        & a {
          color: var(--color-grey);
        }
      }

      & button {
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
        color: var(--color-grey);
        font-weight: bold;
      }
    }
  }

  .nested-menu {
    display: flex;
    flex-direction: column;
    list-style: none;

    & li {
      padding: 0.5rem 1rem;
      border-bottom: solid 1px var(--color-off-white);

      & a {
        font-weight: 400;
      }
    }
  }

  .btn {
    margin: 2rem 1rem 1rem;
    display: block;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 2rem;
    border-radius: 999px;
    width: calc(100% - 2rem);

    text-decoration: none;
    font-size: 14px;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-blue-dark);
      color: var(--color-white);
    }
  }
</style>
