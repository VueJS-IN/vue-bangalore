<script>
/* global popup */
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: [String, Date],
      required: true
    },
    time: {
      type: String,
      required: true
    },
    venue: {
      type: Object,
      default: () => ({
        name: 'TBA'
      })
    },
    townscript: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    eventDate() {
      return this.date ? new Date(this.date) : null;
    },
    isUpcoming() {
      return this.eventDate && this.eventDate.getTime() > Date.now();
    }
  },
  methods: {
    showTicketsPopup: function() {
      popup(this.townscript);
    }
  }
};
</script>

<template>
  <section>
    <h3>
      #{{ id }} <a :href="link">{{ title }}</a>
    </h3>

    <div v-if="eventDate">
      <p>
        <strong>Venue:</strong> {{ venue.name }} (<a
          :href="venue.map"
          target="_blank"
          rel="noopener noreferrer"
          >see on map</a
        >) <br />
        <strong>Time:</strong> {{ eventDate.toDateString() }}, {{ time }}
      </p>

      <p v-if="isUpcoming && townscript">
        <button class="tsbutton" @click="showTicketsPopup">
          Count me in!
        </button>
        <noscript id="tsNoJsMsg"
          >Javascript on your browser is not enabled.</noscript
        >
        <script
          src="https://www.townscript.com/popup-widget/townscript-widget.nocache.js"
          type="text/javascript"
        ></script>
      </p>
    </div>
  </section>
</template>
