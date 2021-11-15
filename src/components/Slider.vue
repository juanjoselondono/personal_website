<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide :caption="Images[0].label">
        <template #img>
          <img
            width="100%"
            height="500vh"
            :src="Images[0].uri"
            alt="image slot"
            style="object-fit:cover!important"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide :caption="Images[1].label">
        <template #img>
          <img
            width="100%"
            height="500vh"
            :src="Images[1].uri"
            alt="image slot"
            style="object-fit:cover!important"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<style scoped>
  b-carousel-slide img {
      height:100vh!important ;
      object-fit: cover !important;
  }
  .sr-only {
    display: none;
  }
</style>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    props:{
      Images: Array
    }
  }
</script>