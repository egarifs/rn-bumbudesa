import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcStartOn} from '../../../assets';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Chery Healty</Text>
        <View style={styles.rattingContainer}>
          <View style={styles.startContainer}>
            <IcStartOn />
            <IcStartOn />
            <IcStartOn />
            <IcStartOn />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {padding: 12},
  rattingContainer: {flexDirection: 'row'},
  startContainer: {
    flexDirection: 'row',
  },
});