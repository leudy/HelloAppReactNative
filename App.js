import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';


const MyTextWithProp = ({ style }) => {
  const [texto, setTexto] = useState('Hola Mundo')
  const hanlderClick = () => {
    setTexto('Boton Clicked')
  }
  // const { msg } = props;
  return (<Text style={[styles.texto, style]}
    onPress={hanlderClick}



  >{texto}</Text>);
}
const handleSubmit = () => {
  console.log(texto)
  settexto('')
  alert(texto)
}



// const MyTextChildren = (props) => {
//   const { children } = props;
//   return (<Text >{children}</Text>);
// }

{/* <MyTextWithProp style={styles.white} />
      <MyTextWithProp style={styles.red} />
      <MyTextWithProp style={styles.green} /> */}

export default function App() {
  const [texto, settexto] = useState('')
  return (
    <View style={styles.container}>
      {/* <MyTextWithProp style={styles.white} ></MyTextWithProp> */}
      <Text>Texto Digitado: {texto}</Text>
      <TextInput
        style={styles.Input}
        placeholder='Digita tu nombre'
        onChange={t => settexto(t.target.value)}
        defaultValue={texto}
      ></TextInput>
      <Button title='Aceptar'
        onPress={handleSubmit}

      ></Button>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    fontSize: 24,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 12
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
