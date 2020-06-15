
import React  , { Component} from 'react';
import { StyleSheet,View,Text, Image , ScrollView , TouchableOpacity} from 'react-native';
import { Icon  , Picker} from 'native-base';
import Orientation from 'react-native-orientation-locker';
import Colors from '../constant/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
let x = 1 ;

class ProductScreen extends Component 
{
  constructor(props) {
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
        <Icon name="md-share" type = "Ionicons" style={{color: Colors.primaryColor , margin : 10 ,
        marginTop : hp('2%') , fontSize : 23 }}  
      />
       
        </View>
        ,

      headerLeft : 
      <View style = {{ flexDirection : "row" , top : 0 , left : 0 }}>
      <Icon name="arrowleft" type = "AntDesign" style={{color: Colors.orange , margin : 10 , fontSize : 25 }}
      onPress = {() => 
        {
          navigationData.navigation.navigate('HomeScreen');
        }}/>
       <Picker
               mode="dropdown"
               iosHeader="Select your City"
               iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
               style={{ width: wp('30%') }}
             
            >
              <Picker.Item itemStyle = {{ backgroundColor : 'red'}} label="Dubai" value="key0"  />
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
          <ScrollView>
          <View style = {{ flexDirection : 'column' }}>
          <Text style ={{ margin : hp('1%') , fontSize : hp('2%') }}>
Boast Your Snow experience to enjoy more from Sky Dubai! Snow pass with a Snow bullet ride at and 
Discovery lesson for only AED 215 instead at AED 350                       
                           </Text>
                          <Image source = {require('../Images/ski-dubai.jpg')}
                          style = {{ height : hp('30%') , width : wp('100%')}}/>
                        <Text style ={{ margin : hp('1%') , fontSize : hp('2.4%')}}>
                          One Snow Pass at Ski Dubai</Text>
                         
                         {/*First View */}
                          <View style = {{ flexDirection : 'row'}}>
                         {/*Quantity View */}
                           <View style={{ flexDirection : 'column'}}>
                           <Text style ={{ margin : hp('1%') , fontSize : hp('2%'), marginLeft : hp('3%') , color : Colors.hideColor}}>
                             Quantity</Text>  
                          <View  style={{ flexDirection : 'row' }}>
                          <View style = {{ backgroundColor : Colors.math , marginLeft : hp('1%')}}>
      <Icon name="md-remove" type = "Ionicons" style={{color: Colors.hideColor , margin : 10 , fontSize : 25 }}
      />
        </View>                
      <Text style = {{ margin : hp('1%') , fontSize : hp('2.5%')}}>{x}</Text>
        <View style = {{ backgroundColor : Colors.math }} >
      <Icon name="md-add" type = "Ionicons" style={{color: Colors.hideColor , margin : 10 , fontSize : 25 }}
      />
        </View>
              <Text style = {{ fontSize : hp('2.5%'), marginLeft : hp('25%') , color : Colors.primaryColor}}>
                AED 215</Text>
                         
                          </View>
                          {/* Sale View */}
                          <View  style = {{flexDirection : 'row' , marginTop : hp('-2%')}}>
              <Text style = {{ fontSize : hp('2.5%'), marginLeft : hp('25%') , backgroundColor : Colors.math ,
               color : Colors.orange}}>
                39% OFF</Text>
                <View style = {{flexDirection : 'column'}}>

                </View>
                <Text style = {{ fontSize : hp('2.5%'), marginLeft : hp('4%') ,
                 color : Colors.hideColor , textDecorationLine: 'line-through' , }}>
                AED 215</Text>
                
                </View>    
               <View style={{ margin : hp('1%') ,  width: '100%'  , height: 1 , backgroundColor: Colors.hideColor}} />
                <Text style = {{ fontSize : hp('2.5%'), marginLeft: hp('2%') ,}}
                >Highlights</Text>

                <View style = {{ flexDirection : 'row' , margin : hp('1%')}}>
                <Icon name="dot-single" type = "Entypo" style={{  fontSize : 25 }}/>
                <Text style = {{ fontSize : hp('2%'), marginLeft: hp('2%') , width : wp('85%') , color: Colors.hideColor}}
                >Boast Your Snow experience to enjoy more from Sky Dubai! Snow pass with a Snow bullet ride at and 
                Discovery lesson for only AED 215 instead at AED 350</Text>
                </View>

                <View style = {{ flexDirection : 'row' ,marginLeft: hp('1%')}}>
                <Icon name="dot-single" type = "Entypo" style={{ fontSize : 25 }}/>
                <Text style = {{ fontSize : hp('2%'), marginLeft: hp('2%') , color: Colors.hideColor}}
                >Deal Inclusions : </Text>
                </View>
                <Text style = {{ fontSize : hp('2%'), marginLeft: hp('6%') , color: Colors.hideColor}}>
                  - Unlimted accessto all Snow Park rides (Bobsled,Tubing,Run,Snow Bumpers,Snow Plough Playground,
                  Zorb Ball,Giant Ball,Chairlift and Mountain Thriller)
                  </Text>
                  <Text style = {{ fontSize : hp('2%'), marginLeft: hp('6%') , color: Colors.hideColor}}>
                  - Snow Bullet Ride and Discovery Lesson .
                  </Text>
                    <View style = {{ backgroundColor : '#000000' , alignItems : 'center'  , justifyContent : 'center'
                    , marginTop : hp('1%'), padding : hp('1%')}}>
 
                     <TouchableOpacity style = {{ width : wp('30%') , height : hp('4%') }}
                           
                              onPress = {()=>{
                                this.props.navigation.navigate('ProductScreen');

                              }}>
                                <View style= {{ flexDirection : 'row'}}>
                                
                          <Text style = {{  marginLeft : hp('1%') , color : Colors.white
                           ,fontSize : hp('2.5%') 
                            }}>Buy With </Text>
                             <Icon name="apple1" type = "AntDesign" style={{ fontSize : 25  , color : Colors.white}}/>
                          <Text style = {{ 
                           color : Colors.white  ,fontSize : hp('2.5%') 
                            }}>Pay</Text>
                            
                            </View>
                            </TouchableOpacity>
                            </View>


                            <View style = {{ backgroundColor : Colors.primaryColor , alignItems : 'center'  , justifyContent : 'center'
                    , marginTop : hp('.5%'), padding : hp('1%') , borderBottomRightRadius : hp('10%'),
                    borderBottomLeftRadius : hp('10%')}}>
 
                     <TouchableOpacity style = {{ width : wp('30%') , height : hp('4%') }}
                           
                              onPress = {()=>{
                                this.props.navigation.navigate('CartScreen');

                              }}>
                                <View style= {{ flexDirection : 'row'}}>
                                <Icon name="cart" type = "Zocial" style={{ fontSize : 25 
                                   , color : Colors.white}}/>
                              
                          <Text style = {{  marginLeft : hp('1%') , color : Colors.white
                           ,fontSize : hp('2.5%') , width : wp('50%'),marginTop : hp('.5%')
                            }}>ADD TO CART</Text>
                            
                            
                            </View>
                            </TouchableOpacity>
                            </View>



                          </View> 
                          
                          </View>

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

export default  ProductScreen ;
