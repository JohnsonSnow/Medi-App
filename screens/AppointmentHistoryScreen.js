import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AppointmentHistoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.main}>
          {/* card 1 */}
          <View style={styles.card}>
            <Text style={styles.text}>Your Appt. Details</Text>
            <Text style={styles.text}>Appt. Date: 31/12/2099</Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Status: Completed
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Consult Fees
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
          {/* card 2 */}
          <View style={styles.card}>
            <Text style={styles.text}>Your Appt. Details</Text>
            <Text style={styles.text}>Appt. Date: 31/12/2099</Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Status: Completed
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Consult Fees
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
          {/* card 3 */}
          <View style={styles.card}>
            <Text style={styles.text}>Your Appt. Details</Text>
            <Text style={styles.text}>Appt. Date: 31/12/2099</Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              Status: Completed
            </Text>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Consult Fees
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Administrative Charges
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={{ ...styles.text, fontWeight: '600' }}>
                Service Charge
              </Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
            <View style={styles.textDetails}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.subtext}>$13</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#687089'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20
  },
  main: {
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
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
