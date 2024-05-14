import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const status = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    data: {},
    apiStatus: status.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: status.inProgress,
    })

    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok) {
      const list = await response.json()

      const newData = {
        vaccinationByAge: list.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),

        vaccinationByGender: list.vaccination_by_gender.map(genderType => ({
          gender: genderType.gender,
          count: genderType.count,
        })),

        last7DaysVaccination: list.last_7_days_vaccination.map(each => ({
          dose1: each.dose_1,
          dose2: each.dose_2,
          vaccineDate: each.vaccine_date,
        })),
      }
      this.setState({
        data: newData,
        apiStatus: status.success,
      })
    } else {
      this.setState({
        apiStatus: status.failure,
      })
    }
  }

  renderTopSection = () => (
    <div className="cowin-sub-container">
      <div className="cowin-website-logo-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="website-logo"
        />

        <p className="cowin-heading">Co-WIN</p>
      </div>

      <h1 className="cowin-main-heading">CoWIN Vaccination in India</h1>
    </div>
  )

  onFailure = () => (
    <div className="failure-box">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure-img"
      />

      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderMainPart = () => {
    const {data} = this.state

    return (
      <div className="render-main-part">
        <VaccinationCoverage data={data.last7DaysVaccination} />
        <VaccinationByGender data={data.vaccinationByGender} />
        <VaccinationByAge data={data.vaccinationByAge} />
      </div>
    )
  }

  renderBasedOnStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case status.inProgress:
        return this.renderLoader()
      case status.success:
        return this.renderMainPart()
      case status.failure:
        return this.onFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-container">
        {this.renderTopSection()}
        {this.renderBasedOnStatus()}
      </div>
    )
  }
}

export default CowinDashboard
