import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PaymentCompleteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={require('../assets/default.png')}
              style={styles.defaultImage}
            />
          </View>
          <View style={styles.cardBottom}>
            <Image
              source={require('../assets/complete.png')}
              style={styles.iconImage}
            />
            <Text style={styles.text}>
              Your consultant has been notified with your code [#RefCode]
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5a9b9'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    marginBottom: 20
  },
  cardHeader: {
    backgroundColor: '#68708a',
    padding: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center'
  },
  cardBottom: {
    alignItems: 'center',
    paddingVertical: 50
  },
  main: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  iconImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#687089',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  subtext: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    color: '#687089',
    paddingHorizontal: 10
  },
  textDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginTop: 10
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  button: {
    backgroundColor: '#687089',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
