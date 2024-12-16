import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS และ JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import VueApexCharts
import VueApexCharts from 'vue3-apexcharts';

// Import main.css
import './assets/css/main.css';

// สร้างแอปพลิเคชัน Vue
createApp(App)

// ติดตั้ง router และ VueApexCharts
.use(router)
.use(VueApexCharts)

// Mount แอปพลิเคชันไปที่ element ที่มี id 'app'
.mount('#app');