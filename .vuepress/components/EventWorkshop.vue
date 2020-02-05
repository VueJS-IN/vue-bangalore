<template>
  <section class="talk">
    <h3 class="title">{{ title }}</h3>
    <div v-if="description" v-html="description"></div>
    <EventSpeaker
      v-for="(entry, index) in allSpeakers"
      :key="index"
      :speaker="entry"
    />
    <ItemRow v-if="deck">
      <Icon slot="icon" name="deck" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="source">
      <Icon slot="icon" name="github" />
      <a :href="source" target="_blank">{{
        source.replace(/https?:\/\/github.com\//, '')
      }}</a>
    </ItemRow>
    <ItemRow v-if="issue">
      <Icon slot="icon" name="request" />
      <a :href="issue" target="_blank">{{ issue | title }} </a>
    </ItemRow>
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
      default: null
    },
    speakers: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    deck: {
      type: String,
      default: ''
    },
    issue: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    allSpeakers() {
      return this.speakers ? this.speakers : [this.speaker];
    }
  }
};
</script>

<style scoped>
.talk {
  position: relative;
}
.title::before {
  content: 'Workshop:';
  padding-right: 10px;
  display: inline-block;
  text-decoration: underline;
}
</style>
