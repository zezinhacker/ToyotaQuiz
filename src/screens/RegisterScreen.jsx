import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { styles } from "../utils/style";
import { Image } from "react-native-web";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o registro do Usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário!", error);

        // código de erro
        const errorCode = error.code; // auth/weak-password
        // mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca!");
        }

        if (errorCode === "auth/email-already-in-use") {
          console.log("E-mail já cadastrado!");
        }

        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabTop}>
        <Text style={styles.logoText}>Toyota Quiz</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.texto}>Se não tiveres uma conta, faça o cadastro para salvar a sua pontuação.</Text>
        <TextInput
          label="Email"
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
          style={{ backgroundColor: "#778DA9" }}
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua senha"}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true} // faz com que o texto pareça ser uma senha
          style={{ marginTop: 10, backgroundColor: "#778DA9" }}
        />
        <Button onPress={handleRegister} style={styles.logar} >Registre-se</Button>
      </View>
    </View>
  );
}