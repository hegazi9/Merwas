

import React  , { Component} from 'react';
import { StyleSheet,View,Text, ImageBackground  } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Colors from '../constant/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


 class SplashScreen extends Component 
{
  constructor(props) {
    super(props);
   
    console.disableYellowBox = true;
    Orientation.lockToPortrait();
  
  }

  

  render()
  
    {
      return (
        
        <View style = {styles.container}>
          <Text style = {{ color : Colors.white , fontSize : hp('5%')}}> MERWAS - TASK</Text>
       
          </View>
      );

    }
     
 
  }


export default SplashScreen ;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});