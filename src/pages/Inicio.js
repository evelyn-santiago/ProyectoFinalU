import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Inicio({ navigation }) {
  const [modo, setModo] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: modo ? "#4b2e2e" : "#f8f3f0" }]}>
      
      {/* Botón ON/OFF */}
      <TouchableOpacity
        style={[styles.switchButton, { backgroundColor: modo ? "#fff" : "#4b2e2e" }]}
        onPress={() => setModo(!modo)}
      >
        <Text style={[styles.switchText, { color: modo ? "#4b2e2e" : "#fff" }]}>
          {modo ? "Modo Oscuro" : "Modo Claro"}
        </Text>
      </TouchableOpacity>

      {/* Imagen */}
      <Image
        source={{ uri: "https://i.ibb.co/mcMdxst/cafe-banner.jpg" }}
        style={styles.image}
      />

      {/* Títulos */}
      <Text style={[styles.titulo, { color: modo ? "#fff" : "#4b2e2e" }]}>
        Bienvenido a la Cafetería
      </Text>
      <Text style={[styles.subtitulo, { color: modo ? "#e6d5c3" : "#5a3e36" }]}>
        Explora y disfruta nuestros sabores
      </Text>

      {/* Botón para ir a Home */}
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate("Home")} // Aquí va directo a Home
      >
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  switchButton: { position: "absolute", top: 40, right: 20, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20 },
  switchText: { fontSize: 14, fontWeight: "600" },
  image: { width: "100%", height: 200, borderRadius: 20, marginBottom: 30 },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitulo: { fontSize: 16, textAlign: "center", marginBottom: 40 },
  boton: { backgroundColor: "#4b2e2e", paddingVertical: 14, paddingHorizontal: 40, borderRadius: 25, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5, elevation: 4 },
  textoBoton: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
