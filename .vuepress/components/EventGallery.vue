<template>
  <Carousel
    class="gallery"
    :per-page="1"
    :autoplay="true"
    :loop="true"
    :navigation-enabled="true"
  >
    <Slide v-for="photo in photos" :key="photo" class="slide">
      <img class="img" :src="photo" />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from '../../node_modules/vue-carousel/src/index.js';

export default {
  components: { Carousel, Slide },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img {
  object-fit: contain;
}
</style>
