import { createApp } from "vue";
import "./css/globals.css";
import App from "./App.vue";
import { router } from "./router";
import { createI18n } from "vue-i18n";
import messages from "./utils/locales/messages";
import { createPinia } from "pinia";
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";
import Vue3Lottie from "vue3-lottie";

import './_mockApis'


// Setup i18n
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});

const app = createApp(App);

app.use(createPinia());
app.use(PerfectScrollbarPlugin);
app.use(Vue3Lottie);
app.use(router);
app.use(i18n);


app.mount("#app");
