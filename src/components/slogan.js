import * as styles from "./index.module.css";
import React from "react";


const slogans = ['grafolution', 'revolution', 'evolution', 'solution', 'resolution', 'distribution'];

class Slogan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlogan: this.getRandomSlogan(slogans[0]),
            displayedText: '',
            action: 'adding',
        };
        this.changeSlogan = this.changeSlogan.bind(this);
    }

    componentDidMount() {
        const { currentSlogan} = this.state;

           this.timerID = setInterval(
               this.changeSlogan,
               1200
           );

           this.timerID = setInterval(
               this.changeSlogan,
               300
           );


    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getRandomSlogan(exclude) {
        let newSlogan;
        do {
            newSlogan = slogans[Math.floor(Math.random() * slogans.length)];
        } while (newSlogan === exclude);
        return newSlogan;
    }

    changeSlogan() {
        const { currentSlogan, displayedText, action } = this.state;
        console.log(currentSlogan);
        if (action === 'adding') {
            if (displayedText.length < currentSlogan.length) {
                this.setState({
                    displayedText: currentSlogan.slice(0, displayedText.length + 1),
                });
            } else {
                this.setState({
                    action: 'removing',
                });
            }
        } else {
            if (displayedText.length > 0) {
                this.setState({
                    displayedText: currentSlogan.slice(0, displayedText.length - 1),
                });
            } else {
                this.setState({
                    action: 'adding',
                    currentSlogan: this.getRandomSlogan(currentSlogan),
                });
            }
        }
    }

    render() {
            return (
                <div className={styles.sloganContainer}>
                    <h1 className={styles.animatedText}>{this.state.displayedText}</h1>
                </div>
            );
    }
}

export default Slogan;
