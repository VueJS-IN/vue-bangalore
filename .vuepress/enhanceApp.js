import EventGallery from './components/EventGallery.vue';
import EventPage from './components/EventPage.vue';
import EventQuestion from './components/EventQuestion.vue';
import EventShow from './components/EventShow.vue';
import EventSpeaker from './components/EventSpeaker.vue';
import EventSponsor from './components/EventSponsor.vue';
import EventTalk from './components/EventTalk.vue';
import EventTell from './components/EventTell.vue';
import EventWorkshop from './components/EventWorkshop.vue';
import Icon from './components/Icon.vue';
import ItemRow from './components/ItemRow.vue';

const components = {
  EventGallery,
  EventPage,
  EventQuestion,
  EventShow,
  EventSpeaker,
  EventSponsor,
  EventTalk,
  EventTell,
  EventWorkshop,
  Icon,
  ItemRow
};

export default ({ Vue }) => {
  Object.entries(components).forEach(([name, component]) =>
    Vue.component(name, component)
  );
};
