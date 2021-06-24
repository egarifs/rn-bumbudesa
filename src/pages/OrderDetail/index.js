import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = () => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="Your deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Order</Text>
        <ItemListFood
          type="order-summary"
          name="sop bumil"
          price="5000"
          items={14}
          image={FoodDummy1}
          items={24}
        />
        <Text style={styles.label}>Detail transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Firdaus" />
        <ItemValue label="Phone No." value="08122779115" />
        <ItemValue label="Address" value="Jl Pahlawan" />
        <ItemValue label="House No." value="AB 24" />
        <ItemValue label="City" value="Bandung" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status</Text>
        <ItemValue label="#FM10154" value="paid" />
      </View>
      <View style={styles.button}>
        <Button
          text="cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
});
