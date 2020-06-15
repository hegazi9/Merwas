
import React  , { Component} from 'react';
import { StyleSheet,View,Text, Image , TouchableOpacity, ImageBackground} from 'react-native';
import { Icon , Tab, Tabs ,TabHeading,  Picker  } from 'native-base';
import Orientation from 'react-native-orientation-locker';
import Colors from '../constant/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation-drawer' ;


class HomeScreen extends Component 
{
  constructor(props) 
  {
    super(props);
    console.disableYellowBox = true;
    Orientation.lockToPortrait();
  
  }

  static navigationOptions = navigationData =>
  {
      return {
      headerTitle :  '' ,  headerStyle: {backgroundColor: Colors.white , height : hp('6%')},

       headerRight : 
      <View style = {{ flexDirection : "row" , top : 0 , right : 0 , margin : hp('1%') }}>
      <Icon name="cart" type = "Zocial" style={{color: Colors.grey , margin : 10 , fontSize : 25 }}  
      />
        <Icon name="search" type = "Fontisto" style={{color: Colors.primaryColor , marginTop : hp('2%'),
               margin : 10 , fontSize : 20 }}  
      />
       
        </View>
        ,

      headerLeft : 
      <View style = {{ flexDirection : "row" , top : 0 , left : 0 }}>
      <Icon name="menu" type = "Entypo" style={{color: Colors.orange , margin : 10 , fontSize : 25 }}  
       onPress = {() => 
        {
          navigationData.navigation.dispatch(DrawerActions.openDrawer());
        }}/>
      
      <Picker
               mode="dropdown"
               iosHeader="Select your City"
               iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
               style={{ width: wp('30%') }}
             
            >
              <Picker.Item  label="Dubai" value="key0"  />
              <Picker.Item label="Cairo" value="key1" />
              <Picker.Item label="Alex" value="key2" />
            </Picker>
        </View>
        }
  
      }

  render()
  
    {
      return (
        <View style= {styles.screen}>
                                      { /* Tap Menu */ }
          <Tabs tabBarPosition = "top" tabContainerStyle = { { height : hp('7%') } }
                   tabBarUnderlineStyle = {{backgroundColor : Colors.primaryColor , height : 2}}
                   
                   >
                        
                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : Colors.white}}> 
                       <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : hp('1.5%') }}>FEATURED</Text>
                        </View>
                       
                        </TabHeading>}>
                          { /** Main View  */}
                        <View style = {{ flexDirection : 'column' }}>
                          <ScrollView>
                          <Image source = {require('../Images/imgone.jpg')}
                          style = {{ height : hp('25%') , width : wp('100%')}}/>
                        <Text style ={{ margin : hp('1%') , fontSize : hp('2.4%')}}>Buy One Get One Voucher at Roxy Cinemas</Text>
                        <Text style ={{ margin : hp('1%') , fontSize : hp('2%') , color : Colors.hideColor}}>
                          Valid at 4 locations in Dubai </Text>
                          <TouchableOpacity style = {{  borderColor : Colors.hideColor , 
                          width : wp('40%') , }}>
                          <Text style = {{  marginLeft : hp('1%') , borderWidth : .5  , borderRadius : 5 , 
                          borderColor : Colors.hideColor, color : Colors.orange ,fontSize : hp('2%') ,
                            }}>   Multiple Locations</Text>
                            </TouchableOpacity>

                            { /** Blue View  */}
                            <View style= {{ flexDirection : 'row',backgroundColor : Colors.primaryColor , width : wp('100%') , 
                            marginTop : hp('1%') , height : hp('10%') , borderRadius : 2 }}>
                              <View style = {{flexDirection : 'row' , margin : hp('1%')}}>
                              <Text style={{ color : Colors.white , marginTop : hp('2.5%')}}>AED</Text>
                              <Text style={{ color : Colors.white  , marginLeft : hp('1%') ,
                              fontSize : hp('5%')}}>6</Text>
                              </View>
                              <TouchableOpacity style = {{ width : wp('30%') , marginLeft : hp('23%') ,
                              marginTop : hp('2%')}}
                              onPress = {() => 
                                {
                                  this.props.navigation.navigate('ProductScreen');
                                }}>
                          <Text style = {{  marginLeft : hp('1%') , borderWidth : .5  , borderRadius : 20 , 
                         backgroundColor : Colors.white , borderColor : Colors.white  ,fontSize : hp('2%') , padding : hp('1%')
                            }}>  VIEW DEAL</Text>
                            </TouchableOpacity>
                            </View>

                            { /** Last View  */}
                            <View style = {{ flexDirection : 'column' , marginTop : hp('1%') }}>
                          <ImageBackground source = {require('../Images/imgtwo.jpg')}
                          style = {{ height : hp('25%') , width : wp('100%')}}>
                            <View style = {{backgroundColor : Colors.orange , width : wp('40%') , padding : hp('1%') ,
                            marginTop : hp('18%') , height : hp('5%') , borderRadius : 2 , 
                            borderTopRightRadius : hp('1%') , borderBottomRightRadius : hp('5%')}}>
                              <Text style = {{ color : Colors.white}}> EXCLUSIVE OFFER</Text>
                            </View>
                          </ImageBackground>
                        <Text style ={{ margin : hp('1%') , fontSize : hp('2.4%')}}>
                          Buy 1 Get 1 Main Course at Applebee's</Text>
                        <Text style ={{ margin : hp('1%') , fontSize : hp('2%') , color : Colors.hideColor}}>
                          Valid at 5 locations across the UAE! </Text>
                          <TouchableOpacity style = {{  borderColor : Colors.hideColor , 
                          width : wp('40%') , }}>
                          <Text style = {{  marginLeft : hp('1%') , borderWidth : .5  , borderRadius : 5 , 
                          borderColor : Colors.hideColor, color : Colors.orange ,fontSize : hp('2%') ,
                            }}>   Multiple Locations</Text>
                            </TouchableOpacity>
                            </View>




                            </ScrollView>
                        </View> 
                           </Tab>

                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : Colors.white }}> 
                       <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : hp('1.5%')}}>NEW IN</Text>
                        </View>
                        
                        </TabHeading>}>
               
                        </Tab>


                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : Colors.white}}> 
                     <View style={{flexDirection : 'column'}}> 
                     <Text style = {{color : '#050505' , fontSize : hp('1.5%') }}>BEST SELLERS</Text>
                    </View>
                        </TabHeading>}>
                    
                        </Tab>

                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : Colors.white }}> 
                 <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : hp('1.5%')}}>FOOD</Text>
                      </View>
                        </TabHeading>}>
                        <View style = {styles.view}>
                      
                        </View> 
                        </Tab>

                         </Tabs>
                        </View>
      );

      }
     
  }

  
const styles = StyleSheet.create({
 screen :
 {
   flex : 1 , justifyContent : 'center' , alignItems : "center" , backgroundColor : Colors.white
 } 

});

export default  HomeScreen ;
