import React, { Component } from 'react';
import './App.css'

class Questions extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            question: {
                number: 1,
                text: "Antigamente, os pirralhos dobravam a língua diante dos pais e se um se esquecia de arear os dentes antes de cair nos braços de Morfeu, era capaz de entrar no couro. Não devia também se esquecer de lavar os pés, sem tugir nem mugir. Nada debater na cacunda do padrinho, nem de debicar os mais velhos, pois levava tunda. Ainda cedinho, aguava as plantas, ia ao corte e logo voltava aos penates. Não ficava mangando na rua, nem escapulia do mestre, mesmo que não entendesse patavina da instrução moral e cívica. O verdadeiro smart calçava botina de botões para comparecer todo liró ao copo d’água, se bem que no convescote apenas lambiscasse, para evitar flatos. Os bilontras é que eram um precipício, jogando com pau de dois bicos, pelo que carecia muita cautela e caldo de galinha. O melhor era pôr as barbas de molho diante de um treteiro de topete, depois de fintar e engambelar os coiós, e antes que se pusesse tudo em pratos limpos, ele abria o arco.",
                options: [
                    { option: 'a', text: "a língua portuguesa de antigamente carecia de termos para se referira fatos e coisas do cotidiano." },
                    { option: 'b', text: "o léxico do português representa uma realidade linguística variável e diversificada." },
                    { option: 'c', text: "o português brasileiro apoia-se no léxico inglês para ser reconhecido como língua independente." },
                    { option: 'd', text: "o português brasileiro se constitui evitando a ampliação do léxico proveniente do português europeu."},
                    { option: 'e', text: "a heterogeneidade do português leva a uma estabilidade do seu léxico no eixo temporal." }
                ],
                rightOption: 0
            }
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === '/questoes-linguagens') {
            this.setState({ type: 'linguagens' })
        } else {
            this.setState({ type: 'humanas' })
        }
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
