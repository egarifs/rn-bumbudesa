import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginLeft: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      borderColor: '#F2F2F2',
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={4}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="20.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={4}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="20.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={4}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="20.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={4}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="20.000"
          name="Sop Bumil"
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={2}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="20.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={2}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="20.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="cancel"
        />
        <ItemListFood
          rating={2}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="20.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="cancel"
        />
        <ItemListFood
          rating={2}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="20.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="cancel"
        />
      </View>
    </ScrollView>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
