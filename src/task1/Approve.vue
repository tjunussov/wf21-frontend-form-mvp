<template lang="pug">
wf-task-template
  v-layout(row, wrap, reverse)
    v-flex(xs12, lg3)
      v-card.amber.lighten-5(
        style="border-left:5px solid;border-left-color:DodgerBlue !important"
      )
        v-card-text
          h3.primary--text Ситуация
          | Вам пришла заявка от сотрудника на согласование Возратно-Материальной Помощи.
          h3.mt-3.primary--text Что необходимо сделать:
          | Проверьте данные заявки, укажите свой комментарий в поле Комментарий цехового комитета и если вы согласны нажмите "Согласовать", иначе нажмите "Отказать".
    v-flex(xs12, lg9)
      Information(:information="information")

    code {{ $vuetify.breakpoint }}

  template(slot="footer") 
    v-layout(row, wrap, pl-3, pr-4)
      v-flex(
        :grow="!$vuetify.breakpoint.smAndDown",
        :xs12="$vuetify.breakpoint.smAndDown",
        pa-1=""
      )
        v-form(ref="form")
          v-textarea(
            Zbox,
            label="Комментарий Цехового Комитета",
            v-model="commitieComment",
            Zrules="[rules.required]",
            rows="1",
            auto-grow
          )
      v-flex(
        :shrink="!$vuetify.breakpoint.smAndDown",
        :xs12="$vuetify.breakpoint.smAndDown",
        pa-1,
        align-self-center
      )
        v-layout(align-center)
          v-btn(
            color="primary",
            :block="$vuetify.breakpoint.xsOnly",
            Zreadonly="loading",
            @click="submit()"
          ) Согласовать
          v-btn(
            color="secondary",
            outline,
            :block="$vuetify.breakpoint.xsOnly",
            Zreadonly="loading",
            @click="cancel()"
          ) Отказать
</template>
<script>
import Information from "./Information.vue";

export default {
  components: {
    Information,
  },
  props: ["loading", "vars"],
  inject: ["ctrl"],
  created() {
    console.log(this.ctrl.message); // injected value
  },
  data() {
    return {
      information: {
        fio: this.ctrl.get("fio"),
        phone: this.ctrl.get("phone"),
        birthdate: this.ctrl.get("birthdate"),
        iin: this.ctrl.get("iin"),
        tabelNo: this.ctrl.get("tabelNo"),
        bankDetails: this.ctrl.get("bankDetails"),
        identityCard: this.ctrl.get("identityCard"),
        region: this.ctrl.get("region"),
        workPlace: this.ctrl.get("workPlace"),
        structuralUnit: this.ctrl.get("structuralUnit"),
        requestedSumm: this.ctrl.get("requestedSumm"),
        purpose: this.ctrl.get("purpose"),
        documents: this.ctrl.get("documents"),
        paymentConditions: this.ctrl.get("paymentConditions"),
        loanTerms: this.ctrl.get("loanTerms"),
        membershipLength: this.ctrl.get("membershipLength"),
        returnMonthLength: this.ctrl.get("returnMonthLength"),
      },
      commitieComment: null,
      commitieResult: null,
      user: this.ctrl.getCurrentUser(),
    };
  },
  methods: {
    cancel() {
      this.ctrl.submit([
        ["commitieResult", "cancel", "String"],
        ["commitieComment", this.commitieComment, "String"],
        [
          "commitieUserDetails",
          `${this.user.firstName} ${this.user.lastName}`,
          "String",
        ],
      ]);
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.ctrl.submit([
          ["commitieResult", "approve", "String"],
          ["commitieComment", this.commitieComment, "String"],
          [
            "commitieUserDetails",
            `${this.user.firstName} ${this.user.lastName}`,
            "String",
          ],
        ]);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
#hidden_div {
  display: none;
}
</style>
