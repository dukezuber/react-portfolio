/* eslint-disable default-case */
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import ProfessionalSummery from '../PrefessionalSummery/ProfessionalSummery'
import GeneralInformation from '../GeneralInformation/GeneralInformation'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import FinalResume from '../FinalResume/FinalResume';
import MyContext from '../../Context/MyContext';



// export var MyContext = React.createContext();

export default class MainPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: {}
    };
  }

  nextStep = (e,d) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step + 1 });
    const formData = {...this.state.formData, ...d}
    console.log(formData)
    this.setState({ formData: formData })
  }

  render() {
    const {step} = this.state;
    switch (step) {
      case 1: {
        return (
          <GeneralInformation
            step={step}
            nextStep={this.nextStep} />
        )
      }

      case 2: {
        return (
          <ProfessionalSummery
            nextStep={this.nextStep} />
        )
      }

      case 3: {
        return (
          <Education
            nextStep={this.nextStep} />
        )
      }

      case 4: {
        return (
          <Experience
            nextStep={this.nextStep} />
        )
      }

      case 5: {
        return (
           <MyContext.Provider value={this.state}>
          <FinalResume
            //  formData={formData} 
            />
             </MyContext.Provider>
        )
      }
    }
  }
}

