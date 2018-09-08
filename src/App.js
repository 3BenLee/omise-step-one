import React, { Component } from 'react';
import './App.css';
import Input from './components/PageWrapper/Input';
import Output from './components/PageWrapper/Output';
import PageHeader from './components/PageWrapper/PageHeader';
import ResetInputButton from './components/PageWrapper/ValidateButton';
import ValidateButton from './components/PageWrapper/ValidateButton';
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputData: "",
      outputData:""
    }
  }
  
  change = e => {
    //this.setState({[e.target.name]: e.target.value}) 
   this.setState({inputData: e.target.value})
   // console.log("e.target.value")
  }
  findParent = arr => {

  }
  validationHandler = e => {
    //console.log(this.state.inputData)
    var data  = JSON.parse(this.state.inputData)
    //this.setState({outputData: this.state.inputData})
    var i = 0;

    while (data[i] != null){
    //console.log(data[i])
    for (var j = 0; j < data[i].length; j++){
      if (data[i][j].parent_id !=null){
        //console.log(data[i][j].parent_id)
        var z = 0;
        while (data[z] != null){
          var found = data[z].find(function(element) {
            if (element.id === data[i][j].parent_id){
              return element
              //return data[i][j]
            }
            //console.log(found)
          });
          if(found !=null){
            found.children.push(data[i][j])
            //console.log(found)
          }
         
          z = z+1;
        }

      }
     }
    i = i+1;
   }
   //console.log(length)
   this.setState({outputData:JSON.stringify(data[0],null,5)})
   //{data.map((item,i) => {outData:item} )}
   //this.outData = data
  //this.setState({outData:data[0]})
 }

 resetHandler = (e) => {
   this.setState({inputData:""})
   this.setState({outputData:""})
   //this.setState({mydata:""})
   //console.log('button clicked');
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

