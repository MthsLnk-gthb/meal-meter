import { View, Text } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import TelaListaRefeicoes from "../ListaRefeicoesPage";
import CadastroRefeicao from "../../components/CadastroRefeicoesPage";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomePage({ navigation }) {

  const [listaRefeicoes, setListaRefeicoes] = useState([]);

    const onSalvarRefeicao = (novaRefeicao) => {
      setListaRefeicoes([...listaRefeicoes, novaRefeicao]);
    };

  return (
    <View>
      <Header navigation={navigation} />
      <Text>HomePage</Text>


      <View>
        <CadastroRefeicao onSalvarRefeicao={onSalvarRefeicao}/>
        <TelaListaRefeicoes refeicoes={listaRefeicoes} />
      </View>
    </View>
  );
}
