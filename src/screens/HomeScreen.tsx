import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import CustomIcon from '../components/CustomIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DurbarScreen';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const foodData = [
    { id: '1', name: 'Biryani', image: require('../assets/app_images/briyani.png') },
    { id: '2', name: 'Cake', image: require('../assets/app_images/cake.png') },
    { id: '3', name: 'Pizza', image: require('../assets/app_images/pizza.png') },
    { id: '4', name: 'Veg Meals', image: require('../assets/app_images/vegmeals.png') },
    { id: '5', name: 'Non Veg Meals', image: require('../assets/app_images/nonvegmeals.png') },
    { id: '6', name: 'Cookies', image: require('../assets/app_images/cookies.png') },
    { id: '7', name: 'Chicken Gravy', image: require('../assets/app_images/chicken.png') },
    { id: '8', name: 'Dosa', image: require('../assets/app_images/dosa.png') }
  ];

  const navigateToDetails = (foodItem) => {
    navigation.navigate('CakeBee', { foodItem });
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => (
            <View>
              <Image source={require('../assets/app_images/homeScreen.png')} style={styles.image} />
              <Text style={styles.heading}>Find the best Food for you</Text>

              <View style={styles.dashContainer}>
                <Text style={styles.dash}>—</Text>
                <Text style={styles.whatsOnYourMind}>What's on your mind?</Text>
                <Text style={styles.dash}>—</Text>
              </View>

              <FlatList
                data={foodData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigateToDetails(item)}>
                    <View style={styles.foodItem}>
                      <Image source={item.image} style={styles.foodImage} />
                      <Text style={styles.foodText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                horizontal
              />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>

      <View style={styles.searchInputContainer}>
        <CustomIcon name="search" size={20} />
        <TextInput
          placeholder="Find your food..."
          placeholderTextColor="white"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontSize: FONTSIZE.size_24,
    marginLeft: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderColor: COLORS.secondaryLightGreyHex,
    borderRadius: 50,
    paddingHorizontal: 16,
    marginTop: 40,
    margin: 20,
    position: 'absolute',
    backgroundColor: 'grey',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '65%',
    marginBottom: 20,
  },
  dashContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dash: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.secondaryLightGreyHex,
    marginHorizontal: 10,
  },
  whatsOnYourMind: {
    fontFamily: FONTFAMILY.poppins_thin,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryDarkGreyHex,
    marginHorizontal: 10,
  },
  foodItem: {
    marginRight: 20,
  },
  foodImage: {
    height: 80,
    width: 105,
    marginLeft: 20,
  },
  foodText: {
    textAlign: 'center',
    marginTop: 5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
});

export default HomeScreen;
