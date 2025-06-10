import * as icons from "@element-plus/icons-vue";

export default defineNuxtPlugin((nuxteApp) => {
  const app = nuxteApp.vueApp;

  // Регистрировать компоненты иконок
  for (let componentName in icons) {
    if (typeof icons[componentName].name === "string") {
      app.component(`el-${icons[componentName].name}`, icons[componentName]);
    }
  }
});