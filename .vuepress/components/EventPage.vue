<template>
  <div class="event">
    <header>
      <h1 class="title">
        <a :href="'https://meetup.com/vue-bangalore/events/' + $page.frontmatter.meetup" target="_blank">
          <span class="title-hashtag">VueBLR #{{ $page.frontmatter.id }}</span>
        </a>
        <span class="title-text">{{ $page.frontmatter.title }}</span>
      </h1>
    </header>

    <main class="agenda">
      <EventGallery :photos="$page.frontmatter.photos" />

      <h2>Agenda</h2>
      <ul>
        <li v-for="(item, index) in $page.frontmatter.agenda" :key="index">
          <component :is="use(item.type)" v-bind="item" />
        </li>
      </ul>
    </main>

    <footer>
      <section v-if="date">
        <h2>Details</h2>

        <p><strong>Date:</strong> {{ date.toDateString() }}</p>
        <p><strong>Time:</strong> {{ $page.frontmatter.time }}</p>
        <p><strong>Venue:</strong> {{ $page.frontmatter.venue.name }} (<a :href="$page.frontmatter.venue.map" target="_blank" rel="noopener noreferrer">see on map</a>)</p>
      </section>

      <section v-if="widget && !widgetExpired">
        <h2>Register</h2>
        <iframe :src="widget" frameborder="10" height="600" width="100%"></iframe>
      </section>

      <h2>Sponsors</h2>
      <EventSponsor v-for="(item, index) in $page.frontmatter.sponsors" :key="item.sponsor" v-bind="item" />

      <h2>Organizers</h2>
      <EventSpeaker v-for="(item, index) in $page.frontmatter.organizers" :key="item" :speaker="item" />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date()
    }
  },
  methods: {
    use (type) {
      switch (type) {
        case 'talk': return 'EventTalk';
        case 'show': return 'EventShow';
        case 'tell': return 'EventTell';
        case 'workshop': return 'EventWorkshop';
        case 'Q&A': return 'EventQuestion';
        default: return 'EventDefault';
      }
    }
  },
  computed: {
    date() {
      return this.$page.frontmatter.date ? new Date(this.$page.frontmatter.date) : null
    },
    widget() {
      return this.$page.frontmatter.townscript ? "https://www.townscript.com/widget/" + this.$page.frontmatter.townscript : null;
    },
    widgetExpired() {
      if (this.$page.frontmatter.date) {
        let eventEndDate = new Date(this.$page.frontmatter.date);
        // Calculating midnight of event date. IST is ahead of UTC
        // by 5:30 hours so we need to subtract that.
        // TODO: Maybe just add event timing to the frontmatter date
        // as well? 🤷‍♂️
        eventEndDate.setUTCHours(0, (24 - 5.5) * 60);

        console.log(eventEndDate);
        console.log(this.today);

        return this.today - eventEndDate > 0;
      }

      return false;
    }
  }
}
</script>

<style scoped>
.title-hashtag {
  opacity: .75;
  display: inline-block;
  margin-right: 1rem;
}
</style>


