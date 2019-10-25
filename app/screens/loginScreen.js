import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import HeaderSection from "../components/Header";
import { FirebaseInit } from "../utils/firebase";

export default class loginScreen extends Component {
  
  static navigationOptions = { title: "Login" }
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isHidden: true
    };
  }

  login = (email, password) => {
    if (!email) {
      alert("Preencha o campo de email abaixo.")
      return
    }
    if (!password) {
      alert("Preencha o campo de senha abaixo.")
      return
    }
    FirebaseInit.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      this.props.navigation.navigate('Chat')
      alert("Login aceito, você vai ser redirecionado")
    }).catch(function(error){alert("Ops:", error.toString(error))})
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderSection title="Login" />
        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite seu email"}
            onChangeText={value => this.setState({ email: value })}
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite sua senha"}
            onChangeText={value => this.setState({ password: value })}
          />
          <Button
            title="Entrar"
            style={{ width: "100%" }}
            onPress={() => this.login(this.state.email, this.state.password)}
          ></Button>
          <Button
            title="Não tenho login"
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff"
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#B1B1B1",
    borderRadius: 8,
    backgroundColor: "#FCF8F6",
    padding: 12,
    marginTop: 12,
    marginBottom: 12
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10
  }
});
