<script>
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    props: ['chartData','options'],
    mounted () {
        this.renderChart(this.data, this.options);
    }
}
</script>