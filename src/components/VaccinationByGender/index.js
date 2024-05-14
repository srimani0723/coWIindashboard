import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  console.log(data)

  return (
    <div className="vacc-by-gender-container">
      <h1 className="vacc-by-gender-h1">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
