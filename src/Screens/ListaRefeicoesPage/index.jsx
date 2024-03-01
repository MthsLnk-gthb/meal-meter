import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CadastroRefeicao from './../CadastroRefeicoesPage/index';
import { useState } from 'react';

export default function TelaListaRefeicoes() {

  const [listaRefeicoes, setListaRefeicoes] = useState ([])

  return (
    <ScrollView>
      <Text>TelaListaRefeicoes</Text>
    </ScrollView>
  )
}