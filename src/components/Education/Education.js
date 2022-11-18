import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{ title: "", schoolname: "", grade: "", end: "" }],
      errors:{}
    }
  }

  handleChange = (e, key) => {
    let values = [...this.state.values];
    let obj = values[key];
    obj[e.target.name] = e.target.value;
    this.setState({ values })
    let errors = this.state.errors;
    errors[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value, errors: errors })
  }

  add = () => {
    const {errors}=this.state
    return (
      
      <div className='border'>
        {this.state.values.map((item, key) => {
          return (
          <div key={key}>
            <Row className="mb-2">
              <Col >
                <input class="form-control" placeholder="Title" value={item.title} name="title" onChange={(e) => this.handleChange(e, key)} type="text" />
                <p className='text-danger '><small>{errors.title}</small></p>
              </Col>
              <Col xs={6}>
                <input class="form-control" placeholder="School Name" value={item.schoolname} name="schoolname" onChange={(e) => this.handleChange(e, key)} type="text" />
                <p className='text-danger'>{errors.schoolname}</p>
              </Col>
              <Col >
                <input class="form-control" placeholder="Grade" value={item.grade} name="grade" onChange={(e) => this.handleChange(e, key)} type="text" />
                <p className='text-danger'>{errors.grade}</p>
              </Col>
              <Col>
                <input class="form-control" placeholder="End Date" value={item.end} name="end" onChange={(e) => this.handleChange(e, key)} type="date" />
                <p className='text-danger'>{errors.end}</p>
              </Col>
              <Col xs={1}>
                <input class="form-control bg-danger" value="-" name="submit" onClick={() => { this.delete(key) }} type="submit" />
              </Col>
            </Row>
          </div>
          )
        })
        }
      </div>
    )
  }

  addItem = () => {
    const { errors } = this.state;
    let obj = this.state.values;
    obj.forEach(item => {
      for(let key in item){
        if (item[key]===''){
          errors[key]= "* " + key + "is required.";
        }
        }
    }); 
    let errval = Object.values(errors).filter((val) => val && val !== "")
    if (errval.length > 0) {
      this.setState({ errors: errors })
      console.log("sss",errval);
    }else{
      let arry = [...this.state.values];
    arry.push({ title: "", schoolname: "", grade: "", end: "" });
    this.setState({ values: arry});
    }
  }

  delete = (key) => {
    let del = [...this.state.values];
    del.splice(key, 1);
    this.setState({ values: del });
    console.log("delete", del);
  }

  nextStep = (e) => {
    const { errors} = this.state;
    let evajl = Object.values(errors).filter((val)=>val && val !=='')
    if(evajl.length > 0){
      this.setState({ errors: errors })
    }
    else{
      this.props.nextStep(e, this.state);
    }
  }

  render() {
    return (
      <Container className='mt-4 pb-4 image'>
        <Row className="center mb-4">
          <Col>
            <h1>Qualification Details
            </h1>
          </Col>
        </Row>

        <Row>
          <Col >
            <label class="form-label">Title:</label>
          </Col>
          <Col xs={6}>
            <label class="form-label">School Name:</label>
          </Col>
          <Col >
            <label class="form-label">Grade:</label>
          </Col>
          <Col>
            <label class="form-label">End Date</label>
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
        <div>{this.add()}
          <Row className="mt-4 mb-4 justify-content-end">
            <Col xs={2}>
              <input class="form-control bg-primary" value="Add" onClick={() => { this.addItem() }} disabled={this.state.values.length >= 3 ? true : false} name="submit" type="submit" />
            </Col>
          </Row>
          <button type="submit" class="btn btn-primary" onClick={(e) => this.nextStep(e)}>Next</button>
        </div>
      </Container>
    )
  }
}
