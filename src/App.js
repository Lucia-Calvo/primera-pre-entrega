import React, {Component} from "react";
import "./App.css";

//import components
import NavBar from "./components/Navbar/NavBar";

class App extends Component{
render() {
    return(
        <div>
            <NavBar />
            <h1> Bienvenidos a Natural!</h1>
        </div>
        );
    }
}

export default App