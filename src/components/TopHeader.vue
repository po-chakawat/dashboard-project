<template>
    <header class="app-header">
        <!-- Hamburger Button -->
        <button class="menu-toggler" type="button" @click="$emit('toggle-menu')">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <div class="brand">
            <a href="#" class="brand-inner">
                <img class="brand-logo" src="../assets/images/logo-cat.png" alt="">
                <span class="brand-text">Meow meow <i class="bi bi-hearts"></i></span>
            </a>
        </div>

        <div class="option">
            <!-- Search Bar -->
            <div class="option-search" :class="{ 'active': isSearchActive }">
                <div class="option-search-container">
                    <div class="option-search-icon">
                        <i class="bi bi-search"></i>
                    </div>
                    <div class="option-search-input">
                        <input v-if="isSearchActive" type="text" placeholder="Search..." class="form-control"
                            @input="search" />
                    </div>
                    <div class="option-search-icon">
                        <button v-if="isSearchActive" class="btn close-btn" @click="closeSearch">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Search Button -->
            <button v-if="!isSearchActive" class="btn  option-search-btn option-icon" @click="openSearch">
                <i class="bi bi-search"></i>
            </button>

            <!-- Dark Mode Button -->
            <button @click="toggleDarkMode" class="btn option-icon" v-html="darkModeIcon"></button>

            <!-- Profile Dropdown -->
            <div class="option-dropdown" ref="dropdown" @click="toggleDropdown" :class="{ show: isDropdownOpen }">
                <button class="btn option-dropdown-toggle" type="button" id="profileDropdown" aria-expanded="isDropdownOpen">
                    <div class="option-dropdown-img">
                        <img src="@/assets/images/kitbag-logo.svg" class="profile-pic" alt="Profile Picture">
                    </div>
                    <div class="option-dropdown-text">
                        username@account.com
                    </div>
                </button>
                <ul class="dropdown-menu dropdown-menu-end mt-1 me-lg-3 " :class="{ show: isDropdownOpen }"
                    aria-labelledby="profileDropdown">
                    <li><a class="dropdown-item d-flex align-items-center" href="#">PROFILE <i class="bi bi-person-circle ms-auto my-n1"></i></a></li>
                    <li><a class="dropdown-item  d-flex align-items-center" href="#">INBOX <i class="bi bi-envelope ms-auto my-n1"></i></a></li>
                    <li><a class="dropdown-item  d-flex align-items-center" href="#">CALENDAR <i class="bi bi-calendar ms-auto my-n1"></i></a></li>
                    <li><a class="dropdown-item  d-flex align-items-center" href="#">SETTINGS <i class="bi bi-gear ms-auto my-n1"></i></a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item  d-flex align-items-center" href="#">LOGOUT <i class="bi bi-box-arrow-right ms-auto my-n1"></i></a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        isDarkMode: Boolean // รับค่าจาก component แม่ เพื่อกำหนดสถานะ dark/light
    },
    data() {
        return {
            isSearchActive: false, // เก็บสถานะของการเปิด/ปิด search bar
            isDropdownOpen: false,  // สถานะของ dropdown เปิด/ปิด
        };
    },
    computed: {
        darkModeIcon() {
            return this.isDarkMode
                ? '<i class="bi bi-brightness-high"></i>' // ไอคอนในโหมด Light
                : '<i class="bi bi-moon"></i>'; // ไอคอนในโหมด Dark
        }
    },
    methods: {
        toggleDarkMode() {
            const newTheme = this.isDarkMode ? 'light' : 'dark'; // สลับระหว่างธีม
            document.documentElement.setAttribute('data-bs-theme', newTheme); // เปลี่ยนธีมใน root
            this.$emit('toggle-dark-mode', newTheme); // ส่ง event พร้อมกับธีมใหม่กลับไปยัง component แม่
        },
        openSearch() {
            this.isSearchActive = true;  // เปิด search bar
        },
        closeSearch() {
            this.isSearchActive = false;  // ปิด search bar
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen; // สลับสถานะ dropdown
            if (this.isDropdownOpen) {
                document.addEventListener('click', this.handleClickOutside);
            } else {
                document.removeEventListener('click', this.handleClickOutside);
            }
        },
        handleClickOutside(event) {
            if (!this.$refs.dropdown.contains(event.target)) {
                this.isDropdownOpen = false;
                document.removeEventListener('click', this.handleClickOutside);
            }
        },
        search(event) {
            const query = event.target.value;
            this.$emit('search', query);  // ส่ง event พร้อมกับค่าที่กรอกไปยัง component แม่
        }
    }
};
</script>

<style scoped></style>
