import NavBar from "./Components/NavBar";
import './App.css'
import Banner from "./Components/Banner";
import RowPost from "./Components/RowPost/RowPost";
import React from "react";
import { originals, action} from './urls';

function App() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost url = {originals} title='Netflix Originals' isOriginals />
            <RowPost url = {action} title = 'Action'  />
        </div>
    )
}

export default App;
