import React, { Component } from 'react';
import './App.css'

class Questions extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            question: {
                number: 1,
                text: "Texto da questão",
                options: [
                    { option: '1', text: "Texto da opção" },
                    { option: '2', text: "Texto da opção" },
                    { option: '3', text: "Texto da opção" },
                    { option: '4', text: "Texto da opção" },
                    { option: '5', text: "Texto da opção" },
                ],
                rightOption: '3'
            }
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/questoes-linguagens') {
            this.setState({ type: 'linguagens' })
        } else {
            this.setState({ type: 'humanas' })
        }
        this.readQuestion()
        this.readOptions()
    }

    readQuestion() {
        window.responsiveVoice.speak("Questão " + this.state.question.number)
        window.responsiveVoice.speak(this.state.question.text)
        window.responsiveVoice.speak("Pressione H se quiser ouvir o texto novamente")
    }

    readOptions() {
        let options = this.state.question.options
        window.responsiveVoice.speak("Selecione com o teclado numérico a alternativa correta.")
        for (let i in options) {
            window.responsiveVoice.speak("Alternativa " + options[i].option)
            window.responsiveVoice.speak(options[i].text)
        }
        window.responsiveVoice.speak("Pressione L se quiser ouvir as alternativas novamente")
    }

    renderOptions() {
        let options = this.state.question.options
        let optionsToRender = []

        for (let i = 0; i < 5; i++) {
            optionsToRender.push(<h3>{options[i].option}. {options[i].text}</h3>)
        }

        return optionsToRender
    }

    render() {
        return (
            <div className="container">
                <h1 className="question type">Prova de {this.state.type}</h1>
                <h2 className="question number">Questão {this.state.question.number}</h2>
                <h3 className="question text">{this.state.question.text}</h3>
                <div className="options">
                    {this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default Questions;
