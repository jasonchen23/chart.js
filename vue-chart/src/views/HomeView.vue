<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="home">
      <LineChart :chartData="chartData" :options="options" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LineChart from '@/components/LineChart.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    LineChart
  },
  data() {
    return {
      c
    }
  }
}
</script>
