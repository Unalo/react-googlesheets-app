import React from "react";
import { Button, Form } from 'semantic-ui-react'

const UserForm = (props) => {

  return (
    <Form success className="form" onSubmit={props.submitHandler}>
      <Form.Field>
        <label>Name</label>
        <input placeholder='Enter your name' type="text" name="name" value={props.name} onChange={props.changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Age</label>
        <input placeholder='Enter your age' type="number" name="age" value={props.age} onChange={props.changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Salary</label>
        <input placeholder='Enter your salary' type="number" name="salary" value={props.salary} onChange={props.changeHandler} />
      </Form.Field>
      <Form.Field>
        <label>Hobby</label>
        <input placeholder='Enter your hobby' type="text" name="hobby" value={props.hobby} onChange={props.changeHandler} />
      </Form.Field>

      <Button color="blue" type='submit' disabled={!props.readyToSubmit()}  >Submit</Button>
    </Form>
  )
}
// disabled={!props.readyToSubmit()}
export default UserForm;