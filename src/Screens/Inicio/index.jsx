import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";


import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Inicio({ navigation }) {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("")

  useEffect(() => {
    const checkForExistingData = async () => {
      try {
        const storedNome = await AsyncStorage.getItem("nome");
        const storedPeso = await AsyncStorage.getItem("peso");
        const storedAltura = await AsyncStorage.getItem("altura");

        if (storedNome && storedPeso && storedAltura) {
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error("Erro ao verificar os dados:", error);
      }
    };

    checkForExistingData();
  }, [navigation]);


  const entrar = async () => {
    if (nome.trim() === "" || peso.trim() === "" || altura.trim() === "") {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await AsyncStorage.setItem("nome", nome);
      await AsyncStorage.setItem("peso", peso);
      await AsyncStorage.setItem("altura", altura);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Bem vindo ao Meal Meter</Text>
        <Text style={styles.descricao}>
          Registre suas refeições facilmente, acompanhe calorias, proteínas e
          mais para atingir seus objetivos de saúde.
        </Text>
      </View>

      <Text>Informe seus dados para entrar:</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity onPress={entrar} style={styles.botaoEntrar}>
        <View style={styles.conteudoBotao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF0D5",
  },
  boxTexto: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    width: "75%",
  },
  titulo: {
    color: "#C1121F",
    fontSize: 22,
    fontWeight: "bold",
  },
  descricao: {
    color: "#C1121F",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  boxBotoes: {
    justifyContent: "center",
    alignItems: "center",
  },
  botaoEntrar: {
    backgroundColor: "#780000",
    width: 250,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  botaoCadastro: {
    backgroundColor: "#CF7B29",
    width: 250,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  conteudoBotao: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
