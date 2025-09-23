import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Button, Text, Title, Paragraph } from 'react-native-paper';

const PantallaInicio = () => {
  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Card style={{ marginBottom: 16 }}>
          <Card.Title title="Título 1" subtitle="Subtítulo 1" />
          <Card.Content>
            <Title>Título de la tarjeta</Title>
            <Paragraph>Contenido descriptivo de la tarjeta uno.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Acción 1</Button>
          </Card.Actions>
        </Card>

        <Card style={{ marginBottom: 16 }}>
          <Card.Title title="Título 2" subtitle="Subtítulo 2" />
          <Card.Content>
            <Title>Título de la tarjeta dos</Title>
            <Paragraph>Contenido descriptivo de la tarjeta dos.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Acción 2</Button>
          </Card.Actions>
        </Card>

        {/* Puedes duplicar más tarjetas según los elementos que quieras mostrar */}
      </View>
    </ScrollView>
  );
};

export default PantallaInicio;
