import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import { Route } from "react-router-dom";
import  mainPage from "./mainPage";
import adminHome  from "./adminHome";
import Navbar  from "./Navbar";
import Header from "./Header";
import WasteDetail from "./WasteDetail";
import WasteQuote from "./WasteQuote";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (

      <div className="App">
        <Route
            exact
            path="/"
            render={(props) =>
                    < LoginScreen {...props} />
            }
        />
          <Route path='/Home' component={mainPage}/>
        <Route path='/adminHome' component={adminHome}/>
        {/*<Route*/}
        {/*    path="/home"*/}
        {/*    render={(props) =>*/}
        {/*        <>*/}


        {/*            <Navbar {...props} />*/}
        {/*            <Header {...props} />*/}
        {/*             <WasteDetail {...props} />*/}
        {/*            <WasteQuote {...props} />*/}
        {/*        <WasteDetail {...props} />*/}
        {/*            </>*/}
        {/*    }*/}
        {/*/>*/}
       {/*{this.state.loginPage}*/}
       {/* {this.state.uploadScreen}*/}

      </div>
    );
  }
}

export default App;
