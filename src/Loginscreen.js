import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

const style = {
  margin: 15,
};
let self;

class Loginscreen extends Component {
  constructor(props){
    super(props);
    self=this;
    var loginButtons=[];
    loginButtons.push(
      <div key={"Login-Div"}>
      <MuiThemeProvider>
        <div>
           <RaisedButton label={"Register as Resident"} primary={true} style={style} onClick={(event) => self.handleClick(event,'student')}/>
       </div>
       </MuiThemeProvider>
       <MuiThemeProvider>
       <div>
          <RaisedButton label={"Register as Garbage Collector"} primary={true} style={style} onClick={(event) => self.handleClick(event,'teacher')}/>
      </div>
      </MuiThemeProvider>
      </div>
    )
    self.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      studentbuttonLabel:'Register as Resident',
      teacherbuttonLabel:'Register as Collector',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    console.log("props component",self.props);
    loginscreen.push(<Login parentContext={self} appContext={self.props.appContext} {...self.props} key={"LoginScreen"}/>);
    var loginmessage = "Not registered yet, Register Now";
    self.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event,userRole){
      console.log("props component",self.props);
    console.log("event",userRole);
    var loginmessage;
    if(self.state.isLogin){
        console.log("props component1",self.props);
      let loginscreen=[];
      loginscreen.push(<Register parentContext={self} appContext={self.props.appContext} {...self.props}  role={userRole}/>);
      loginmessage = "Already registered.Go to Login";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => self.handleClick(event,userRole)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      self.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
        console.log("props component2",self.props);
      let loginscreen=[],loginButtons=[];
        console.log("props component",self.props);
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Register as Resident"} primary={true} style={style} onClick={(event) => self.handleClick(event,'student')}/>
         </div>
         </MuiThemeProvider>
         <MuiThemeProvider>
         <div>
            <RaisedButton label={"Register as Garbage Collector"} primary={true} style={style} onClick={(event) => self.handleClick(event,'teacher')}/>
        </div>
        </MuiThemeProvider>
        </div>
      )
      loginscreen.push(<Login parentContext={self} appContext={self.props.appContext} {...self.props}  role={userRole}/>);
      loginmessage = "Not Registered yet.Go to registration";
      self.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {self.state.loginscreen}
        <div>
          {self.state.loginmessage}
          {self.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;
