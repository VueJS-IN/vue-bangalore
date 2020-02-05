<template>
  <section class="talk">
    <h3 class="title"><u>Talk</u>: {{ title }}</h3>
    <div v-if="recording" class="recording">
      <iframe
        :src="recording"
        width="100%"
        height="100%"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-if="description" v-html="description"></div>
    <ItemRow v-if="feedbacks">
      <FeedbackGallery :feedbacks="feedbacks" />
    </ItemRow>
    <EventSpeaker :speaker="speaker" :bio="bio" />
    <ItemRow v-if="deck">
      <Icon slot="icon" name="deck" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="issue">
      <Icon slot="icon" name="github" />
      <a :href="issue" target="_blank">{{ issue | filename }} </a>
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
    description: {
      type: String,
      default: ''
    },
    speaker: {
      type: String,
      required: true
    },
    bio: {
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
    recording: {
      type: String,
      default: ''
    },
    feedbacks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.talk {
  position: relative;
}

.recording {
  width: 100%;
  padding-top: 56.29%;
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
