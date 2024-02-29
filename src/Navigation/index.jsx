import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaLogin from "../Screens/LoginPage";
import TelaCadastroUsuario from './../Screens/CadastroUsuarioPage/index';
import CadastroRefeicao from './../Screens/CadastroRefeicoesPage/index';
import TelaListaRefeicoes from './../Screens/ListaRefeicoesPage/index';
import SomaNutricional from './../Screens/SomaNutricionalPage/index';
import HomePage from "../Screens/HomePage";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="CadastroUsuario" component={TelaCadastroUsuario} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CadastroRefeicao" component={CadastroRefeicao} />
        <Stack.Screen name="ExibicaoRefeicoes" component={TelaListaRefeicoes} />
        <Stack.Screen name="SomaNutricional" component={SomaNutricional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
