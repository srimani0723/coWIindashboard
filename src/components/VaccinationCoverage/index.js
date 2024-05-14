import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {data} = props

  console.log(data)
  const dataFormatter = number => `${number.toString()}k`

  return (
    <div className="vacc-coverage-container">
      <h1 className="vacc-coverage-h1">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 15,
          }}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 0,
            }}
          />
          <Bar
            radius={[5, 5, 0, 0]}
            dataKey="dose1"
            name="Dose1"
            fill="#5a8dee"
            barSize="20%"
          />
          <Bar
            radius={[5, 5, 0, 0]}
            dataKey="dose2"
            name="Dose2"
            fill="#f54394"
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
