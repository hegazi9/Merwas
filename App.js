
import React, { Component } from 'react';
import RootNavigator from './Navigation/RootNavigator';
import SplashScreen from './Screens/SplashScreen';


export default class App extends Component {

  constructor(){
    super();
    this.state={
      isVisible : true,
   }
 
  }
  
  UNSAFE_componentWillMount(){
    var that = this;
    setTimeout(function(){
      that.setState({ 
        isVisible : false 
    })}, 3000);
  }

  render() {
    if (this.state.isVisible === true) {
      return  <SplashScreen/>
    }
    else  
    {
      return <RootNavigator /> 
      
    }     
   }

         
    }



    /*
    
    adb shell input keyevent 82
/*  adb -s <58KRX19109005789> reverse tcp:8081 tcp:8081
Resolve Error --->  $ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
$ cd (path to project/android folder) && gradlew clean && cd .. && react-native run-android
$ gradlew assembleDebug

cd (path to project/android folder)
gradlew bundleRelease -x bundleReleaseJsAndAssets
$ gradlew assembleRelease // playstore
npx react-native run-android --variant=release

keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android

*/
 
  
 
