import { Line } from 'react-chartjs-2'
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60]
const meses = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
]

const miData = {
  labels: meses,
  datasets: [
    // cada linea del grafico
    {
      label: 'Beneficios',
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255, 99, 132)',
      pointBackgroundColor: 'rgba(255, 99, 132)'
    }
  ]
}

const misOptiones = {
  scales: {
    y: {
      min: 0
    },
    x: {
      ticks: { color: 'blue' }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

function LineChart () {
  return <Line data={miData} options={misOptiones}></Line>
}

export default LineChart
