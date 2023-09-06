import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { GroupInputs } from './components/GroupInputs';

export default function App() {

  const [primeiroValor, setPrimeiroValor] = useState(0)
  const [segundoValor, setSegundoValor] = useState(0)
  const [total, setTotal] = useState(0)

  function calcularValoresTela(){
    console.log(primeiroValor)
    setTotal( parseFloat(primeiroValor) + Number(segundoValor))
    console.log("Total = " + total)
    }

  function calcularValoresTelaAlert(){
    setTotal( parseFloat(primeiroValor) + Number(segundoValor))
    Alert.alert('A soma é ' + total, '', 
    [{text: 'Sim'}, {text: 'Certeza'}] )

  }

  function limparValores(){
    setPrimeiroValor(0)
    setSegundoValor(0)
    setTotal(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <GroupInputs label="Primeiro Valor" 
            valueText={primeiroValor}
            onChangeValue={setPrimeiroValor}/>

        <GroupInputs label="Segundo Valor" color={styles.pink}
           valueText={segundoValor}
         onChangeValue={setSegundoValor}/>

        <Text style={styles.textSomar}> Soma é {total}</Text>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green'}]}
          onPress={calcularValoresTela} 
          onLongPress={calcularValoresTelaAlert}>
            <Text style={styles.textButton}>Somar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button , { backgroundColor: 'orange'}]}
          onPress={limparValores} >
            <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center', 

    gap: 16,
    padding: 16
  },
  textSomar: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center'
  },
  form : {
    flex: 1,
    backgroundColor: 'red',
    padding: 16,
    width: '100%'
  },
  pink : {
    color: 'blue'
  },  
  footer : {
    width: '100%',
    gap: 10,
    flexDirection: 'row'
  },
  button : {
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  textButton: {
    fontSize: 24
  }
});
