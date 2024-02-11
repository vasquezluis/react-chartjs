import BarChart from './components/BarChart'
// import LineChart from './components/LineChart'
// import PieChart from './components/PieChart'

function App () {
  return (
    <div>
      <h1 className="bg-sky-600 text-center font-bold text-3xl">
        Graficos chartjs
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        {/* <div>
          <p className="m-2">Ejemplo #1 - grafico de lineas basico</p>
          <div className="bg-gray-100 mx-auto px-2 border-2 border-sky-600 w-[450px] h-[230px]">
            <LineChart />
          </div>
        </div> */}
        <div>
          <p className="m-2">Ejemplo #2 - grafico de barras</p>
          <div className="bg-gray-100 mx-auto px-2 border-2 border-sky-600 w-[800px] h-auto">
            <BarChart />
          </div>
        </div>
        {/* <div>
          <p className="m-2">Ejemplo #3 - grafico pie</p>
          <div className="bg-gray-100 mx-auto px-2 border-2 border-sky-600 w-[450px] h-[230px]">
            <div style={{ width: '100%', height: '100%', padding: '10px 0' }}>
              <PieChart />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default App
