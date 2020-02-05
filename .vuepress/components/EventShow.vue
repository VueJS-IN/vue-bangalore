<template>
  <section class="talk">
    <h3 class="title"><u>Show &amp; Tell</u>: {{ title }}</h3>
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
    <div v-if="description" class="description" v-html="description"></div>
    <EventSpeaker :speaker="speaker" :bio="bio" />
    <ItemRow v-if="deck">
      <Icon slot="icon" name="deck" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="website">
      <Icon slot="icon" name="website" />
      <a :href="website" target="_blank">{{ website }}</a>
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
      required: true
    },
    website: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    recording: {
      type: String,
      default: ''
    },
    deck: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.talk {
  position: relative;
}

.description {
  margin-bottom: 1rem;
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
