import React, { Component } from 'react';
import './App.css';
import Input from './components/PageWrapper/Input';
import Output from './components/PageWrapper/Output';
import PageHeader from './components/PageWrapper/PageHeader';
import ResetInputButton from './components/PageWrapper/ValidateButton';
import ValidateButton from './components/PageWrapper/ValidateButton';
import isJSON from 'is-json';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputData: "",
      outputData:""
    }
  }
  
  change = e => {
   this.setState({inputData: e.target.value})
  }
  // called in validationHandler
  parentFinder = (data,obj) => {
    let z = 0;
    while (data[z] != null){
      var found = data[z].find((element) => {
        if (element.id === obj.parent_id){
          return element
        }
      });
      if(found != null){
        found.children.push(obj)
      }
      z += 1;
    }
  }

// Validate input and decide whether to parse it
validationHandler = e => {
    if(isJSON(this.state.inputData) && (this.state.inputData !== "")) {
      var data = JSON.parse(this.state.inputData)
      var i = 0;
    // check for a parent id
    while (data[i] != null){
      for (var j = 0; j < data[i].length; j++){
      if (data[i][j].parent_id != null){
        // call parentFinder to attach objects to their parents
        this.parentFinder(data,data[i][j])
      }
    }
  i += 1;
  }
  // checks if 
  if(data[0]){
    this.setState({outputData:JSON.stringify(data[0],null,5)})
  } else if(data) {
    this.setState({outputData:JSON.stringify(data,null,5)})
  }
  } else {
    alert("Please Enter JSON Data!")
    }
} 
  // reset button 
  resetHandler = (e) => {
    this.setState({inputData:""})
    this.setState({outputData:""})
  } 
 
  render() { 
    return (  
      <div className="wrapper">
        <PageHeader />
        <Input name="inputData" value={this.state.inputData} onChange={this.change} placeholder={'Paste JSON Here'}/>
        <div className="buttonWrapper">
          <ValidateButton title={'Validate'} onClick={this.validationHandler}/> 
          <ResetInputButton title={'Reset Input'} onClick={this.resetHandler}/>
        </div> 
          <Output type="text" value={this.state.outputData}> </Output>
      </div>
    );
  }
}

export default App;

