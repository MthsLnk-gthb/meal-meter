import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import TelaListaRefeicoes from '../ListaRefeicoesPage';
import CadastroRefeicao from '../../components/CadastroRefeicoesPage';

export default function HomePage({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>HomePage</Text>

      <View>
        <TelaListaRefeicoes/>
        <CadastroRefeicao/>
      </View>
    </View>
  );
}