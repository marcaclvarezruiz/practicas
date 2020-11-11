import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Image, Button, Alert } from 'react-native'

class App extends Component {
  login = () => { Alert.alert('Hola!') }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <h1> Eatkube Restaurantes </h1>
          <Image style={styles.image} source={require('./assets/test.jpg')}>

          </Image>
        </View>
        <View style={styles.register} >
          <TextInput style={styles.inputField} placeholder={'Usuario'} ></TextInput>
          <TextInput style={styles.inputField} placeholder={'Contraseña'} secureTextEntry={true} ></TextInput>
          <Button title='Entrar' onPress={this.login}></Button>
        </View>
      </View>
    )
  }
}

const width_proportion_login = '80%';
const height_proportion_login = '10%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }, welcome: {
    alignItems: 'center',
    flex: 0.8,
    backgroundColor: 'blue',
  }, register: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'green',
  }, image: {
    width: 100,
    height: 100
  }, inputField: {
    width: width_proportion_login,
    height: height_proportion_login,
    marginBottom: 50
  }, margins: {
    marginLeft: 10,
    marginRight: 10
  }, button: {
    marginBottom: 10
  }
})

export default App;