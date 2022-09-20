import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isFirstnameEmpty: false,
    isLastNameEmpty: false,
    registrationForm: true,
    firstName: '',
    lastName: '',
  }

  FirstnameCheck = event => {
    if (event.target.value === '') {
      this.setState({isFirstnameEmpty: true})
    } else {
      this.setState({isFirstnameEmpty: false, firstName: event.target.value})
    }
  }

  lastNameCheck = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false, lastName: event.target.value})
    }
  }

  submit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' || lastName === '') {
      this.setState({registrationForm: true})
      if (firstName === '') {
        this.setState({isFirstnameEmpty: true})
      }
      if (lastName === '') {
        this.setState({isLastNameEmpty: true})
      }
    } else {
      this.setState({registrationForm: false, firstName: '', lastName: ''})
    }
  }

  anotherForm = () => {
    this.setState({registrationForm: true})
  }

  form = () => {
    const {isFirstnameEmpty, isLastNameEmpty, registrationForm} = this.state
    const FirstNameErrClassName = isFirstnameEmpty ? 'error' : ''
    const LastNameErrClassName = isLastNameEmpty ? 'error' : ''
    return (
      <form className="FormContainer">
        <label htmlFor="firstname">FIRST NAME</label>
        <input
          onBlur={this.FirstnameCheck}
          id="firstname"
          type="text"
          placeholder="First name"
          className={FirstNameErrClassName}
        />
        {isFirstnameEmpty && <p>Required</p>}
        <label htmlFor="lastname">LAST NAME</label>
        <input
          onBlur={this.lastNameCheck}
          id="lastname"
          type="text"
          placeholder="Last name"
          className={LastNameErrClassName}
        />
        {isLastNameEmpty && <p>Required</p>}
        <button onClick={this.submit} type="submit">
          Submit
        </button>
      </form>
    )
  }

  regSuccessCard = () => (
    <div className="successContainer">
      <div className="successImageContainer">
        <img
          className="successImage"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
        />
      </div>
      <p className="successPara">Submitted Successfully</p>
      <button onClick={this.anotherForm} type="submit">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFirstnameEmpty, isLastNameEmpty, registrationForm} = this.state
    const FirstNameErrClassName = isFirstnameEmpty ? 'error' : ''
    const LastNameErrClassName = isLastNameEmpty ? 'error' : ''
    return (
      <div className="mainRegistrationFormContainer">
        <h1 className="mainHeading">Registration</h1>
        {registrationForm ? this.form() : this.regSuccessCard()}
      </div>
    )
  }
}
export default RegistrationForm
