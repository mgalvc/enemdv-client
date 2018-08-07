import React, { Component } from 'react';
import './App.css'
import axios from 'axios'

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
                    order: 1,
                    wording: "",
                    options: [
                        {
                            description: ""
                        },
                        {
                            description: "",
                            veracity: true
                        },
                        {
                            description: ""
                        },
                        {
                            description: ""
                        },
                        {
                            description: ""
                        }
                    ]
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
            axios.get('https://enemdv-api.herokuapp.com/api/v1/exams/1/questions')
                .then(res => {
                    console.log(res.data.questions)
                    this.setState({ questions: res.data.questions})
                })
        }
        this.startQuestion()
    }

    startQuestion() {
        window.responsiveVoice.speak("Pressione H para ouvir o texto da questão. Pressione L para ouvir as alternativas.")
    }

    handleKey(event) {
        if (event.key === 'h') {
            this.readQuestion()
        }

        if (event.key === 'l') {
            this.readOptions()
        }

        if (event.key === 'u') {
            this.props.history.push('/fim/' + this.state.hits);
        }

        if (this.numberOptions.includes(event.key)) {
            this.state.answer = event.key - 1
            console.log(this.state.answer)
            window.responsiveVoice.speak("Você selecionou a alternativa " + event.key + ". Pressione J para confirmar sua escolha")
        }

        if (event.key === 'j') {
            this.checkAnswer()
        }
    }

    checkAnswer() {
        let question = this.state.questions[this.state.index]
        if (question.options[this.state.answer].veracity === true) {
            this.state.hits++;
        }

        if (this.state.index < this.state.questions.length-1) {
            this.setState({ index: ++this.state.index })
            //this.state.index++;
            this.startQuestion()
        } else
            this.props.history.push('/fim/' + this.state.hits);
    }

    readQuestion() {
        let question = this.state.questions[this.state.index]
        window.responsiveVoice.speak("Questão " + (this.state.index+1))
        window.responsiveVoice.speak(question.wording)
        window.responsiveVoice.speak("Pressione H se quiser ouvir o texto novamente")
    }

    readOptions() {
        let options = this.state.questions[this.state.index].options
        window.responsiveVoice.speak("Selecione com o teclado numérico a alternativa correta.")
        for (let i in options) {
            window.responsiveVoice.speak("Alternativa " + options[i].description)
        }
        window.responsiveVoice.speak("Pressione L se quiser ouvir as alternativas novamente")
    }

    renderOptions() {
        let options = this.state.questions[this.state.index].options
        let optionsToRender = []

        for (let i = 0; i < 5; i++) {
            optionsToRender.push(<h3>{options[i].description}</h3>)
        }

        return optionsToRender
    }

    render() {
        return (
            <div className="container" tabIndex="0" onKeyPress={this.handleKey}>
                <h1 className="question type">Prova de {this.state.type}</h1>
                <h2 className="question number">Questão {this.state.questions[this.state.index].id}</h2>
                <h3 className="question text">{this.state.questions[this.state.index].wording}</h3>
                <div className="options">
                    {this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default Questions;
