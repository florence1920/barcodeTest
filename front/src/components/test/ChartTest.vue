<template>
    <div>
        차트
    </div>
</template>

<script>
import { Chart } from 'chart.js'
import planetChartData from './ChartTest.js'
export default {
    data() {
        return {
            planetChartData: planetChartData,
        }
    },
  methods: { // 추가된 부분 시작
    createChart(charId, chartData) {
        const ctx = document.getElementById(charId)
        const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      }); // 추가된 부분 끝
    }
  },
    mounted() { // 추가된 부분 시작
    this.createChart('planet-chart', this.planetChartData);
  } // 추가된 부분 끝

}
</script>

<style scoped>


</style>