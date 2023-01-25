<script>
  import MobileMenu from './MobileMenu.svelte';

  import { slide } from 'svelte/transition'
      let openMenu = false
    const toggle = ()=> {
      openMenu = !openMenu

    }
</script>

<nav class="nav">
  <div class="nav__top">
    <div class="nav__top-links">
      <div class="nav__top-links-item">
        <img src="/icons/call.svg" alt="phone number" />
        <a href="tel:6135528504">613-552-8504</a>
      </div>
      <div class="nav__top-links-item">
        <img src="/icons/mail.svg" alt="email" />
        <a href="mailto:ilona.pap@bodynbloom.ca">ilona.pap@bodynbloom.ca</a>
      </div>
    </div>
    <div class="nav__top-social">
      <a href="https://www.facebook.com/bodynbloom" target="_blank" rel="noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://twitter.com/bnblaser" target="_blank" rel="noreferrer">
        <img src="/icons/twitter.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/bnblaser/" target="_blank" rel="noreferrer">
        <img src="/icons/instagram.svg" alt="Instagram" />
      </a>
    </div>
  </div>
  <div class="nav__main">
        <div class="nav__main-logo-container">
          <a href="/">
          <img src="/images/logos/BNB_logo.png" alt="Body 'N' Bloom Logo" >
        </a>
        </div>
        <ul class="nav__main-list">
          <li class="nav__main-list-item">
            <p >About Us</p>
            <ul class="nav__main-list-dropdown">
              <li class="nav__main-list-dropdown-item">
                <a href="/about">About</a>
                
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/frequently-asked-questions">FAQ</a>
                
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/blog">Blog</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/referral-program">Referral Program</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </li>

          <li class="nav__main-list-item">
            <p href="#">Treatments</p>
            <ul class="nav__main-list-dropdown">
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/laser-hair-removal/">Laser hair removal</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/spider-veins/">Spider Veins</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/sun-spot-damage/">Sun spot damage</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/wrinkles-reduction/">Laser Wrinkle Treatment</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/nail-fungus/">Nail Fungus</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/green-peel/">Green Peel</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/platelet-rich-plasma-treatments/">Platelet Rich Plasma Treatments</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/acne-scar-removal/">Acne Scar Removal</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/mesotherapy/">Mesotherapy</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/stretch-marks/">Stretch Marks</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/weight-loss-diet/">Weight Loss Diet</a>
              </li>
              <li class="nav__main-list-dropdown-item">
                <a href="/treatments/hydrafacial/">Hydrafacial</a>
              </li>
            </ul>
          </li>

          <li class="nav__main-list-item">
            <a href="/bridal-party-facial-packages">Wedding</a>
          </li>

          <li class="nav__main-list-item">
            <a href="/pricing">Pricing</a>
          </li>

          <li>
            <a  href="https://bodynbloom.janeapp.com/" class="btn" target = "_blank" rel= "noreferrer ">Book Online</a>
          </li>
        </ul>
        <button class="menu-btn" on:click={toggle} name="Open mobile menu">
              <div class={openMenu ? "active" : ""}></div>
              <div class={openMenu  ? "active" : ""}></div>
              <div class={openMenu  ? "active" : ""}></div>
        </button>
  </div>
  {#if openMenu}
  <MobileMenu openMenu = {openMenu} />
  {/if}
</nav>

<style lang="scss">
  .nav {
    position: relative;

    &__main{
      padding: 1rem 5rem;
      background-color: var(--color-white);

      display: grid;
      width: 100%;
      grid-template-columns: 30% 70%;
      align-items: center;

      @media (max-width: 600px) {
        padding: 1rem 2.5rem;
    }



      &-logo-container{
        & img{
          max-width: 12rem;
        }
      }

      &-list{
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;

        @media (max-width: 900px) {
     display: none;
    }

       

        &-item{
          position: relative;
          text-transform: uppercase;
          padding-bottom: 1rem;
          margin-bottom: -1rem;

          & p {
            font-weight: bold;
          }

          & a {
            color: var(--color-grey);
        
          }

          &:hover .nav__main-list-dropdown{
            display: block;
          }
        }


        &-dropdown{
          position: absolute;
          top: 3rem;
          z-index: 2;
          display: none;

          list-style: none;
          background-color: var(--color-light-grey);

          padding: 1rem;
          box-shadow: var(--shadow-sm);
          border-radius: 5px;
          

          &-item{
            margin:.5rem 0;
            white-space: nowrap;
          }
        }
      }
    }

    &__top {
      padding: 0.5rem 10rem;
      background-color: var(--color-green-dark);

      display: flex;
      justify-content: space-between;

      @media (max-width: 900px) {
        padding: 0.5rem 5rem;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 5rem;
      }

      @media (max-width: 400px) {
        padding: 1rem 2rem;
      }

      &-links {
        display: flex;
        gap: 5rem;
        flex-wrap: wrap;

        @media (max-width: 600px) {
          gap: 1rem;
          justify-content: center;
        }

        &-item {
          display: flex;
          align-items: center;

          & img {
            width: 2.2rem;
          }

          & a {
            color: var(--color-white);
            text-decoration: none;
            font-size: 1.4rem;
            margin-left: 1rem;
          }
        }
      }

      &-social {
        display: flex;
        gap: 2rem;
        align-items: center;

        @media (max-width: 600px) {
          justify-content: center;
          gap: 2rem;
        }

        & img {
          width: 1.8rem;
          max-height: 1.8rem;
        }
      }
    }
  }

  .btn {
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 2rem;
    border-radius: 999px;

    width: min-content;
    white-space: nowrap;

    text-decoration: none;
    font-size: 14px;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-blue-dark);
      color: var(--color-white);
    }
  }

  .menu-btn{
    justify-self: flex-end;
    width: min-content;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 2.5rem;

    display: none;

    @media (max-width: 900px) {
        display: flex;
      }

    & div:first-child {
      transform: rotate(0deg);
    }

    & .active:first-child {
     transform: rotate(45deg);
     opacity: 1;
    }

    & .active:last-child {
     transform: rotate(-45deg);
     opacity: 1;
    }

    & div{
      transition: transform .3s ease, opacity .3s ease;
      height: .4rem;
      width: 3rem;
      background-color: var(--color-black);

      &.active{
        opacity: 0;
      }

      &:first-child {
        transform-origin: left center;
      }

      &:last-child{
        transform-origin: left center;
      }
    }
  }
</style>
