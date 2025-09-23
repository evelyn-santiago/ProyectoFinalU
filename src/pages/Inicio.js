import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a Mi App</Text>
      <Text style={styles.subtitulo}>Explora y disfruta nuestra plataforma</Text>
      <View style={styles.menuInferior}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBoton}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boton, styles.botonRegistro]}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.textoBoton}>Registrarte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Login() {
  return (
    <View style={styles.pantalla}>
      <Text>Pantalla de Login</Text>
    </View>
  );
}

function Registro() {
  return (
    <View style={styles.pantalla}>
      <Text>Pantalla de Registro</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0077b6',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#023e8a',
    marginBottom: 50,
    textAlign: 'center',
  },
  menuInferior: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  boton: {
    backgroundColor: '#90e0ef',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  botonRegistro: {
    backgroundColor: '#caf0f8',
  },
  textoBoton: {
    color: '#023e8a',
    fontSize: 16,
    fontWeight: '600',
  },
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
