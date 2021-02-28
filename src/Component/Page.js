import React from "react";
import { Button, Form, Container, Header, Grid, Segment } from 'semantic-ui-react'

const Page = (props)=> {
  return(
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
          <Form className="form">
              <Form.Field>
                <label>Name</label>
              <input placeholder='Enter your name' />
           </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input placeholder='Enter your age' />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}
export default Page;