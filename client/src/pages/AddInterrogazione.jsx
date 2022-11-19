import React, { Component } from 'react'
import { useState } from "react";
import Select from 'react-select'
import materie from "../data/materie.json"
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'
import axios from 'axios';


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

  state = {
    id: 0,
    materia: null,
    data: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  putDataToDB = (materia, data) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      materia: materia,
      data: data,
    });
  };

  render() {

    const { data } = this.state;
    
    return (
      <>
        <DaySelect />
      </>
        
    )
  }
  
}

const DaySelect = () => {
  const [value, onChange] = useState(new Date());

  return (
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

      <Calendar onChange={(e) => this.setState({ materia: e.target.value })} value={value} />
      <p>{materia.toDateString()}</p>
      <Link to="/5di/calendario" className='link' onClick={() => this.putDataToDB(this.state.materia)}>Calendari Interrogazioni</Link>
    </div>
    
  );
};

function sendToServer(materia, date) {
}
