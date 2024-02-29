import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroRefeicao from "./../Screens/CadastroRefeicoesPage/index";
import TelaListaRefeicoes from "./../Screens/ListaRefeicoesPage/index";
import SomaNutricional from "./../Screens/SomaNutricionalPage/index";
import HomePage from "../Screens/HomePage";
import Inicio from "../Screens/Inicio";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CadastroRefeicao"
          component={CadastroRefeicao}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExibicaoRefeicoes"
          component={TelaListaRefeicoes}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SomaNutricional"
          component={SomaNutricional}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
