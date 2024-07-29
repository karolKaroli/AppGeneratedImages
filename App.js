import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Switch,
  Button 
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',

      limite: 500,

      status: false,

      sexo: 0,
      sexos: [
        {key: 0, tipo: 'Masculino'},
        {key: 1, tipo: 'Feminino'},
        {key: 2, tipo: 'Transgênero'},
        {key: 3, tipo: 'Gênero neutro'},
        {key: 4, tipo: 'Não-binário'},
      ]
    };

    this.abrirConta = this.abrirConta.bind(this);
  };

  abrirConta () {
    const {nome, idade, sexo} = this.state;

    if (nome === '' || idade === ''){
      alert('Informe seu nome e sua idade!');
      return;
    }
      
    // this.setState({
    //   nome: 'Bem vindo: ' + nome + ' !!!',
    //   idade: 'Sua idade é: ' + idade + ' anos!'      
    // });
    
    alert(`Olá seja muito bem vindo(a)!\nNome: ${nome} \nIdade: ${idade} anos!\nSexo: ${this.state.sexos[this.state.sexo].tipo} \nSeu limite é: $$ ${this.state.limite.toFixed(2)} \nEstudante? ${this.state.status} `);
    
  }
  
  
  render(){
    
    let sexosItem = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.tipo} />
    } )

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Banco React!!!</Text>
        <View style={styles.containerFilho}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome!"
            onChangeText={ (texto) => this.setState({nome: texto}) }
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade!"
            onChangeText={ (number) => this.setState({idade: number}) }
          />
        </View>
        <View style={styles.containerFilho}>
          <Text style={styles.sexo}>Sexo!!!</Text>
          
          <Picker
          selectedValue={this.state.sexo}
          onValueChange={ (itemValue, itemIndex) =>  this.setState({sexo: itemValue}) }
          >
            {sexosItem}
          </Picker>

          {/* <Text style={styles.input}> Sexo: {this.state.sexos[this.state.sexo].tipo}</Text> */}
        </View>
        <View style={styles.containerFilho}>
          <Text style={styles.sexo}>Limite!!!</Text>

          <Slider 
          minimumValue={0}
          maximumValue={1000} 
          onValueChange={ (limiteSelecionado) => this.setState({limite: limiteSelecionado}) }
          value={this.state.limite}
          // Personalisando
          minimumTrackTintColor='green'
          maximumTrackTintColor='#FF0000'
          
          />

          <Text style={styles.sexo}>Seu Limite é: $$ {this.state.limite.toFixed(2)} </Text>

        </View>
        <View style={styles.containerFilho}>
          <Text style={styles.sexo}>Estudante?</Text>

          <Switch 
            value={this.state.status}
            onValueChange={ (valorSwitch) => this.setState({status: valorSwitch}) }
            thumbColor="#FF0000"
          />

          {/* Renderização condicional com operador ternário */}
          <Text style={{textAlagn: 'center', fontSize: 30}}>
            {(this.state.status) ? "Ativo" : "Inativo"}
          </Text>

        </View>
        <View style={styles.containerFilho}>

          <Button title="Abrir Conta" onPress={this.abrirConta} />

          <Text style={styles.texto}>{this.state.nome}</Text>
          <Text style={styles.texto}>{this.state.idade}</Text>
          {/* <Text style={styles.texto}>{this.state.sexo}</Text> */}
          {/* <Text style={styles.input}> Sexo: {this.state.sexos[this.state.sexo].tipo}</Text> */}

        </View>

      </View>

    );
  }
}


export default App;