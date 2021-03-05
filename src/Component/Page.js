import React, { Component } from 'react'
import { Button, Form, Container, Header, Grid, Message } from 'semantic-ui-react'
import axios from "axios";

export default class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  // keep track of our state
  changeHandler = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    // post data to our end-point 
    axios.post('https://sheet.best/api/sheets/68eced27-b9e3-4615-b3d2-2dd582585b7a', this.state)
      .then(response => {
        console.log(response);
      })

      this.setState({
        name :'',
        age: '',
        salary: '',
        hobby: ''
      })
  }

  render() {
    // add values to the value attribute of the inputs
    const { name, age, salary, hobby } = this.state;    
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form success className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          <Message 
          success
          header = "form Completed"
          content = "Data captureed"
          />
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}


// const Page = (props)=> {
//   this.state = {
//     name: '',
//     age: '',
//     salary: '',
//     hobby: ''
//  }
//  changeHandler = (e) => {
//   this.setState({[e.target.name] : e.target.value})
// }

//   return(
//       <Container fluid className="container">
//         <Header as='h2'>React Google Sheets!</Header>
//           <Form className="form">
//               <Form.Field>
//                 <label>Name</label>
//               <input placeholder='Enter your name' />
//            </Form.Field>
//             <Form.Field>
//               <label>Age</label>
//               <input placeholder='Enter your age' />
//           </Form.Field>
//           <Form.Field>
//             <label>Salary</label>
//             <input placeholder='Enter your salary' />
//           </Form.Field>
//           <Form.Field>
//             <label>Hobby</label>
//             <input placeholder='Enter your hobby' />
//           </Form.Field>
          
//           <Button color="blue" type='submit'>Submit</Button>
//         </Form>
//     </Container>
//   )
// }
// export default Page;