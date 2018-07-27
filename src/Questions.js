import React, { Component } from 'react';
import './App.css'

class Questions extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            index: 0,
            answer: '',
            hits: 0,
            questions: [
                {
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
            ]
        }
        this.handleKey = this.handleKey.bind(this)
        this.numberOptions = ['1', '2', '3', '4', '5']
    }

    componentDidMount() {
        document.getElementsByClassName("container")[0].focus();
        if (this.props.location.pathname === '/questoes-linguagens') {
            this.setState({ type: 'linguagens' })
        } else {
            this.setState({ type: 'humanas' })
        }
        this.startQuestion()
    }

    startQuestion() {
        this.readQuestion()
        this.readOptions()
    }

    handleKey(event) {
        if (event.key === 'h') {
            this.readQuestion()
        }

        if (event.key === 'l') {
            this.readOptions()
        }

        if (this.numberOptions.includes(event.key)) {
            this.state.answer = event.key
            window.responsiveVoice.speak("Você selecionou a alternativa " + event.key + ". Pressione J para confirmar sua escolha")
        }

        if (event.key === 'j') {
            this.checkAnswer()
        }
    }

    checkAnswer() {
        if (this.state.answer === this.state.questions[this.state.index].rightOption) {
            window.responsiveVoice.speak("Parabéns, você selecionou a resposta correta.")
            this.state.hits++;
        } else {
            window.responsiveVoice.speak("Que pena, você errou. A alternativa correta é: " + this.state.questions[this.state.index].rightOption)
        }
        this.state.index++;
        if (this.state.index < this.state.questions.length)
            this.startQuestion()
        else
            this.props.history.push('/fim/' + this.state.hits);
    }

    readQuestion() {
        let question = this.state.questions[this.state.index]
        window.responsiveVoice.speak("Questão " + question.number)
        window.responsiveVoice.speak(question.text)
        window.responsiveVoice.speak("Pressione H se quiser ouvir o texto novamente")
    }

    readOptions() {
        let options = this.state.questions[this.state.index].options
        window.responsiveVoice.speak("Selecione com o teclado numérico a alternativa correta.")
        for (let i in options) {
            window.responsiveVoice.speak("Alternativa " + options[i].option)
            window.responsiveVoice.speak(options[i].text)
        }
        window.responsiveVoice.speak("Pressione L se quiser ouvir as alternativas novamente")
    }

    renderOptions() {
        let options = this.state.questions[this.state.index].options
        let optionsToRender = []

        for (let i = 0; i < 5; i++) {
            optionsToRender.push(<h3>{options[i].option}. {options[i].text}</h3>)
        }

        return optionsToRender
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h1 className="question type">Prova de {this.state.type}</h1>
                <h2 className="question number">Questão {this.state.questions[this.state.index].number}</h2>
                <h3 className="question text">{this.state.questions[this.state.index].text}</h3>
                <div className="options">
                    {this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default Questions;
