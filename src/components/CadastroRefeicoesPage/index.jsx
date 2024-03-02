import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function CadastroRefeicao({ onSalvarRefeicao }) {

  const [nomeRefeicao, setNomeRefeicao] = useState("");
  const [caloriasRefeicao, setCaloriasRefeicao] = useState("");
  const [proteinasRefeicao, setProteinasRefeicao] = useState("");
  const [carboidratosRefeicao, setCarboidratosRefeicao] = useState("");
  const [gordurasRefeicao, setGordurasRefeicao] = useState("");

  const [showFormulario, setShowFormulario] = useState(false);

  const handleSalvarRefeicao = () => {
    if (
      !nomeRefeicao
      // !caloriasRefeicao ||
      // !proteinasRefeicao ||
      // !carboidratosRefeicao ||
      // !gordurasRefeicao
    ) {
      Alert.alert("Todos os campos devem ser preenchidos");
      return;
    }

        const novaRefeicao = {
          nome: nomeRefeicao,
          calorias: caloriasRefeicao,
          proteinas: proteinasRefeicao,
          carboidratos: carboidratosRefeicao,
          gorduras: gordurasRefeicao,
        };

    onSalvarRefeicao(novaRefeicao);

    setNomeRefeicao("");
    setCaloriasRefeicao("");
    setProteinasRefeicao("");
    setCarboidratosRefeicao("");
    setGordurasRefeicao("");
  };

  return (
    <View style={styles.container}>

      <View style={styles.camposInput}>
        <TouchableOpacity onPress={() => setShowFormulario(!showFormulario)}>
          <View style={styles.addItemShowInput}>
            <Text style={styles.labelAddItem}>Adicionar Refeição</Text>
            <AntDesign
              name={showFormulario ? "upcircleo" : "downcircleo"}
              size={22}
              color="#000"
            />
          </View>
        </TouchableOpacity>
      </View>

      {showFormulario && (
        <>
          <TextInput
            style={styles.input}
            value={nomeRefeicao}
            placeholder="Nome Refeição"
            onChangeText={(text) => setNomeRefeicao(text)}
          />
          <TextInput
            style={styles.input}
            value={caloriasRefeicao}
            placeholder="Calorias"
            onChangeText={(text) => setCaloriasRefeicao(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={proteinasRefeicao}
            placeholder="Proteínas"
            onChangeText={(text) => setProteinasRefeicao(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={carboidratosRefeicao}
            placeholder="Carboidratos"
            onChangeText={(text) => setCarboidratosRefeicao(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={gordurasRefeicao}
            placeholder="Gorduras"
            onChangeText={(text) => setGordurasRefeicao(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.btnAddRefecicao}
            onPress={handleSalvarRefeicao}
          >
            <Text style={styles.conteudoBtn}> Salvar Refeição </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    margin: 20,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  btnAddRefecicao: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#780000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  conteudoBtn:{
    fontSize: 18,
    color: "#fff"
  }
});
