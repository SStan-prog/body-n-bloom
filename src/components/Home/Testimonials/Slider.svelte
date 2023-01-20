<script>
    // Import Swiper Svelte components
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    import {  Pagination } from 'swiper';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';

</script>

<div class="home-testimonials-slider">
<Swiper
    pagination={{ clickable: true }}
    modules={[ Pagination]}
    class = "swiper"
  >
    <SwiperSlide >
      <div class="slide">

    <img src="/icons/quote.svg" alt="Quote icon">
        <p class="slide__body">
            After receiving laser hair removal treatment at Body ‘N’ Bloom I felt compelled to talk about my experience. 
            I have been to a number of sessions (7-8) for hair removal at a different laser clinic in Ottawa and it was ineffective 
            partly because of the fact that I have dark skin and most treatments available cannot be used optimally on dark skin. 
            The procedures at the clinic would be long and painful and I would have burn marks following treatment – with no significant difference in hair growth. 
            The very first time I had a treatment at Body ‘N’ Bloom I felt minimal pain, and it was a very quick process. I saw a very significant reduction in hair growth following the first treatment, 
            and most of the hair that did grow back, came in finer and slower. Furthermore Ilona’s focus is on providing her clients with a safe, caring, friendly, non-judgmental, and comfortable environment.
            She is knowledgeable and is constantly trying to improve the experience she provides her clients. She is also a nurse and an engineer by training which comes in handy as she is meticulous, and empathetic in her approach.
            I would recommend Body ‘N’ Bloom to anyone who is looking for a safe and effective means to permanently eliminate unwanted hair, especially for those tanned to deep toned goddesses out there – you will not regret it!
        </p>
    <span class="slide__name">-- Dilini K. --</span>
  </div>
  </SwiperSlide>
  <SwiperSlide >
    <div class="slide">
    <img src="/icons/quote.svg" alt="Quote icon">
    <p class="slide__body">
        I had a few things treated, my legs, underarms, and face for laser hair removal. It was my first experience with laser hair removal, and it was great! Candela is by far the best machine out there, believe me! 
        The treatment was very effective and comfortable. After the very first treatment, I noticed a huge improvement, my hair was either not growing back at all, or coming back really fine and very slowly.  
        I compared my experience with the experiences of some family members who had treatments done at other places, and my experience and results were by far superior. It is also so important to have a technician who understands the technique and who is also thorough. 
        I couldn’t be happier with this place and with Ilona, who did my treatment. She keeps track of my skin type, settings used and how I responded to the treatment. I feel good knowing that I am in capable hands. 
        I highly recommend Body ‘N’ Bloom to anyone who may be interested in laser hair removal!
    </p>
  <span class="slide__name">-- Christine B. --</span>
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
  flex-direction: column;
      & img{
       width: 3rem;
       margin-bottom: 2rem;

       @media (max-width: 600px) {
        width: 2rem;
        margin-bottom: 1rem;
    }
    }

    &__body{


    @media (max-width: 600px) {
     font-size: 1.4rem;
    }
    }

  
      &__name{
        color: var(--color-blue);
        font-size: 2.6rem;
        margin-top: 2rem;
        font-weight: bold;

        @media (max-width: 600px) {
            font-size: 2rem;
            margin-top: 1rem;
    }
    
      }
    
}

</style>