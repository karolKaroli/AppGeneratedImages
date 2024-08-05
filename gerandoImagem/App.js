import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native';
// import axios from 'axios';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/images/generations', {
        prompt: prompt,
        n: 1,
        size: "512x512"
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json'
        }
      });
      setImageUrl(response.data.data[0].url);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao gerar imagem');
      console.error('Erro ao gerar imagem:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Imagens com DALL-E</Text>
      <View style={styles.row}>
        <View style={styles.containerGerador}>
          <TextInput 
            style={styles.input} 
            value={prompt} 
            onChangeText={setPrompt} 
            placeholder="Digite a descrição da imagem" 
        
          />
          <Button title="Gerar Imagem" onPress={generateImage} />
        </View>        
        {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} /> : null}
      </View>
      <View style={styles.containerImagem}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#00FFFF',
    padding: 16,
  },
  containerGerador: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6959CD',
    padding: 16,
    marginLeft: 50,
    marginRight:1000,
    floatLeft: 20
  },
  containerImagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
    marginLeft: 50,
    marginRight:1000,
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    color: '#fff'
  },
  image: {
    marginTop: 20,
    width: 512,
    height: 512,
  },
});

export default App;