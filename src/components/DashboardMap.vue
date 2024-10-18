<template>
  <div>
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import ApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: ApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: 'Music',
          data: [10, 41, 35, 51, 49, 62, 69],
        },
        {
          name: 'Photos',
          data: [20, 42, 31, 35, 60, 45, 59],
        },
        {
          name: 'Files',
          data: [30, 21, 65, 52, 23, 58, 41],
        },
      ],
      chartOptions: {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        colors: ['#1E90FF', '#32CD32', '#FFA500'], // Customize the colors
        stroke: {
          width: 2,
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
        },
        xaxis: {
          categories: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
          labels: {
            rotate: -45,
          },
        },
        legend: {
          position: 'top',
        },
      },
    };
  },
};
</script>

<style scoped>
.apexcharts-tooltip {
  background: #333;
  color: #fff;
}
</style>
