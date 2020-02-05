<template>
  <div class="feedbacks-wrapper">
    <p>
      <slot>
        Here is the verbatim feedback from the audience:
      </slot>
    </p>
    <Carousel
      class="feedbacks-carousel"
      :per-page="1"
      :autoplay="true"
      :loop="true"
    >
      <Slide v-for="(feedback, i) in feedbacks" :key="i" class="slide">
        <div class="slide">
          <blockquote class="quote">{{ feedback }}</blockquote>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from '../../node_modules/vue-carousel/src/index.js';

export default {
  components: { Carousel, Slide },
  props: {
    feedbacks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
/* Fixes for the vue-carousel */
.feedbacks-wrapper >>> .VueCarousel-dot-container {
  margin-top: 0 !important;
}

.feedbacks-wrapper >>> .VueCarousel-dot {
  margin-top: 0 !important;
}

.feedbacks-wrapper {
  margin: 1rem 0;
  width: 100%;
}

p {
  margin: 0;
}

.feedbacks-carousel {
  width: 100%;
}

.slide {
  box-sizing: border-box;
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  padding: 10px;
}

.quote {
  border-left: none;
  padding: 0;
  text-align: center;
  color: #3eaf7c;
  font-style: italic;
  line-height: 1.3;
  font-size: 2rem;
  width: 100%;
  margin: 0;
}

.quote::before {
  content: '\201C';
}

.quote::after {
  content: '\201D';
}
</style>
