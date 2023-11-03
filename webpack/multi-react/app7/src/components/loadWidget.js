import { createApp } from "vue";

import Widget from "./Widget";

const loadWidget = (el) => {
  createApp(Widget).mount(el);
};

export default loadWidget;
