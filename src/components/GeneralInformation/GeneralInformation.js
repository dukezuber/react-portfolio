import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './GeneralInformation.css'

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      lastname:"",
      contact:"",
      address:"",
      dob:"",
      errors:{},

    }
  }
  handleChange =(e) =>{
    let errors=this.state.errors;
    errors[e.target.name]="";
    this.setState({[e.target.name]:e.target.value,errors:errors})
  }
  nextStep=(e)=>{
    const{errors}=this.state;
    let obj = this.state;
    
    for(let key  in  obj)
    {
       if(obj[key] === '' && key!=="error")
       {
         errors[key]  ="* "+key +"is required.";
       }
    }
    let errval = Object.values(errors).filter((val) => val && val!== "" )
    if(errval.length > 0)
    {
      this.setState({errors:errors})
    }
   else{
     this.props.nextStep(e,this.state);
   }
  }

  render() {
    const{errors}=this.state;
    return (
      <Container className="mt-4 pb-4 image">
        <Row className="center mb-4">
          <Col><h1>General Information</h1></Col>
        </Row>
        <Row>
          <Col> <div class="mb-3">
            <label class="form-label">First Name:</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={(e)=> this.handleChange(e)} class="form-control"/>
            <p className='text-danger'>{errors.firstname}</p>
          </div>
          </Col>
          <Col ><div class="mb-3">
            <label class="form-label">Last Name:</label>
            <input type="text" name="lastname" value={this.state.lastname}  onChange={(e)=> this.handleChange(e)} class="form-control"/>
            <p className='text-danger'>{errors.lastname}</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Contact Number:</label>
            <input type="number"  name="contact" value={this.state.contact}  onChange={(e)=> this.handleChange(e)} class="form-control"/>
            <p className='text-danger'>{errors.contact}</p>
          </div></Col>
        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Address:</label>
            <input type="text" name="address" value={this.state.address}  onChange={(e)=> this.handleChange(e)} class="form-control"/>
            <p className='text-danger'>{errors.address}</p>
          </div></Col>
        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Date Of Birth:</label>
            <input type="date" name="dob" value={this.state.dob}  onChange={(e)=> this.handleChange(e)} class="form-control"/>
            <p className='text-danger'>{errors.dob}</p>
          </div></Col>
        </Row >

        <button type="submit" class="btn btn-primary" onClick={(e)=>this.nextStep(e)}>Next</button>
      </Container>
    )
  }
}
