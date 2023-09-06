import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

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

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <View style={styles.group}>
          <Text style={styles.textLabel}> Primeiro Valor</Text>
          <TextInput keyboardType='decimal-pad' style={styles.inputText}
            onChangeText={setPrimeiroValor}/>
        </View>

        <View style={styles.group}>
          <Text style={styles.textLabel}> Segundo Valor</Text>
          <TextInput  keyboardType='decimal-pad' style={styles.inputText} 
          onChangeText={text => setSegundoValor(text)}/>
        </View>

        <Text style={styles.textLabel}> Soma é {total}</Text>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}
          onPress={calcularValoresTela} 
          onLongPress={calcularValoresTelaAlert}>
            <Text style={styles.textButton}>Somar</Text>
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
  form : {
    flex: 1,
    backgroundColor: 'red',
    padding: 16,
    width: '100%'
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  group: {
    padding:10,
    gap: 10
  },
  inputText:{
    backgroundColor:'#fff',
    padding: 8,
    fontSize: 20,
    borderRadius: 5
  },
  footer : {
    width: '100%',
    backgroundColor: 'green'
  },
  button : {
    alignItems: 'center',
    padding: 10
  },
  textButton: {
    fontSize: 24
  }
});
