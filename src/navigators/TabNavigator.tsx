import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistory from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcons'
import { COLORS } from '../theme/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
<Tab.Navigator  screenOptions={{ tabBarHideOnKeyboard:true,
    tabBarShowLabel:false,   
    headerShown:false,
    tabBarStyle:styles.tabBarStyle}}>
<Tab.Screen name='Home' component={HomeScreen}
options={{
    tabBarIcon:({focused,color,size})=>(
        <CustomIcon
        name ='home'
        size={25}
        color={focused? COLORS.primaryOrangeHex : Colors.primaryLightGreyHex}
        />    )
}}
></Tab.Screen>

<Tab.Screen name='Cart' component={CartScreen}
options={{
    tabBarIcon:({focused,color,size})=>(
        <CustomIcon
        name ='cart'
        size={25}
        color={focused? COLORS.primaryOrangeHex : Colors.primaryLightGreyHex}
        />    )
}}
></Tab.Screen>

<Tab.Screen name='Favorite' component={FavoriteScreen}
options={{
    tabBarIcon:({focused,color,size})=>(
        <CustomIcon
        name ='like'
        size={25}
        color={focused? COLORS.primaryOrangeHex : Colors.primaryLightGreyHex}
        />    )
}}></Tab.Screen>

<Tab.Screen name='History' component={OrderHistory}
options={{
    tabBarIcon:({focused,color,size})=>(
        <CustomIcon
        name ='account'
        size={25}
        color={focused? COLORS.primaryOrangeHex : Colors.primaryLightGreyHex}
        />    )
}}></Tab.Screen>


</Tab.Navigator>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
tabBarStyle:{
    height:60,
    position:'absolute',
    // backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth:0,
    elevation:0,
    borderTopColor:'transparent',
}


})