import React, { Component } from 'react'

import './App.css';
import Navbar from './Navbar'
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from './components/BackDrop/BackDrop';




export class App extends Component {
  state={
    DrawerisOpen:false
  }

  DrawerClickHandler = ()=> {
    this.setState((prevState)=>{
   return{DrawerisOpen:!prevState.DrawerisOpen}
  }
    )
  }

  backdropClickHandler=()=>{
    this.setState({
      DrawerisOpen:false
    })
  }

  render() {
    let sideDrawer;
    let Backdrop;
    if(this.state.DrawerisOpen){
      //  sideDrawer = <SideDrawer />;
       Backdrop= <BackDrop backdropclick={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height:'100%'}}>
      <Navbar clickHandler={this.DrawerClickHandler} />
      <SideDrawer show={this.state.DrawerisOpen}/>
      {Backdrop} 
      <main style={{marginTop:"10px"}}>
      <p>This is a praragraph</p>
      </main>
    </div>
    )
  }
}

export default App


