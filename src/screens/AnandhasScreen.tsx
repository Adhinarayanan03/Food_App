import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTFAMILY} from '../theme/theme';
import {FONTSIZE} from '../theme/theme';
import {FlatList} from 'react-native';


const AnandhasScreen = () => {
  const foodData = [
    {
      id: '1',
      name: 'Plain Dosa',
      description:'great',
      image: require('../assets/anandhas_images/dosa.png'),
    },
    {
      id: '2',
      name: 'Chapathi',
      description:'great',
      image: require('../assets/anandhas_images/chapathi.png'),
    },
    {
      id: '3',
      name: 'Idly',
      description:'great',
      image: require('../assets/anandhas_images/idly.png'),
    },
    {
      id: '4',
      name: 'Poori',
      description:'great',
      image: require('../assets/anandhas_images/poori.png'),
    },
    {
      id: '5',
      name: 'Pongal',
      description:'great',
      image: require('../assets/anandhas_images/pongal.png'),
    },
    // { id: '6', name: 'Cookies', image: require('../assets/app_images/cookies.png') },
    // { id: '7', name: 'Chicken Gravy', image: require('../assets/app_images/chicken.png') },
    // { id: '8', name: 'Dosa', image: require('../assets/app_images/dosa.png') }
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Anandhas</Text>
      <View style={styles.container}>
        <FlatList
          data={foodData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
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
};

export default AnandhasScreen;

const styles = StyleSheet.create({
  container:{
flex:1
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
    // textAlign: 'center',
    // alignItems:'center',
    // justifyContent:'center',
    top: 15,
    marginLeft:10,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
  foodDescription: {
    top: 15,
    marginLeft:10,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_14,
    color: 'gray',
    // borderWidth:1

  },
});
