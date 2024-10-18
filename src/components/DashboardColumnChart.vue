<template>
  <div id="chart-server">
    <apexchart type="bar" width="100%" height="100%" :options="chartOptions" :series="series" />
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
      series: [
        {
          name: 'MEMORY USAGE',
          data: [45, 60, 35, 70, 50, 65, 55, 60, 35, 80, 45, 70],
        },
        {
          name: 'CPU USAGE',
          data: [55, 70, 40, 80, 60, 75, 65, 70, 40, 90, 55, 80],
        },
      ],
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
          background: isDark ? 'transparent' : 'transparent',
          toolbar: {
            show: false,
          },
          animations: { // เพิ่มการตั้งค่าการ animate
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        tooltip: {
          theme: isDark ? 'dark' : 'light',
          style: {
            fontSize: '12px',
            fontFamily: undefined,
            colors: isDark ? ['#fff'] : ['#000'],
          },
          y: {
            formatter: function (val) {
              return val + " UNITS";
            },
          },
          marker: {
            show: true,
            fillColors: isDark
              ? ['rgba(255, 255, 255, 0.25)', 'rgba(60, 210, 165, 0.65)']
              : ['rgba(0, 0, 0, 0.25)', 'rgba(36, 157, 121, 0.65)'],
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            borderRadius: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          ],
          labels: {
            show: false,
            style: {
              colors: isDark ? '#fff' : '#000',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: isDark ? '#fff' : '#000',
            },
          },
        },
        grid: {
          borderColor: isDark ? '#444' : '#ddd',
        },
        legend: {
          position: 'bottom',
          labels: {
            colors: isDark ? '#fff' : '#000',
          },
          markers: {
            fillColors: isDark
              ? ['rgba(255, 255, 255, 0.25)', 'rgba(60, 210, 165, 0.65)']
              : ['rgba(0, 0, 0, 0.25)', 'rgba(36, 157, 121, 0.65)'],
            strokeWidth: 0,
          },
        },
        colors: isDark
          ? ['rgba(255, 255, 255, 0.25)', 'rgba(60, 210, 165, 0.65)']
          : ['rgba(0, 0, 0, 0.25)', 'rgba(36, 157, 121, 0.65)'],
      };
    },
  },
};
</script>

<style scoped>
#chart-server {
  width: 100%;
  height: 100%;
}
</style>
