import {Component} from 'react'

import Options from '../Options/index'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

/*
The html select element is used to create drop-down list
<select>
  option 1
  option 2
  ..
  ..
</select>

each menu option of the drop down list is defined by the option element
<select>
   <option value="value1">label1</option>
   <option value="value2">label2</option>
</select>

Boolean attributes:
for boolean attributes we only specify the name of the attributes.The presence
of the boolean attribute represents the true value and the absence represents the false value

selected attribute specifies that an option should be pre-selected when page loads
*/

class Capitals extends Component {
  state = {countryValue: 'India'}

  changed = event => {
    console.log(event.target.value)
    const countryFilter = countryAndCapitalsList.filter(
      eachObjectFilter => eachObjectFilter.id === event.target.value,
    )
    console.log(countryFilter) // array of object
    const identifiedCountryValue = countryFilter[0].country
    console.log(identifiedCountryValue)

    this.setState({countryValue: identifiedCountryValue})
  }

  render() {
    const {countryValue} = this.state

    return (
      <div className="bg">
        <div className="innerCard">
          <h1>Countries And Capitals</h1>
          <div className="capitalContainer">
            <select
              id="dropDown"
              className="dropDownStyling"
              onChange={this.changed}
            >
              {countryAndCapitalsList.map(eachObject => (
                <Options eachObjectProp={eachObject} key={eachObject.id} />
              ))}
            </select>
            <label htmlFor="dropDown">is capital of which country?</label>
          </div>
          <p className="paraCountry">{countryValue}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
