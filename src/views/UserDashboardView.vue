<template>
    <div id="wrapper">
        <TopHeader :isDarkMode="isDarkMode" @toggle-menu="toggleMenu" @toggle-dark-mode="toggleDarkMode"
            @search="handleSearch" />

        <!-- Main Layout -->
        <div class="d-flex">
            <!-- Sidebar -->
            <NavMenu ref="navmenu" />

            <!-- Content -->
            <div class="app-content"
                :class="{ 'expanded-app-content': !isSidebarOpen, 'collapsed-content': isSidebarOpen }">
                <div class="row">
                    <!-- Crypto Cards -->
                    <div class="col-xl-12">
                        <h2>Cryptocurrency Dashboard</h2>
                        <div v-if="loading" class="loading">Loading...</div>
                        <div v-else class="crypto-list">
                            <!-- ใช้ v-for และ key เพื่อให้ Vue ควบคุมการ re-render ของแต่ละ card -->
                            <CryptoCard 
                            v-for="coin in coins" 
                            :key="coin.id" 
                            :coin="coin" 
                            v-bind="coin"
                            />
                        </div>
                    </div>

                    <!-- Server Stats -->
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex fw-bold small">
                                    <span class="flex-grow-1">SERVER STATS</span>
                                </div>
                                <div class="ratio ratio-21x9 mb-3 chart-container">
                                    <DashboardColumnChart :currentTheme="currentTheme" />
                                </div>
                                <div class="row">
                                    <!-- Disk Usage -->
                                    <div class="col-lg-6">
                                        <UsageStats title="DISK USAGE" usage="20.04 / 256 GB" percent="20"
                                            details="Last updated 1 min ago"
                                            stats="[{name: 'DISK C', value: '19.56GB'}, {name: 'DISK D', value: '0.50GB'}]" />
                                    </div>
                                    <!-- Bandwidth -->
                                    <div class="col-lg-6">
                                        <UsageStats title="BANDWIDTH" usage="83.76GB / 10TB" percent="20"
                                            details="Last updated 1 min ago"
                                            stats="[{name: 'HTTP', value: '19.56GB'}, {name: 'FTP', value: '0.50GB'}]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Map Section -->
                    <div class="col-xl-6">
                        <DashboardMap />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import NavMenu from "@/components/NavMenu.vue";
import DashboardColumnChart from "@/components/DashboardColumnChart.vue";
import DashboardMap from "@/components/DashboardMap.vue";
import { getCryptocurrencyData } from '@/services/cryptoService';
import CryptoCard from "@/components/CryptoCard.vue";

export default {
  components: {
    TopHeader,
    NavMenu,
    DashboardColumnChart,
    DashboardMap,
    CryptoCard,
  },
  data() {
    return {
      isDarkMode: false,
      isSidebarOpen: true,
      coins: [],
      loading: false,
      intervalId: null,
    };
  },
  computed: {
    currentTheme() {
      return this.isDarkMode ? "dark" : "light";
    },
  },
  async created() {
    // เรียกข้อมูลทันทีที่ component ถูกสร้าง
    await this.fetchData();
  },
   mounted() {
    // โหลด dark mode setting
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      this.isDarkMode = savedMode === "true";
    }
    this.applyTheme();

    this.intervalId = setInterval(this.fetchData, 60000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    // ดึงข้อมูล cryptocurrency
    async fetchData() {
        try {
        const newCoins = await getCryptocurrencyData();

        // เปรียบเทียบข้อมูลก่อนอัปเดต
        if (JSON.stringify(newCoins) !== JSON.stringify(this.coins)) {
          this.coins = newCoins;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    handleSearch(query) {
      console.log("Search query:", query);
    },
    toggleMenu() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.$refs.navmenu.toggleMenu();
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("darkMode", this.isDarkMode);
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.body.setAttribute("data-bs-theme", "dark");
      } else {
        document.body.removeAttribute("data-bs-theme");
      }
    },
  },
};
</script>
<style scoped>
.crypto-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.expanded-app-content {
    width: calc(100% - 250px);
    /* Adjust based on sidebar width */
}

.collapsed-content {
    width: 100%;
}

.chart-container {
    position: relative;
}

.color-theme {
    color: var(--bs-theme-color, #007bff);
    /* Default theme color */
}
</style>