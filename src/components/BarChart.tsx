import { type FormEvent, useState } from 'react'
import { Bar } from 'react-chartjs-2'

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function BarChart () {
  const [barData, setBarData] = useState<{
    beneficios: number[]
    meses: string[]
  }>({
    beneficios: [5, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60],
    meses: [
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
  })

  const [newMes, setNewMes] = useState<string>('')
  const [newBeneficio, setNewBeneficio] = useState<number>(0)

  const miData = {
    labels: barData.meses,
    datasets: [
      // cada linea del grafico
      {
        label: 'Beneficios',
        data: barData.beneficios,
        backgroundColor: 'rgba(0, 220, 195)'
      }
    ]
  }

  const misOptiones = {
    responsive: true,
    scales: {
      y: {
        min: -25,
        max: 100
      },
      x: {
        ticks: { color: 'rgba(0, 220, 195)' }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const handleAddInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setBarData({
      beneficios: [...barData.beneficios, newBeneficio],
      meses: [...barData.meses, newMes]
    })
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Bar data={miData} options={misOptiones} />
      <form
        className="flex flex-col justify-center items-end gap-4 my-2"
        onSubmit={handleAddInfo}
      >
        <label>
          beneficio:
          <input
            type="number"
            name="beneficio"
            id="beneficio"
            value={newBeneficio}
            onChange={(e) => {
              setNewBeneficio(Number(e.target.value))
            }}
          />
        </label>
        <label>
          mes:
          <input
            type="text"
            name="mes"
            id="mes"
            value={newMes}
            onChange={(e) => {
              setNewMes(e.target.value)
            }}
          />
        </label>

        <button className="px-3 py-2 bg-orange-500 rounded-lg" type="submit">
          enviar
        </button>
      </form>
    </div>
  )
}

export default BarChart
