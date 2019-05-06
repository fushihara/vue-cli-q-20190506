<template>
  <div style>
    <cool-select v-bind:items="privateFieldArray" disable-search>
      <template #item="{item}">
        <div style="display:flex;align-items: center;flex: 1 1 0;">
          <b>{{ item }}</b>
        </div>
      </template>
      <template #selection="{item}">
        <div style="display:flex;align-items: center;flex: 1 1 0;">
          <b>{{ item }}</b>
        </div>
      </template>
    </cool-select>
    <button v-on:click="button_click">ボタン</button>
    <br>placeholder
    <input v-bind:placeholder="privateField">
    <br>input-value
    <input v-model="privateField">
    <br>
    <div>innerText[{{this.privateField}}]</div>
  </div>
</template>
<script lang="ts">
import dateformat from "dateformat";
import VueSelect, { CoolSelect } from 'vue-cool-select';
import Vue from "vue";
import { ImportTsFile } from "./import-tsfile";
Vue.use(VueSelect, {
  theme: 'material-design'
});
export default Vue.extend({
  mounted: function () {
  },
  components:{
    CoolSelect
  },
  props: {
    propNullable: { type: String, required: false },
    propNotNullable: { type: String, required: true },
  },
  data: function () {
    return {
      privateField: "",
      privateFieldArray: ["A", "B", "C"],
    };
  },
  computed: {
    placeholder: function (): string {
      return this.privateField;
    }
  },
  methods: {
    button_click: function () {
      this.privateField = String(Number(this.privateField) + 1);
      this.privateFieldArray.push(this.privateField);
    }
  }
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
