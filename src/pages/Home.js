// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Card 1 - Café Latte */}
      <Card style={styles.card} onPress={() => navigation.navigate('Detalle', { producto: 'Café Latte' })}>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' }} />
        <Card.Content>
          <Title>Café Latte</Title>
          <Paragraph>Cremoso y delicioso</Paragraph>
        </Card.Content>
      </Card>

      {/* Card 2 - Capuccino */}
      <Card style={styles.card} onPress={() => navigation.navigate('Detalle', { producto: 'Capuccino' })}>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1541167760496-1628856ab772' }} />
        <Card.Content>
          <Title>Capuccino</Title>
          <Paragraph>Con espuma de leche</Paragraph>
        </Card.Content>
      </Card>

      {/* Card 3 - Cold Brew */}
      <Card style={styles.card} onPress={() => navigation.navigate('Detalle', { producto: 'Cold Brew' })}>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' }} />
        <Card.Content>
          <Title>Cold Brew</Title>
          <Paragraph>Refrescante café frío</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

function Detalle({ route }) {
  const { producto } = route.params;
  return (
    <View style={styles.detalle}>
      <Title style={styles.detalleTexto}>Has seleccionado: {producto}</Title>
      <Paragraph>¡Disfruta tu {producto} en nuestra cafetería!</Paragraph>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Cafetería" }} />
        <Stack.Screen name="Detalle" component={Detalle} options={{ title: "Detalle del Producto" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  detalle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  detalleTexto: {
    fontSize: 22,
    marginBottom: 10,
  },
});
