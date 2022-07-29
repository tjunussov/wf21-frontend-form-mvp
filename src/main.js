import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import WFDatePicker from "./wf21/ui/wf-date-picker.vue";
import WFMediaViewer from "./wf21/ui/wf-media-viewer.vue";
import WFTaskTemplate from "./wf21/WFTaskTemplate.vue";

import Approve from "./task1/Approve.vue";

import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: {
      base: colors.amber.darken4,
      darken1: colors.purple.darken2,
      darken3: colors.purple.darken3
    },
    secondary: colors.grey,
    // All keys will generate theme styles,
    // Here we add a custom `tertiary` color
    tertiary: colors.pink.base
  }
});
Vue.use(VueRouter);

Vue.component("wf-date-picker", WFDatePicker);
Vue.component("wf-media-viewer", WFMediaViewer);
Vue.component("wf-task-template", WFTaskTemplate);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Approve
    }
  ]
});

new Vue({
  router,
  provide: {
    ctrl: {
      message: "hello!",
      get(p) {
        console.log("param name", p);
        return p;
      },
      getCurrentUser() {
        return "User";
      }
    }
  },
  render: (h) => h(App)
}).$mount("#app");
