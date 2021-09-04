import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";
import axios from 'axios';
import UploadPage from './UploadPage';
let self;
class Login extends Component {
  constructor(props){
      console.log('abcbdbjnvkn',props);
    super(props);
    self=this;
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
         <TextField
           hintText="Enter your College Rollno"
           floatingLabelText="Resident Id"
           onChange={(event,newValue) => self.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => self.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    self.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'student'
    }
  }
  componentWillMount(){
  console.log("willmount prop values",self.props);
  if(self.props.role != undefined){
    if(self.props.role == 'student'){
      console.log("in student componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your College Rollno"
             floatingLabelText="Resident ID"
             onChange = {(event,newValue) => self.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => self.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      self.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
    }
    else if(self.props.role == 'teacher'){
      console.log("in teacher componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your ID"
             floatingLabelText="Garbage collector ID "
             onChange={(event,newValue) => self.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange={(event,newValue) => self.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
      self.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
    }
  }
  }
  handleClick(event){
      console.log('propssss',self.props,self.props,self.props.loginRole);
    var payload={
      "userid":self.state.username,
	    "password":self.state.password,
      "role":self.state.loginRole
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);

     if(response.data.code == 200){
         if(self.state.loginRole== 'teacher')
         {
             self.props.history.push("/adminHome");
         }
         else
         {
             self.props.history.push({
                 pathname: "/Home",
                 state: {
                     result: response.data.result[0].points
                 }

             })
             console.log("Login successfull");
         }


     /*  var uploadScreen=[];
       uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
       */
     }
     else if(response.data.code == 204){
       console.log("Username password do not match");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  handleMenuChange(value){
    console.log("menuvalue",value);
    var loginRole;
    if(value==1){
      var localloginComponent=[];
      loginRole='student';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your ID"
             floatingLabelText="Resident Id"
             onChange = {(event,newValue) => self.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => self.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    else if(value == 2){
      var localloginComponent=[];
      loginRole='teacher';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your ID"
             floatingLabelText="Garbage Collector ID"
             onChange = {(event,newValue) => self.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => self.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => self.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    self.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   loginRole:loginRole})
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="Login"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login as:</p>
        <DropDownMenu value={self.state.menuValue} onChange={(event,index,value)=>self.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="Resident" />
          <MenuItem value={2} primaryText="Garbage Collector" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {self.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
