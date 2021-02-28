import React, { Component } from 'react'
// import { Button, Form, Container, Header, Grid, Segment } from 'semantic-ui-react'
import './App.css';
import  Page from "./Component/Page";

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const App = ()=> {
    return (
      <Page/>
    )
}
export default App;
