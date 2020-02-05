<template>
  <ItemRow>
    <img
      v-if="twitter"
      slot="icon"
      :src="'//avatars.io/twitter/' + twitter"
      class="avatar"
    />
    <a v-if="twitter" :href="'https://twitter.com/' + twitter" target="_blank">
      {{ name }}
    </a>
    <span v-else>
      {{ name }}
    </span>
    <span>&nbsp;- {{ type | toName }}</span>
  </ItemRow>
</template>

<script>
export default {
  filters: {
    toName(value) {
      return value[0].toUpperCase() + value.substr(1) + ' Partner';
    }
  },
  props: {
    sponsor: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    name() {
      return this.sponsor.replace(/<[^>]+>/, '');
    },
    twitter() {
      const matches = /<@([^>]+)>/.exec(this.sponsor);

      if (matches) return matches[1];

      return '';
    }
  }
};
</script>
