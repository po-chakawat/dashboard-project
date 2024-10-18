<template>
    <div class="app-sidebar" :class="{ 'hide': !isOpen }">
      <nav class="app-sidebar__inner">
       <div class="menu">
            <div class="menu-header">Navigation</div>
          <div class="menu-item active">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
          <div class="menu-item">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
          <div class="menu-item">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
          <div class="menu-item">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
          <div class="menu-item">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
          <div class="menu-item">
             <a href="#0" class="menu-link">
                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                <span>Dashboard</span>
             </a>
          </div>
       </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavMenu',
    
    data() {
      return {
        isOpen: true, // state สำหรับแสดงหรือซ่อนเมนู
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
        
      },
    },
  };
  </script>
  
  <style scoped>


  
  .sidebar .navbar {
    height: 100%;
  }
  
  .navbar-nav {
    width: 100%;
  }
  
  .nav-link {
    color: white;
  }
  
  .nav-link:hover {
    color: #ddd;
  }
  </style>
  