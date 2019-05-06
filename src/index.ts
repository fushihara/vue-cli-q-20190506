import TestVue from "./test-vue.vue";
const v = new TestVue({
    propsData: {
        propNullable: null,
        propNotNullable: "propの値"
    }
})
v.$mount("#app");
