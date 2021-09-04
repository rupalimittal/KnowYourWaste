import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import select  from "react-file-tree/lib/tree/plugins/select";
import axios from 'axios';
import Login from './Login';
var self;
class Register extends Component {
  constructor(props){
    super(props);
    self=this;
    self.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
        society_name:'',
        FLAT_NO:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
    selecthandler(event,newValue)
    {
        event.persist();
        console.log(event);
        console.log(newValue);
        console.log(event.target.value);
        self.setState({society_name:event.target.value});
    }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:4000/api/";
    // console.log("values in register handler",role);

    //To be done:check for empty values before hitting submit
     let payload={};
      if(role==='student')
      {
          if(self.state.first_name.length>0 && self.state.last_name.length>0 && self.state.email.length>0 && self.state.password.length>0&&self.state.society_name.length>0&&self.state.FLAT_NO.length>0)
          {
              payload={
                  "first_name": self.state.first_name,
                  "last_name":self.state.last_name,
                  "userid":self.state.email,
                  "password":self.state.password,
                  "society_name":self.state.society_name,
                  "FLAT_NO":self.state.FLAT_NO,
                  "role":role
              }
          }
          else
          {
              alert("Input field value is missing");
              return;
          }
      }
      else
      {
          if(self.state.first_name.length>0 && self.state.last_name.length>0 && self.state.email.length>0 && self.state.password.length>0)
          {
              payload={
                  "first_name": self.state.first_name,
                  "last_name":self.state.last_name,
                  "userid":self.state.email,
                  "password":self.state.password,
                  "role":role
              }
          }
          else
          {
              alert("Input field value is missing");
              return;
          }
      }



      axios.post(apiBaseUrl+'/register', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code === 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={self} appContext={self.props.appContext} {...self.props} role={role}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
  }
  render() {
    // console.log("props",self.props);
    var userhintText,userLabel;
    if(self.props.role === "student"){
      userhintText="Enter your Id";
      userLabel="Resident ID";
    }
    else{
      userhintText="Enter your  Id";
      userLabel="Garbage Collector Id";
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => self.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => self.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText={userhintText}
             floatingLabelText={userLabel}
             onChange = {(event,newValue) => self.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => self.setState({password:newValue})}
             />
              <br/>
              { userLabel!=="Garbage Collector Id"?
                  <React.Fragment>

                      <br/>
               Select society Name
                      <br/>
              <select onChange= {(event,newValue)=>self.selecthandler(event,newValue)} >
                  <option></option>
                  <option value="Green Field Homes">Green Field Homes</option>
                  <option value="Green Valley Heights">Green Valley Heights</option>
                  <option value="Akme Ballet">Akme Ballet</option>
                  <option value="Urban Solace">Urban Solace</option>

              </select>
                  </React.Fragment>
                  :null}


              { userLabel!=="Garbage Collector Id"?
                  <React.Fragment>
                  <br/>
                  <br/>

              <TextField
                  hintText="Flat No"
                  floatingLabelText="Flat No"
                  onChange = {(event,newValue) => self.setState({FLAT_NO:newValue})}
              />
                  </React.Fragment>
                  :null}
              <br/>
<br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event,self.props.role)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
