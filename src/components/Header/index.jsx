import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Header({navigation}) {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    const getDados = async () => {
      try {
        const nome = await AsyncStorage.getItem("nome");
        const peso = await AsyncStorage.getItem("peso");
        const altura = await AsyncStorage.getItem("altura");
        const foto = await AsyncStorage.getItem("foto");
        setNome(nome);
        setPeso(peso);
        setAltura(altura);
        setFoto(foto);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    getDados();
  }, []);

   const confirmarRemoverDados = () => {
     Alert.alert(
       "Remover Dados",
       "Tem certeza que deseja remover todos os dados?",
       [
         {
           text: "Cancelar",
           style: "cancel",
         },
         { text: "Sim", onPress: removerDados },
       ]
     );
   };

   const removerDados = async () => {
     try {
       await AsyncStorage.removeItem("nome");
       await AsyncStorage.removeItem("peso");
       await AsyncStorage.removeItem("altura");
       navigation.navigate("Inicio");
     } catch (error) {
       alert("Erro ao remover os dados:", error);
     }
   };


  return (
    <View style={styles.container}>
      <View style={styles.dados}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Peso: {peso} kg</Text>
        <Text style={styles.texto}>Altura: {altura} cm</Text>
      </View>
      <TouchableOpacity onPress={confirmarRemoverDados}>
        <AntDesign name="delete" size={30}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#FDF0D5",
  },
  dados: {
    marginLeft: 10,
  },
  texto: {
    fontSize: 16,
    color: "#C1121F",
  },
});
