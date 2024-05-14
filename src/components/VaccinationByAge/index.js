import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  console.log(data)

  return (
    <div className="vacc-by-age-container">
      <h1 className="vacc-by-age-h1">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          margin={40}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
