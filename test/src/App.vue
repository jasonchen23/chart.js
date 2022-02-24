<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <LineChart :chartData="chartData" :options="options" />
  <button @click="update"> ADD </button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LineChart from './components/LineComponent.vue'
export default {
  name: 'App',
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar"
        ],
        datasets: [
          {
            label: "Data 1",
            data: [2,10,3],
            backgroundColor: "#FCBB44",
            borderColor: "black",
            pointBackgroundColor: "blue"
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    }
  },
  methods: {
    update() {
      setTimeout (() => {
        console.log('update');
        this.chartData.datasets.push(
          {
            label: "Data",
            data: [23,42,55],
            backgroundColor: "pink",
            borderColor: "#05CBE1",
            pointBackgroundColor: "FBACD4"
          }
        );
        this.chartData = {
          ...this.chartData,
        }
      },2000);
    }
  },
  components: {
    HelloWorld,
    LineChart
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
