import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ScrollView
} from 'react-native';
import termsAndConditon from '../utils/terms_condition';

export default function TermsAndConditionModal({
  modalVisible,
  setModalVisible
}) {
  return (
    <Modal animationType='slide' transparent={false} visible={modalVisible}>
      <ScrollView>
        <Pressable onPress={() => setModalVisible(false)}>
          <View style={styles.cancelTermsAndConditionText}>
            <Text>X</Text>
          </View>
        </Pressable>
        <Text style={styles.termsAndConditonText}>{termsAndConditon}</Text>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  termsAndConditonText: {
    padding: 20
  },
  cancelTermsAndConditionText: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20
  }
});
