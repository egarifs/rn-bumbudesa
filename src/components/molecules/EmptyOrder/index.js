import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />

      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
