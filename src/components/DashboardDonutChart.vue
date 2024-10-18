<template>
    <div id="donut-chart">
      <apexchart type="donut" :options="chartOptions" :series="series" />
    </div>
  </template>
  
  <script>
  import ApexCharts from 'vue3-apexcharts';
  
  export default {
    components: {
      apexchart: ApexCharts,
    },
    props: {
      currentTheme: {
        type: String,
        default: 'light',
      },
    },
    data() {
      return {
        series: [44, 55, 41, 17, 15], // ข้อมูลในกราฟ Donut
        chartOptions: this.getChartOptions(this.currentTheme),
      };
    },
    watch: {
      currentTheme(newTheme) {
        this.chartOptions = this.getChartOptions(newTheme);
      },
    },
    methods: {
      getChartOptions(theme) {
        const isDark = theme === 'dark';
        return {
          chart: {
            type: 'donut',
          },
          labels: ['Drive A', 'Drive B', 'Drive C', 'Drive D', 'Drive E'], // ชื่อข้อมูลแต่ละส่วน
          legend: {
          show: false, // ปิดการแสดง legend ที่อยู่ด้านล่าง
        },
          plotOptions: {
            pie: {
              donut: {
                size: '65%', // ขนาด donut chart
             
              },
              
            },
            
          },
          stroke: {
              show: false, // Disable stroke on the pie sections
              width: 0, // Set stroke width to 0
            },
          dataLabels: {
            enabled: false, // แสดง label บน donut
            style: {
              colors: isDark ? ['#fff'] : ['#000'],
            },
          },
          tooltip: {
            theme: isDark ? 'dark' : 'light', // เปลี่ยนสี tooltip ตาม theme
            y: {
              formatter: function (val) {
                return val + ' GB'; // หน่วยที่แสดงใน tooltip
              },
            },
          },
          colors: isDark
          ? ['#1f4344', '#27675c', '#2e8973', '#34ab8a', '#3aca9f'] // สีสำหรับธีมมืด
          : ['#d6ebec', '#b0d9d2', '#89c6b8', '#5fb59d', '#31a280'], // สีสำหรับธีมสว่าง
        };
      },
    },
  };
  </script>

  <style scoped>
  #donut-chart {
    width: 100%;
    height: 100%;
  }
  </style>