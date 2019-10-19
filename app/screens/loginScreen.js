import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import HeaderSection from "../components/Header";

export default class loginScreen extends Component {
  constructor(props) {
    super(props);
   }

  static navigationOptions = {title:"Login"}

  render() {
    return (
      <View style={styles.container}>
        <HeaderSection title="Login" />
        <View style={styles.form}>
          <Text>Nome</Text>
          <TextInput style={styles.input} placeholder={"Digite seu nome"} />
          <Text>Senha</Text>
          <TextInput style={styles.input} placeholder={"Digite seu senha"} />
          <Button
            title="Entrar"
            style={{ width: "100%" }}
            onPress={() => this.props.navigation.navigate("Chat")}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#fff',
    },
    input:{
      width:"100%",
      height:40,
      borderWidth:1,
      borderColor:"#B1B1B1",
      borderRadius:8,
      backgroundColor:"#FCF8F6",
      padding: 12,
      marginTop:12,
      marginBottom: 12,
    },
    form:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      padding:10
  
    }
  });
  