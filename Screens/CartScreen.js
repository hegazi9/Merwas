
import React  , { Component} from 'react';
import { StyleSheet,View,Text, FlatList , TouchableOpacity , Image} from 'react-native';
import { Icon  , Picker} from 'native-base';
import Orientation from 'react-native-orientation-locker';
import Colors from '../constant/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

class CartScreen extends Component 
{
  constructor(props) {
    super(props);
    
    console.disableYellowBox = true;
    Orientation.lockToPortrait();
  
  }

  static navigationOptions = navigationData =>
  {
      return {
      headerTitle :  'SHOPPING CART' ,  headerStyle: { backgroundColor: Colors.white , height : hp('6%')},

      headerLeft : 
      <View style = {{ flexDirection : "row" , top : 0 , left : 0 }}>
      <Icon name="arrowleft" type = "AntDesign" style={{color: Colors.orange , margin : 10 , fontSize : 25 }}  
       onPress = {() => 
        {
          navigationData.navigation.navigate('ProductScreen');
        }}/>
      
        </View>
        
        }
  
      }
  render()
  
    {
      return (
        <View>
         {/** Main View */}
         <ScrollView>
         <View style = {{ flexDirection : 'row' , margin : hp('.5%')}}>
         <Image source = {require('../Images/imgone.jpg')}
                          style = {{ height : hp('17%') , width : wp('40%') , borderRadius : 5 }}/>
          {/** Text View */}
          <View style = {{ flexDirection : 'column'}}>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') , width : wp('45%') }}>
              Pay only AED 5 to get a Buy One, Get One Voucher for Chiller or
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Buy One Get One Voucher at Gloria Jean's .
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Select The quantity 
            </Text>

            <View style = {{ flexDirection : 'row'}}>
            <Icon name="minuscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') ,
             marginLeft : hp('1%') , fontSize : hp('3%') }} />
            <Icon name="circle-thin" type = "FontAwesome" style={{color: Colors.primaryColor , marginTop : hp('.5%') ,
              marginLeft : hp('1%') , fontSize : hp('4%') }}/>
          
           <Text style= {{ fontSize : hp('2.5%') , marginLeft : hp('-2.5%'), marginTop : hp('.5%'), 
             color: Colors.primaryColor}}>2</Text>
            <Icon name="pluscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('2%') , fontSize : hp('3%') }} />
            <Icon name="trash" type = "EvilIcons" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('6%') , fontSize : hp('4%') }} />
            <View style={{ margin : hp('1%') ,  borderLeftWidth: .5, height : hp('15%') ,
             borderColor: Colors.hideColor , marginTop : hp('-10%')}}  />
             <View style={{flexDirection : 'column' , marginLeft : hp('1%'), marginTop : hp('-5%'), }}>
             <Text style= {{ fontSize : hp('3%') , 
             color: Colors.primaryColor}}>10</Text>
             <Text style= {{ fontSize : hp('2%') , 
            }}>AED</Text>
             </View>
              
            </View>


          </View>

        </View>   
        <View style={{  width: '100%'  , height: .5 , backgroundColor: Colors.hideColor}} />
              
        {/** Second View */}
        <View style = {{ flexDirection : 'row' , margin : hp('.5%')}}>
         <Image source = {require('../Images/imgfour.jpg')}
                          style = {{ height : hp('17%') , width : wp('40%') , borderRadius : 5 }}/>
          {/** Text View */}
          <View style = {{ flexDirection : 'column'}}>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') , width : wp('45%') }}>
              Don't miss the Buy One, Get one Voucher at Roxy Cinemas available
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Buy One Get One Voucher at Gloria Roxy Cinemas .
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Select The quantity 
            </Text>

            <View style = {{ flexDirection : 'row'}}>
            <Icon name="minuscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') ,
             marginLeft : hp('1%') , fontSize : hp('3%') }} />
            <Icon name="circle-thin" type = "FontAwesome" style={{color: Colors.primaryColor , marginTop : hp('.5%') ,
              marginLeft : hp('1%') , fontSize : hp('4%') }}/>
          
           <Text style= {{ fontSize : hp('2.5%') , marginLeft : hp('-2.5%'), marginTop : hp('.5%'), 
             color: Colors.primaryColor}}>1</Text>
            <Icon name="pluscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('2%') , fontSize : hp('3%') }} />
            <Icon name="trash" type = "EvilIcons" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('6%') , fontSize : hp('4%') }} />
            <View style={{ margin : hp('1%') ,  borderLeftWidth: .5 , height : hp('16%') ,
             borderColor: Colors.hideColor , marginTop : hp('-12%')}}  />
             <View style={{flexDirection : 'column' , marginLeft : hp('1%'), marginTop : hp('-5%'), }}>
             <Text style= {{ fontSize : hp('3%') , marginLeft : hp('1%') ,
             color: Colors.primaryColor}}>6</Text>
             <Text style= {{ fontSize : hp('2%') , 
            }}>AED</Text>
             </View>
              
            </View>


          </View>

        </View>   


         <View style = {{ width : wp('95%') , height : hp('7%') , marginLeft : hp('1%') , borderColor : Colors.hideColor ,
          backgroundColor : Colors.view  , borderRadius : 5 , borderWidth : 1}}>
              <Picker
               mode="dropdown"
               iosHeader="Select your City"
               iosIcon={<Icon name="arrow-dropdown-circle" style={{  fontSize: 25 }} />}
               style={{ width: wp('90%') }}
             
            >
              <Picker.Item 
               label="Roxy Cinemas City Walk" value="key0"  />
              <Picker.Item label="Roxy Cinemas City Walk" value="key1" />
              <Picker.Item label="Roxy Cinemas City Walk" value="key2" />
            </Picker>
         </View>

         {/** Third View */}
         <View style = {{ flexDirection : 'row' , margin : hp('.5%')}}>
         <Image source = {require('../Images/imgfive.png')}
                          style = {{ height : hp('17%') , width : wp('40%') , borderRadius : 5 }}/>
          {/** Text View */}
          <View style = {{ flexDirection : 'column'}}>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') , width : wp('45%') }}>
              Exclusive deal!! BUY ONE GET ONE FREE voucher from Appalee's
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Buy 1 Get 1 Main Course at Appalee's .
            </Text>
            <Text style = {{ fontSize : hp('1.5%'), marginLeft: hp('1%') ,width : wp('45%') ,marginTop: hp('.5%') ,
             color: Colors.hideColor}}>
            Select The quantity 
            </Text>

            <View style = {{ flexDirection : 'row'}}>
            <Icon name="minuscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') ,
             marginLeft : hp('1%') , fontSize : hp('3%') }} />
            <Icon name="circle-thin" type = "FontAwesome" style={{color: Colors.primaryColor , marginTop : hp('.5%') ,
              marginLeft : hp('1%') , fontSize : hp('4%') }}/>
          
           <Text style= {{ fontSize : hp('2.5%') , marginLeft : hp('-2.5%'), marginTop : hp('.5%'), 
             color: Colors.primaryColor}}>2</Text>
            <Icon name="pluscircleo" type = "AntDesign" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('2%') , fontSize : hp('3%') }} />
            <Icon name="trash" type = "EvilIcons" style={{color: Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('6%') , fontSize : hp('4%') }} />
            <View style={{ margin : hp('1%') ,  borderLeftWidth: .5 , height : hp('15%') ,
             borderColor: Colors.hideColor , marginTop : hp('-12%')}}  />
             <View style={{flexDirection : 'column' , marginLeft : hp('1%'), marginTop : hp('-5%'), }}>
             <Text style= {{ fontSize : hp('3%') , marginLeft : hp('1%') ,
             color: Colors.primaryColor}}>9</Text>
             <Text style= {{ fontSize : hp('2%') , 
            }}>AED</Text>
             </View>
              
            </View>


          </View>

        </View>   
        <View style = {{ width : wp('95%') , height : hp('7%') , marginLeft : hp('1%') , borderColor : Colors.hideColor ,
          backgroundColor : Colors.view  , borderRadius : 5 , borderWidth : 1}}>
              <Picker
               mode="dropdown"
               iosHeader="Select your City"
               iosIcon={<Icon name="arrow-dropdown-circle" style={{  fontSize: 25 }} />}
               style={{ width: wp('90%') }}
             
            >
              <Picker.Item 
               label="Arabian Center" value="key0"  />
              <Picker.Item label="Arabian Center" value="key1" />
              <Picker.Item label="Arabian Center" value="key2" />
            </Picker>
         </View>

         <View style= {{ flexDirection : 'row', width : wp('100%') , 
                            marginTop : hp('1%') , height : hp('6%') , 
                            borderWidth : 1 ,  borderTopColor : Colors.hideColor , borderRightColor : Colors.white ,
                             borderBottomColor : Colors.hideColor ,borderLeftColor : Colors.white
                            }}>
                             
                              <Text style={{ color : Colors.hideColor , marginTop : hp('1%') , marginLeft : hp('1%')}}>
                                Discount Code</Text>
                             
                              <TouchableOpacity style = {{ width : wp('22%') , marginLeft : hp('25%') ,
                              marginTop : hp('1%')}}
                              >
                          <Text style = {{  marginLeft : hp('1%')  , borderRadius : 10 , padding : .5 ,
                         backgroundColor : Colors.hideColor   ,fontSize : hp('2%') , color : Colors.white
                            }}>    Apply</Text>
                            </TouchableOpacity>
                            </View>

        <View style= {{ flexDirection : 'row',backgroundColor : '#E5E7E9' , width : wp('100%') , 
                            marginTop : hp('1%') , height : hp('10%') , borderRadius : 2 }}>
                              <View style = {{flexDirection : 'column' , margin : hp('1%')}}>
                              <Text style={{ color : Colors.hideColor , fontSize : hp('3%') }}>
                                Total</Text>
                              <Text style={{  marginLeft : hp('1%') ,
                              fontSize : hp('1.5%')}}>prices shown are inclusive of VAT were appilicable </Text>
                              </View>
                              <Text style = {{   fontSize : hp('5%') , color : Colors.primaryColor ,
                              marginTop : hp('2%')}}> 25</Text>
                             
                         
                            </View>
                            <View style = {{ marginLeft : hp('7%')  , backgroundColor : Colors.primaryColor , alignItems : 'center'  , justifyContent : 'center'
                    , marginTop : hp('.5%'), padding : hp('1%') , width : wp('70%') , borderRadius : hp('10%')
                   }}>
 
                     <TouchableOpacity style = {{ width : wp('20%') , height : hp('4%') }}
                     >
                             
                          <Text style = {{  marginLeft : hp('1%') , color : Colors.white
                           ,fontSize : hp('3%') , width : wp('50%')
                            }}>NEXT</Text>
                           </TouchableOpacity>
                            </View>


</ScrollView>

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

export default  CartScreen ;
