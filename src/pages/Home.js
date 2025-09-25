import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Animated } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons"; // Asegúrate de tener expo/vector-icons

export default function App() {
  const [tab, setTab] = useState("home");
  const [visitas, setVisitas] = useState(0);

  // Animación de escala para el icono activo
  const scaleIcon = (isActive) => (isActive ? 1.3 : 1);

  const renderScreen = () => {
    switch (tab) {
      case "home":
        return (
          <ScrollView contentContainerStyle={styles.homeContainer}>
            {/* Card de visitas */}
            <View style={styles.cardVisitas}>
              <Text style={styles.cardTitle}>Visitas a la cafetería</Text>
              <Text style={styles.counter}>{visitas}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setVisitas(visitas + 1)}
              >
                <Text style={styles.buttonText}>Agregar visita</Text>
              </TouchableOpacity>
            </View>

            {/* Cards del Home con imágenes y botón */}
            <View style={styles.card}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Café Americano</Text>
              <Text style={styles.cardDesc}>Un clásico fuerte y aromático</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1603078646454-5c1ed5ef1460" }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Matcha Latte</Text>
              <Text style={styles.cardDesc}>Suave y con un toque de té verde</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.card}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1551022379-3e4821dd3e1f" }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Croissant</Text>
              <Text style={styles.cardDesc}>Perfecto para acompañar tu café</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );

      case "usuarios":
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Lista de Usuarios (desde BD)</Text>
          </View>
        );

      case "registro":
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Formulario de Registro</Text>
          </View>
        );

      case "lista":
        return (
          <View style={styles.center}>
            <Text style={styles.title}>Lista de Productos</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>

      {/* Barra de navegación inferior con íconos y efecto de escala */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setTab("home")} style={styles.navItem}>
          <Animated.View style={{ transform: [{ scale: scaleIcon(tab === "home") }] }}>
            <Ionicons name="home" size={28} color={tab === "home" ? "#fff" : "#4b2e2e"} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTab("usuarios")} style={styles.navItem}>
          <Animated.View style={{ transform: [{ scale: scaleIcon(tab === "usuarios") }] }}>
            <Ionicons name="people" size={28} color={tab === "usuarios" ? "#fff" : "#4b2e2e"} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTab("registro")} style={styles.navItem}>
          <Animated.View style={{ transform: [{ scale: scaleIcon(tab === "registro") }] }}>
            <MaterialCommunityIcons name="form-textbox" size={28} color={tab === "registro" ? "#fff" : "#4b2e2e"} />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTab("lista")} style={styles.navItem}>
          <Animated.View style={{ transform: [{ scale: scaleIcon(tab === "lista") }] }}>
            <FontAwesome5 name="list" size={28} color={tab === "lista" ? "#fff" : "#4b2e2e"} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f3f0" },
  content: { flex: 1 },
  homeContainer: { padding: 20 },
  cardVisitas: {
    backgroundColor: "#d9b99b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardImage: { width: "100%", height: 180 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#4b2e2e", marginTop: 10, paddingHorizontal: 10 },
  cardDesc: { fontSize: 14, color: "#5a3e36", marginVertical: 10, paddingHorizontal: 10 },
  cardButton: {
    backgroundColor: "#4b2e2e",
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  cardButtonText: { color: "#fff", fontWeight: "bold" },
  counter: { fontSize: 40, fontWeight: "bold", color: "#4b2e2e", marginVertical: 10 },
  button: {
    backgroundColor: "#4b2e2e",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#d9b99b",
    paddingVertical: 16, // Más alto
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: { alignItems: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", color: "#4b2e2e" },
});
