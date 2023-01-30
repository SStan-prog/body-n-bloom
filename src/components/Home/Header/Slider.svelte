<script>
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
</script>

<Swiper
  slidesPerView={1}
  pagination={{ clickable: true }}
  modules={[Pagination]}
>
  <SwiperSlide>
    <div class="slide slide-1">
      <div class="container">
        <h1>Body 'N' Bloom</h1>
        <p>
          Is a top-rated laser hair removal and aesthetics clinic, with
          state-of-the art equipment, and caring, professional service.
        </p>
        <span>Look Good, Feel Better</span>
        <a
          href="https://bodynbloom.janeapp.com/"
          target="_blank"
          rel="noreferrer"
          class="btn">BOOK YOUR FREE CONSULTATION</a
        >
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slide slide-2">
      <div class="container">
        <h2>Skin and facial treatment</h2>
        <p>
          Wrinkles, Acne Scars, Fractional Resurfacing, Striae (Stretch Marks),
          Hydrafacial Skin Resurfacing, Facial and Spider veins, Hair removal
          for all skin type and many more...
        </p>

        <a
          href="https://bodynbloom.janeapp.com/"
          target="_blank"
          rel="noreferrer"
          class="btn">BOOK YOUR FREE CONSULTATION</a
        >
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="slide slide-3">
      <div class="container">
        <h2>Referral Rewards Program</h2>
        <p>Refer your friends and earn free treatments</p>

        <a
          href="https://bodynbloom.janeapp.com/"
          target="_blank"
          rel="noreferrer"
          class="btn">BOOK YOUR FREE CONSULTATION</a
        >
      </div>
    </div>
  </SwiperSlide>
</Swiper>

<style lang="scss">
  .slide-1 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url('/images/home/slider-1.jpg');
    background-position: 50% 70%;
  }

  .slide-2 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url('/images/home/slider-2.jpg');
  }

  .slide-3 {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url('/images/home/slider-3.jpg');
  }

  .slide {
    padding: 10rem 5rem;
    width: 100%;
    height: 100%;

    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
      padding: 5rem 2.5rem;
    }

    & h1,
    h2 {
      font-family: var(--font-heading);
      font-size: 5rem;
      color: var(--color-white);
      text-shadow: var(--header-text-shadow);
      text-align: center;
      text-transform: uppercase;

      margin-bottom: 2rem;

      @media (max-width: 600px) {
        font-size: 3rem;
      }
    }

    & p {
      font-size: 2.6rem;
      color: var(--color-white);
      text-shadow: var(--header-text-shadow);
      margin-bottom: 1rem;

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    & span {
      font-family: cursive;
      font-size: 2.6rem;
      color: var(--color-white);
      text-shadow: var(--header-text-shadow);

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 800px;
      text-align: center;
    }

    .btn {
      background-color: var(--color-blue);
      color: var(--color-white);
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem 3rem;
      border-radius: 999px;

      width: min-content;
      white-space: nowrap;

      text-decoration: none;
      font-size: 18px;

      transition: background-color 0.3s ease;

      margin-top: 5rem;

      &:hover {
        background-color: var(--color-blue-dark);
        color: var(--color-white);
      }
    }

    @media (max-width: 600px) {
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
    }
  }
</style>
