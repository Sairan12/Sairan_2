import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        5 кітап жаңалығы
      </Text>

      <View style={styles.topBox}>
        <Text style={styles.bookTitle}>
          «Кадиш.com» Натан Ингландер
        </Text>

        <Text style={styles.publisher}>
          Издательство «Книжники»
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <Text style={styles.description}>
          Бұл бөлімде кітап туралы қысқаша ақпарат беріледі.
          Flex көмегімен блок экрандағы бос орынды автоматты түрде алады.
        </Text>
      </View>

      <Button
        title="Читать далее"
        onPress={() => Alert.alert('Толық ақпарат')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  topBox: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  bottomBox: {
    flex: 2,
    backgroundColor: '#aaaaaa',
    padding: 20,
    justifyContent: 'center',
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  publisher: {
    marginTop: 10,
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
    lineHeight: 22,
  },
});
