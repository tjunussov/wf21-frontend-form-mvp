<template lang="pug">
v-layout(row, wrap)
  v-flex(xs12)
    v-expansion-panel.elevation-0(v-model="panels" expand flat Zinset Zfocusable)
      v-expansion-panel-content(expand-icon="mdi-menu-down")
        template(v-slot:header="")  
          .primary--text.title.my-2 
            v-icon.mr-2(color="primary") person 
            | Заявитель {{information.fio}} {{information.tabelNo}}
        v-card.px-3
          v-card-text
              v-layout(row, wrap)
                v-flex(xs12, sm6, lg4)
                  v-text-field(
                    label="ФИО заявителя",
                    v-model="information.fio",
                    readonly
                  )
                v-flex(xs12, sm6, lg4)
                  v-text-field(
                    label="Сотовый телефон",
                    v-model="information.phone",
                    readonly
                  ) 
                v-flex(xs12, sm6, lg4)
                  wf-date-picker(
                    label="Дата рождения",
                    v-model="information.birthdate",
                    hide-details,
                    readonly,
                    disabled
                  )
                v-flex(xs12, sm6, lg4)
                  v-text-field(label="ИИН", v-model="information.iin", readonly)
                v-flex(xs12, sm6, lg4)
                  v-text-field(
                    label="Табельный номер",
                    v-model="information.tabelNo",
                    readonly
                  )
                v-flex(xs12, sm6, lg4)
                  v-text-field(
                    label="Банковские реквизиты (наименование банка и 20-значный код счета)",
                    v-model="information.bankDetails",
                    readonly
                  )
                v-flex(xs12, sm6, lg4)
                  v-text-field(
                    label="Номер и дата выдачи удостоверения личности",
                    v-model="information.identityCard",
                    readonly
                  )
                v-flex(xs12, sm6, lg4)
                  v-autocomplete(
                    label="Регион дислокации",
                    Zitems="regionList",
                    v-model="information.region",
                    Zmenu-props="{contentClass:'show_overflow'}",
                    readonly,
                    hide-no-data,
                    color="blue darken-2",
                    return-object,
                    item-text="name"
                  )
                v-flex(xs12, sm6, lg4)
                  v-autocomplete(
                    label="Промышленный комплекс (место работы)",
                    Zitems="workPlaceList",
                    v-model="information.workPlace",
                    Zmenu-props="{contentClassZ'show_overflow'}",
                    readonly,
                    hide-no-data,
                    color="blue darken-2",
                    return-object,
                    item-text="name"
                  )
                v-flex(xs12, sm6, lg4)
                  v-autocomplete(
                    label="Наименование структурного подразделения (цеха, отдела и т.п.)",
                    Zitems="structuralUnitList",
                    v-model="information.structuralUnit",
                    Zmenu-props="{contentClassZ'show_overflow'}",
                    readonly,
                    hide-no-data,
                    color="blue darken-2",
                    return-object,
                    item-text="name"
                  )
      v-expansion-panel-content(expand-icon="mdi-menu-down")
            template(v-slot:header="")  
              .primary--text.title.my-2 
                v-icon.mr-2(color="primary") note 
                | Заявка {{information.purpose}} на сумму {{information.requestedSumm}}
            v-card.px-3
              v-card-text
                v-layout(row, wrap)
                  v-flex(xs12)
                    v-textarea(
                      box,
                      label="Цель получения помощи",
                      v-model="information.purpose",
                      readonly
                    )
                
                  v-flex(xs12, sm6, lg4)
                    v-text-field(
                      label="Сумма запрашиваемой помощи",
                      v-model="information.requestedSumm",
                      readonly
                    )
                  v-flex(xs12, sm6, lg4)
                    v-autocomplete(
                      label="Условия выплаты помощи",
                      Zitems="paymentConditionList",
                      v-model="information.paymentConditions",
                      Zmenu-props="{contentClassZ'show_overflow'}",
                      readonly,
                      hide-no-data,
                      color="blue darken-2",
                      return-object,
                      item-text="name"
                    )
                  v-flex(xs12, sm6, lg4)
                    v-autocomplete(
                      label="Условия возврата займа",
                      Zitems="loanTermList",
                      v-model="information.loanTerms",
                      Zmenu-props="{contentClassZ'show_overflow'}",
                      readonly,
                      hide-no-data,
                      color="blue darken-2",
                      return-object,
                      item-text="name"
                    )
                  v-flex(xs12, sm6, lg4)
                    v-text-field(
                      label="Стаж членства в профсоюзе Казцинка",
                      v-model="information.membershipLength",
                      type="number",
                      max="600",
                      suffix="месяцев"
                      min="0",
                      step="1",
                      readonly
                    )
                  v-flex(xs12, sm6, lg4)
                    v-text-field(
                      label="Срок возврата займа",
                      v-model="information.returnMonthLength",
                      type="number",
                      max="12",
                      persistent-hint="до 12 месяцев",
                      suffix="месяцев",
                      min="1",
                      step="1",
                      readonly
                    )
                  v-flex(xs12)
                    wf-media-viewer#back-material-aid-process-photos(
                      label="Прикрепление подтверждающих документов",
                      Zitems="information.documents"
                    )
</template>

<script>
// import { regions, workPlaces, structuralUnits, paymentConditions, loanTerms } from './scripts/model'

export default {
  name: "InformationComponent",
  props: {
    information: {
      default: () => {},
    },
  },
  data() {
    return {
      panels:[false,true],
      regionList: null,
      workPlaceList: null,
      structuralUnitList: null,
      paymentConditionList: null,
      loanTermList: null,
    };
  },
  created() {},
};
</script>

<style scoped lang="stylus"></style>
