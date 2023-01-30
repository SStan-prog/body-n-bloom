<script>
  // Import Swiper Svelte components
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  export let images;
  export let altText;
</script>

<div class="slider">
  <Swiper
    pagination={{ clickable: true }}
    modules={[Pagination]}
    class="swiper"
  >
    {#each images as image, i}
      <SwiperSlide>
        <div class="slide">
          <img src={image.src} alt={altText} loading="lazy" />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<style lang="scss">
  .slider {
    max-width: 40vw;
    width: 100%;
    overflow: hidden;

    @media (max-width: 1000px) {
      max-width: 80vw;
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
