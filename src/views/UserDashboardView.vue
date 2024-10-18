<template>
    <div id="wrapper">
        <TopHeader :isDarkMode="isDarkMode" @toggle-menu="toggleMenu" @toggle-dark-mode="toggleDarkMode"
            @search="handleSearch" />

        <!-- Main Layout -->
        <div class="d-flex">
            <!-- Sidebar -->
            <NavMenu ref="navmenu" />

            <!-- Content: will resize based on sidebar visibility -->
            <div class="app-content"
                :class="{ 'expanded-app-content': !isSidebarOpen, 'collapsed-content': isSidebarOpen }">

                <div class="row">
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
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="d-flex align-items-center">
                                            <div class="w-50px h-50px">
                                                <DashboardDonutChart :currentTheme="currentTheme" />
                                            </div>
                                            <div class="ps-3 flex-1">
                                                <div class="fs-11px fw-bold text-inverse text-opacity-50 mb-1">DISK
                                                    USAGE</div>
                                                <div class="mb-2 fs-5 text-truncate">20.04 / 256 GB</div>
                                                <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                                                    <div class="progress-bar bg-theme" style="width: 20%"></div>
                                                </div>
                                                <div class="fs-11px text-inverse text-opacity-50 mb-2 text-truncate">
                                                    Last updated 1 min ago
                                                </div>
                                                <div class="d-flex align-items-center small">
                                                    <i class="bi bi-circle-fill fs-6px me-2 color-theme"></i>
                                                    <div class="flex-1">DISK C</div>
                                                    <div>19.56GB</div>
                                                </div>
                                                <div class="d-flex align-items-center small">
                                                    <i
                                                        class="bi bi-circle-fill fs-6px me-2 color-theme text-opacity-50"></i>
                                                    <div class="flex-1">DISK D</div>
                                                    <div>0.50GB</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="d-flex align-items-center">
                                            <div class="w-50px h-50px">
                                                <DashboardDonutChart :currentTheme="currentTheme" />
                                            </div>
                                            <div class="ps-3 flex-1">
                                                <div class="fs-11px fw-bold text-inverse text-opacity-50 mb-1">BANDWIDTH</div>
                                                <div class="mb-2 fs-5 text-truncate">83.76GB / 10TB</div>
                                                <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                                                    <div class="progress-bar bg-theme" style="width: 20%"></div>
                                                </div>
                                                <div class="fs-11px text-inverse text-opacity-50 mb-2 text-truncate">
                                                    Last updated 1 min ago
                                                </div>
                                                <div class="d-flex align-items-center small">
                                                    <i class="bi bi-circle-fill fs-6px me-2 color-theme"></i>
                                                    <div class="flex-1">HTTP</div>
                                                    <div>19.56GB</div>
                                                </div>
                                                <div class="d-flex align-items-center small">
                                                    <i
                                                        class="bi bi-circle-fill fs-6px me-2 color-theme text-opacity-50"></i>
                                                    <div class="flex-1">FTP</div>
                                                    <div>0.50GB</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6">
                        <DashboardMap  />
</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
import NavMenu from '@/components/NavMenu.vue';
import DashboardColumnChart from '@/components/DashboardColumnChart.vue';
import DashboardDonutChart from '@/components/DashboardDonutChart.vue';
import DashboardMap from '@/components/DashboardMap.vue';
export default {
    components: {
        TopHeader,
        NavMenu,
        DashboardColumnChart,
        DashboardDonutChart,
        DashboardMap
    },
    data() {
        return {
            isDarkMode: false,
            isSidebarOpen: true,
        };
    },
    computed: {
        // เพิ่ม computed เพื่อให้ใช้ currentTheme ได้
        currentTheme() {
            return this.isDarkMode ? 'dark' : 'light';
        },
    },
    mounted() {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            this.isDarkMode = savedMode === 'true';
        }
        this.applyTheme(); // เรียกใช้ฟังก์ชันการตั้งค่าธีมเมื่อโหลดครั้งแรก
    },
    methods: {
        handleSearch(query) {
            console.log('Search query:', query);
            // เพิ่มการจัดการการค้นหาตามที่ต้องการ
        },
        toggleMenu() {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.$refs.navmenu.toggleMenu();
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('darkMode', this.isDarkMode);
            this.applyTheme(); // เรียกใช้ฟังก์ชันการตั้งค่าธีม
        },
        applyTheme() {
            // จัดการกับการตั้งค่า theme บน body
            if (this.isDarkMode) {
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.removeAttribute('data-bs-theme');
            }
        },
    },
};
</script>
