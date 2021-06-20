import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BtnAdd, BtnMin} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BtnMin />
      </TouchableOpacity>
      <Text style={styles.value}>25</Text>
      <TouchableOpacity>
        <BtnAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
    color: '#020202',
  },
});
