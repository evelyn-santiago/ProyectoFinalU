import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';


export default function Registro({ navigation }) { // <-- recibimos navigation
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    if (nombre && email && password) {
      Alert.alert('Registro', `Usuario ${nombre} creado con éxito!`);
      navigation.navigate('Home'); // <-- aquí navegamos a Home
    } else {
      Alert.alert('Error', 'Por favor completa todos los campos.');
    }
  };

  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
        <Text style={styles.textoBoton}>Crear Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===== ESTILOS =====
const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#e0f7ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077b6',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#caf0f8',
    padding: 12,
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 16,
    color: '#023e8a',
  },
  boton: {
    backgroundColor: '#90e0ef',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  textoBoton: {
    color: '#023e8a',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
