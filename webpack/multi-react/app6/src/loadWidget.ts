import { createApp } from "vue";

import Widget from "./Widget.vue";

const loadWidget = (el: HTMLDivElement) => {
  createApp(Widget).mount(el);
};

export default loadWidget;
