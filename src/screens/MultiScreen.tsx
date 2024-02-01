import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { FONTFAMILY } from '../theme/theme';
import { FONTSIZE } from '../theme/theme';

const MultiScreen = () => {
  const screens = ['Durbar', 'Anandhas', 'CakeBee'];

  const foodData = {
    Durbar: [
      { id: '1', name: 'Chicken Curry', description: 'Great', image: require('../assets/durbar_images/chickencurry.png') },
      { id: '2', name: 'Fish Curry', description: 'Great', image: require('../assets/durbar_images/fishcurry.png') },
      { id: '3', name: 'Mutton Curry', description: 'Great', image: require('../assets/durbar_images/muttoncurry.png') },
      { id: '4', name: 'Biryani', description: 'Great', image: require('../assets/durbar_images/biryani.png') },
      { id: '5', name: 'Non Veg Meals', description: 'Great', image: require('../assets/durbar_images/muttoncurry.png') },
    ],
    Anandhas: [
      { id: '1', name: 'Plain Dosa', description: 'Great', image: require('../assets/anandhas_images/dosa.png') },
      { id: '2', name: 'Chapathi', description: 'Great', image: require('../assets/anandhas_images/chapathi.png') },
      { id: '3', name: 'Idly', description: 'Great', image: require('../assets/anandhas_images/idly.png') },
      { id: '4', name: 'Poori', description: 'Great', image: require('../assets/anandhas_images/poori.png') },
      { id: '5', name: 'Pongal', description: 'Great', image: require('../assets/anandhas_images/pongal.png') },
    ],
    CakeBee: [
      { id: '1', name: 'Black Forest Cake ', description: 'Great', image: require('../assets/cakebee_images/blackforest.png') },
      { id: '2', name: 'Choclate Cake', description: 'Great', image: require('../assets/cakebee_images/choclate.png') },
      { id: '3', name: 'Strawberry Cake', description: 'Great', image: require('../assets/cakebee_images/strawberry.png') },
      { id: '4', name: 'Choco Truffel Cake', description: 'Great', image: require('../assets/cakebee_images/truffel.png') },
      { id: '5', name: 'Vanilla Cake', description: 'Great', image: require('../assets/cakebee_images/vanilla.png') },
    ],
  };

  const renderScreen = (screenName) => (
    <View style={styles.container} key={screenName}>
      <Text style={styles.heading}>{screenName}</Text>
      <View style={styles.container}>
        <FlatList
          data={foodData[screenName]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.foodContainer}>
              <View>
                <Text style={styles.foodText}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
              </View>
              <Image source={item.image} style={styles.foodImage} />
            </View>
          )}
        />
      </View>
    </View>
  );

  return <View>{screens.map(renderScreen)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontSize: FONTSIZE.size_24,
    marginLeft: 20,
    marginTop: 40,
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginTop: 20,
    margin: 10,
  },
  foodImage: {
    height: 130,
    width: 140,
    right: 20,
    borderRadius: 10,
  },
  foodText: {
    top: 15,
    marginLeft: 10,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
  foodDescription: {
    top: 15,
    marginLeft: 10,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_14,
    color: 'gray',
  },
});

export default MultiScreen;
