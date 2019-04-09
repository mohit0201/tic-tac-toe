import React, {Component} from "react"

class Header extends Component {

    render() {
        let date = new Date()
        let hours = date.getHours()
        let timeOfDay

        const styles = {
            fontSize: 40,
            textAlign: "center",
            color: "whitesmoke"
        }

        if(hours < 12) {
            timeOfDay = "Morning!"
            styles.color = "#61dafb"
        } else if(hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon!"
            styles.color = "gold"
        } else if(hours >= 17 && hours < 20) {
            timeOfDay = "Evening!"
            styles.color = "tomato"
        } else {
            timeOfDay = "Night!"
            styles.color = "darkkhaki"
        }
        const text = 'A Game of Tic-Tac-Toe'

        return(
            <div className="header">
                <br />
                <h1 className="header" style={styles}>{text}</h1>
                <br />
            </div>
        )
    }
}

export default Header