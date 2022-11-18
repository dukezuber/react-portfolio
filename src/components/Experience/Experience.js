import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      startdate: "",
      enddate: "",
      designation: "",
      url:""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    let experience = this.state;
    experience[e.target.name] = e.target.value;
    this.setState({ experience });
    console.log("sdd", experience);
    
  }
  handleChangefiles=(e)=>{
    let files=e.target.files;
    let url=URL.createObjectURL(files[0]);
    this.setState({url})
    console.log("files2",url);
  }


  nextStep = (e) => {
    this.props.nextStep(e, this.state);
  }

  render() {
    // const{url}=this.state
    return (
      <Container className='mt-4 pb-4 image'>
        <Row className="center mb-4">
          <Col><h1>Experience Details</h1></Col>
        </Row>
        <Row>
          <Col> <div class="mb-3">
            <label class="form-label">Company Name:</label>
            <input type="text" class="form-control" onChange={(e) => this.handleChange(e)} name="companyname" value={this.state.companyname} />
          </div>
          </Col>

        </Row>
        <Row>
          <Col xs={3}><div class="mb-3">
            <label class="form-label">Start Date:</label>
            <input type="date" class="form-control" onChange={(e) => this.handleChange(e)} name="startdate" value={this.state.startdate} />
          </div>
          </Col>
          <Col xs={3}><div class="mb-3">
            <label class="form-label">End Date:</label>
            <input type="date" class="form-control" onChange={(e) => this.handleChange(e)} name="enddate" value={this.state.enddate} />
          </div></Col>
          <Col xs={3}><div class="mb-3">
            <label class="form-label">Upload Documents</label>
            
            <input type="file" class="form-control" onChange={(e) => this.handleChangefiles(e)} name="files" />
          </div></Col>
          <Col xs={3}><div class="mb-3">
          <img src={this.state.url} alt="imag" width="100px" height="100px"/>
            
          </div></Col>

        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Designation:</label>
            <input type="text" class="form-control" onChange={(e) => this.handleChange(e)} name='designation' value={this.state.designation} />
          </div></Col>
        </Row>
        <button type="submit" class="btn btn-success" onClick={(e) => this.nextStep(e)}> Final Submit</button>

      </Container>
    )
  }
}
