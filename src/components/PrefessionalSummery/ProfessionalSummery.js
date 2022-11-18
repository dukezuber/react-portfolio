import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ProfessionalSummery extends Component {
  constructor(props){
    super(props);
      this.state = {
        summary: "",
    }
  }
  
  handleChange=(e)=>{
    let values=this.state;
    values[e.target.name]=e.target.value;
    this.setState({values})
  }

  nextStep=(e)=>{
    this.props.nextStep(e,this.state);
  }

  render() {
    return (
      <Container className='mt-4 pb-4 image'>
        <div className="mb-4">
        <Row className="center mb-4">
          <Col><h1>Professional Summery</h1>
          </Col>
          </Row>
          <Row >
            <Col xs={10}>
              <div class="form-group">
                <label class="mb-3" for="exampleFormControlTextarea1">Summery:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"  onChange={(e) => this.handleChange(e)} placeholder='Comments.....' name="summary" value={this.state.summary}></textarea>
                <div class="form-text">We'll write more then 30 charactor in this field.</div>
              </div>
            </Col>
          </Row>
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => this.nextStep(e)}>Next</button>
      </Container>
    )
  }
}
