import React  from 'react' ;
import { createAppContainer } from 'react-navigation' ;
import { createBottomTabNavigator } from 'react-navigation-tabs' ;
import { createDrawerNavigator } from 'react-navigation-drawer' ;
import { createStackNavigator  } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen' ;
import CartScreen from '../Screens/CartScreen' ;
import ProductScreen from '../Screens/ProductScreen' ;
import Menu from './Menu' ;
import { View , Dimensions } from 'react-native' ;


const Navigator = createStackNavigator({
    
    HomeScreen : {
        screen : HomeScreen
    },
    ProductScreen : {
        screen : ProductScreen
    },
    CartScreen : {
        screen : CartScreen
    }
},{
   // initialRouteName : 'HomeScreen'
  
});

const MainVavigator  = createDrawerNavigator({
   
    
    Background : {
        screen : Navigator  ,  
        
        navigationOptions : {
            drawerLabel : 'Main Menu'  ,  drawerIcon :  <View>
              
                </View>
    }}  , 
   
    
} , {
    contentComponent:  Menu    ,
    backBehavior : "initialRoute" , drawerType : "slide"  , drawerPosition : 'left'  ,
    drawerWidth: Dimensions.get('window').width - 130, statusBarAnimation : "slide" , 
});

export default createAppContainer(  MainVavigator );

