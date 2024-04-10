import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/HeroSection.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.component("navbar", Navbar);
app.component("hero", Hero);
app.mount("#app");
