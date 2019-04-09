import React, { Component } from "react"

import Game from "./components/Game"
import Header from "./components/Header"
import Footer from "./components/Footer"


class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Game />
                <Footer />
            </div>
        )
    }
}

export default App