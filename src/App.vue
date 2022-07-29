<template lang="pug">
v-app
  v-toolbar.main--toolbar.bi-toolbar(
    height="58",
    app,
    fixed,
    dense,
    dark,
    Zclass="'grey'"
  )
    v-toolbar-title
      v-toolbar-side-icon
      span.brand-logo
        span.logo-name.font-weight-bold.ml-3.mr-2 Workflow
        img.logo-icon(src="./assets/logo_wf21.svg")
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn(flat) Task
      v-btn(flat) Process
      v-btn(flat) Reports
      v-btn(icon)
        v-icon apps

  v-content
    router-view
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      mobile: "Test",
    };
  },

  methods: {},
};
</script>


<style lang="stylus">
html {
  overflow hidden
}
#app {
  background-image: url("/expo_bg.jpg");
  background-size: cover;
}

.bi-toolbar {
  background: #142956 !important;
}

.brand-logo {
  cursor: pointer;
  height: 36px;

  .logo-name {
    vertical-align: middle;
    font-size: 24px;
    letter-spacing: -0.5px;
  }

  .logo-icon {
    vertical-align: middle;
    height: 34px;
  }
}
</style>

