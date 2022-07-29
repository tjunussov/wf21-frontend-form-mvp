<template lang="pug">
v-layout(:class="{ 'pa-3' : !$vuetify.breakpoint.xsOnly}" fill-height)
  v-card.task(:class="{'full-height-desktop' : !$vuetify.breakpoint.xsOnly, 'full-height-mobile' : $vuetify.breakpoint.xsOnly }" width="100%")

    v-toolbar.v-toolbar-responsive.transparent(flat card)
      v-btn.my-0(:disabled="loading" icon Zclick="back")
        v-icon arrow_back
      v-toolbar-title.ml-0.task-toolbar-title
        v-avatar(size="40" v-if="!$vuetify.breakpoint.xsOnly")
          v-icon.white--text.process-default-icon
        ul(:class="{'pl-1' : $vuetify.breakpoint.xsOnly }")
          li(v-html="'Возратно-Материальная Помощь - Джунусов Тимур, Сумма 32.000 тг'")
          li(v-html="'Согласование Цеховым Комитетом'").body-2.grey--text.font-weight-thin
      v-spacer
      div.hidden-xs-only.grey--text {{ '10-07-2022 14:09' }}
      v-menu(bottom left)
        v-btn(slot="activator" icon)
          v-icon more_vert
        //v-list
          v-list-tile(v-if="task.assignee === null" @click="claim")
            v-list-tile-action
              v-icon(color="green") done
            v-list-tile-content
              v-list-tile-title {{ $tf('task.claim') }}
          v-list-tile(v-if="task.assignee === profile.userName && canUnclaim" @click="unclaim")
            v-list-tile-action
              v-icon(color="red") clear
            v-list-tile-content
              v-list-tile-title {{ $tf('task.unclaim') }}
          v-list-tile(@click="diagram = true")
            v-list-tile-action
              v-icon(color="blue") timeline
            v-list-tile-content
              v-list-tile-title {{ $tf('task.showDiagram') }}
          v-list-tile(@click="selectProcess(task.processInstanceId)")
            v-list-tile-action
              v-icon(color="blue") history
            v-list-tile-content
              v-list-tile-title {{ $tf('task.showHistory') }}
          v-list-tile(v-if="businessKey" @click="copyBusinessKey")
            v-list-tile-action
              v-icon(color="blue") info
            v-list-tile-content
              v-list-tile-title {{ businessKey }}

    v-divider

    v-card-text.grey.lighten-3(:class="{ 'px-0' : true }")
      v-container(fluid grid-list-xl :class="[ !$vuetify.breakpoint.xsOnly ? 'pt-2' : 'pt-0' ]")
        slot
    v-divider
    v-card-actions.white(v-if="$slots['footer']"  class="")
      slot(name="footer")
</template>

<script>

export default {
  name: 'wf-task-template',
  data() {
    return {
      task:null,
      loading:false,
    }
  },
  created() {
  },
}
</script>

<style scoped lang="stylus">

.full-height-desktop {
  height: calc(100vh - 90px);
}

.full-height-mobile {
  height: calc(100vh - 50px);
}

.v-card.task {
  display: flex !important;
  flex-direction: column;
}

.v-card.task .v-card__text {
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
}

.task-toolbar-title .v-avatar {
  vertical-align: text-bottom;
}
.task-toolbar-title ul {
  list-style: none;
  display: inline-block;
  padding-left: 18px;
}
.task-toolbar-title ul li {
  line-height: 20px;
  font-size: 16px;
}
  
</style>
