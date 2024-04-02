import './App.css';
import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebraMacaco = this.quebraMacaco.bind(this);
    this.frases = [
      'Por que o macaco não usa chapéu? Porque ele já tem um casaco!',
      'O que o macaco disse para o outro macaco? Não sei, estou "macacando"!',
      'Qual é o macaco mais rico? O Macaco Donald!',
      'Por que o macaco foi ao médico? Porque estava se sentindo "macacado"!',
      'O que o macaco disse para a banana? Nada, ele só a descascou!',
      'Qual é o esporte favorito dos macacos? Volei-macaco!',
      'Qual é o filme favorito dos macacos? Banana Jones e o Templo da Banana!',
      'Por que o macaco foi expulso da escola? Porque ele estava aprontando muitas macaquices!',
      'O que o macaco disse para a banana? Nada, bananas não falam!',
      'Por que o macaco gosta de dançar? Porque ele é um "macaquerengue"!',
      'Qual é o animal que os macacos mais temem? O gorila-colosso!',
      'O que acontece quando um macaco quebra um espelho? Ele tem sete anos de macacada ruim!',
      'Por que os macacos não usam computadores? Porque eles têm medo do mouse!',
      'Qual é o cantor favorito dos macacos? Justin Bananaber!',
      'Por que o macaco foi ao circo? Para se pendurar na trapezista!',
      'Qual é o programa de TV favorito dos macacos? "A Fazenda"!',
      'O que o macaco disse para a máquina de lavar? Pare de jogar roupas sujas no ventilador!',
      'Por que o macaco foi para a escola? Para aprender a fazer "macacadas" de matemática!',
      'Qual é o lugar favorito dos macacos para se sentar? No galho de um "lounge"!',
      'Por que o macaco não usa celular? Porque ele já tem uma rede social: a selva!',      
    ];

    
    
  }

  quebraMacaco(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/monkey.jpeg')} className='img'/>
        <Botao nome="Fale macaco" acaoBtn={this.quebraMacaco}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <br/>
        <button className="btn-class-name" onClick={this.props.acaoBtn}>{this.props.nome}
          <span class="back"></span>
          <span class="front"></span>
        </button>
      </div>
    )
  }
}

export default App;
