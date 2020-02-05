<template>
  <section class="talk">
    <h3 class="title">{{ title }}</h3>
    <EventSpeaker :speaker="speaker" />
  </section>
</template>

<script>
export default {
  filters: {
    filename(value) {
      return value.split('/').pop();
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.talk {
  position: relative;
}
.title::before {
  content: 'Q & A';
  font-size: 0.5rem;
  position: absolute;
  top: -0.6em;
  opacity: 0.75;
}
</style>
