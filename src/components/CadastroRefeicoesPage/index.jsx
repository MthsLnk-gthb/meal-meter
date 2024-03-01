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
import  AntDesign  from "react-native-vector-icons/AntDesign";

export default function CadastroRefeicao({ onSalvarRefeicao }) {
  const [nomeRefeicao, setNomeRefeicao] = useState("");
  const [caloriasRefeicao, setCaloriasRefeicao] = useState("");
  const [proteinasRefeicao, setProteinasRefeicao] = useState("");
  const [carboidratosRefeicao, setCarboidratosRefeicao] = useState("");
  const [gordurasRefeicao, setGordurasRefeicao] = useState("");

  const [showFormulario, setShowFormulario] = useState(false);

  const handleSalvarRefeicao = async () => {
    if (
      !nomeRefeicao ||
      !caloriasRefeicao ||
      !proteinasRefeicao ||
      !carboidratosRefeicao ||
      !gordurasRefeicao
    ) {
      Alert.alert("Todos os campos devem ser preenchidos");
      return;
    }

    setNomeRefeicao("");
    setCaloriasRefeicao("");
    setProteinasRefeicao("");
    setCarboidratosRefeicao("");
    setGordurasRefeicao("");
  };

  return (
    <View style={styles.container}>
      <Text>CadastroRefeicao</Text>

      <View style={styles.camposInput}>
        <TouchableOpacity onPress={() => setShowFormulario(!showFormulario)}>
          <View style={styles.addItemShowInput}>
            <Text style={styles.labelAddItem}>Adicionar item</Text>
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

          <Button title="Salvar Refeição" onPress={handleSalvarRefeicao} />
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
});
