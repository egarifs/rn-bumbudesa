import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStartOff, IcStartOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.rattingContainer}>
      <View style={styles.startContainer}>
        <IcStartOn />
        <IcStartOn />
        <IcStartOn />
        <IcStartOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rattingContainer: {flexDirection: 'row'},
  startContainer: {
    flexDirection: 'row',
  },
});
