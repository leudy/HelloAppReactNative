import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const MyTextWithProp = ({ style }) => {
  const [texto, setTexto] = useState('Hola Mundo')
  const hanlderClick = () => {
    setTexto('Boton Clicked')
  }
  // const { msg } = props;
  return (<Text style={[styles.texto, style]} onPress={hanlderClick}>{texto}</Text>);
}


const MyTextChildren = (props) => {
  const { children } = props;
  return (<Text >{children}</Text>);
}



export default function App() {





  return (
    <View style={styles.container}>
      <MyTextWithProp style={styles.white} />
      <MyTextWithProp style={styles.red} />
      <MyTextWithProp style={styles.green} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20, fontWeight: 'bold', color: 'white'

  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green',
  },
  white: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
});
