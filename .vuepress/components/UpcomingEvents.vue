<script>
import events from '@dynamic/events';
import EventSummary from './EventSummary.vue';

export default {
  components: { EventSummary },
  computed: {
    events() {
      const now = Date.now();

      return events.filter(
        event => event.date && new Date(event.date).getTime() >= now
      );
    }
  }
};
</script>

<template>
  <div class="events">
    <EventSummary
      v-for="event in events"
      :key="event.id"
      class="event"
      v-bind="event"
    />
  </div>
</template>

<style scoped>
.events {
  margin: 1rem 0;
}

.event {
  margin-bottom: 1rem;
}
</style>
