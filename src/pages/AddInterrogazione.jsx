import React, { Component } from 'react'
import { useState } from "react";
import Select from 'react-select'
import materie from "../data/materie.json"
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "#242424" }),
  option: (styles) => ({ ...styles, backgroundColor: "#242424", color: "#FFFFFF", cursor: "pointer" }),
  ":active": {
    backgroundColor: "#FFFFFF"
  }
}




export default class AddInterrogazione extends Component  {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }
  

 async getOptions(){

    const options = materie.map(d => ({
      "value" : d.id,
      "label" : d.materia

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    
    return (
      <>
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#343434',
              primary: 'white',
              neutral0: "#242424",
              neutral80: 'white',
            },
          })}
        />
        
          <p>{this.state.name} {this.state.id}</p>
      </div>
        <Example />
        </>
    )
  }
  
}

const Example = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <p>{value.toDateString()}</p>
    </div>
    
  );
};