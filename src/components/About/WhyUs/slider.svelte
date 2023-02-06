<script>
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
</script>

<div class="slider">
  <Swiper
    pagination={{ clickable: true }}
    modules={[Pagination]}
    class="swiper"
  >
    <SwiperSlide>
      <div class="slide">
        <img
          src="/images/about/about-slider-1.jpg"
          alt="Comfortable couches at Body 'N' Bloom."
          loading="lazy"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="slide">
        <img
          src="/images/about/about-slider-3.jpg"
          alt="A woman receiving a skincare consultation."
          loading="lazy"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <img
          src="/images/about/about-slider-4.jpg"
          alt="A woman receiving a skincare consultation."
          loading="lazy"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <img
          src="/images/about/about-slider-5.jpg"
          alt="A woman receiving laser skin treatment"
          loading="lazy"
          style="transform: rotate(-90deg);"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
        <img
          src="/images/about/about-slider-6.jpg"
          alt="A woman receiving laser skin treatment on her foot"
          loading="lazy"
          style="transform: rotate(-90deg);"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</div>

<style lang="scss">
  .slider {
    max-width: 40vw;
    width: 100%;
    overflow: hidden;

    @media (max-width: 1000px) {
      max-width: 90vw;
      margin: 0 auto;
    }
  }

  .slide {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 5rem;

    & img {
      object-fit: contain;
      width: 100%;
      height: auto;

      max-width: 60rem;
    }
  }
</style>
