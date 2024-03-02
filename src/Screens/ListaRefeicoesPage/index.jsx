import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import CadastroRefeicao from "../../components/CadastroRefeicoesPage";

export default function TelaListaRefeicoes({ refeicoes }) {
  return (
    <View>
      <Text>Lista de Refeições:</Text>
      <FlatList
        data={refeicoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.calorias}</Text>
            <Text>{item.proteinas}</Text>
            <Text>{item.carboidratos}</Text>
            <Text>{item.gorduras}</Text>
          </View>
        )}
      />
    </View>
  );
}
