import React from "react";
import "./App.css";

//import components
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return(
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a Nature" />
        </div>
        );
}

export default App