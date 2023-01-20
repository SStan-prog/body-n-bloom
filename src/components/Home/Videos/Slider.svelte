<script>
    // Import Swiper Svelte components
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    import {  Pagination } from 'swiper';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';

</script>

<div class="home-videos-slider">
<Swiper
    pagination={{ clickable: true }}
    modules={[ Pagination]}
    class = "swiper"
  >
    <SwiperSlide >
      <div class="slide">
    <iframe src="https://www.youtube.com/embed/ORtX73avXdw" title="YouTube video player" frameborder="0" class="video"></iframe>
    <iframe src="https://www.youtube.com/embed/EtNIumU8KzE"  title="YouTube video player" frameborder="0" class="video"></iframe>
  </div>
  </SwiperSlide>
    <SwiperSlide>
      <div class="slide">
      <iframe src="https://www.youtube.com/embed/zTj6p9ImxjE" title="YouTube video player" frameborder="0" class="video"></iframe>
      <iframe src="https://www.youtube.com/embed/Pr0uONPtufo"  title="YouTube video player" frameborder="0" class="video"></iframe>
    </div>
    </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
        <iframe src="https://www.youtube.com/embed/0uu05m0HwBA" title="YouTube video player" frameborder="0" class="video"></iframe>
        <iframe src="https://www.youtube.com/embed/IYHxdBiGtJw"  title="YouTube video player" frameborder="0" class="video"></iframe>
      </div>
      </SwiperSlide>

</Swiper>
</div>
 

<style lang="scss">

.slider{

  .swiper {
    padding-bottom: 7.5rem;
  }
  .swiper-pagination{
    bottom: 0!important;
  }

}

.slide{
  display: flex;
  justify-content: center;
  gap: 10rem;
      & iframe{
        aspect-ratio: 16/9;
        width: 50rem;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      gap: 5rem;

      & iframe{
        width: 40rem;
    }
      }

      @media (max-width: 500px) {

      & iframe{
        width: 30rem;
    }
      }
}

</style>