<template>
  <ItemRow>
    <img
      v-if="twitter"
      slot="icon"
      :src="'//avatars.io/twitter/' + twitter"
      class="avatar"
    />
    <a
      v-if="twitter"
      class="speaker"
      :href="'https://twitter.com/' + twitter"
      target="_blank"
    >
      <span>{{ name }}</span>
    </a>
    <span v-else>{{ name }}</span>
    {{ bio }}
  </ItemRow>
</template>

<script>
export default {
  props: {
    speaker: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      default: ''
    }
  },
  computed: {
    name() {
      return this.speaker.replace(/<[^>]+>/, '');
    },
    twitter() {
      const matches = /<@([^>]+)>/.exec(this.speaker);

      if (matches) return matches[1];

      return '';
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: -webkit-box !important;
  align-items: center;
}

.avatar {
  height: 5rem !important;
  width: 5rem !important;
}
</style>
