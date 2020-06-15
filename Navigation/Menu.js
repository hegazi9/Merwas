
import React , { Component} from 'react' ;
import { View , StyleSheet , Platform  , Text  , ImageBackground  ,  Linking , NativeModules} from 'react-native';
import  Colors from '../constant/color'; 


class Menu extends Component {

  constructor(props)
  {
    super(props);
   
       
    
  }

  componentWillMount ()
    {

    }
    render() {
  
      return (
  
        <View style={styles.sideMenuContainer}>
       

      </View>
      
      );
    }
}

const styles = StyleSheet.create({
   
    MainContainer: {
 
        flex: 1,
        backgroundColor : Colors.white ,
        alignItems: 'center',
        justifyContent: 'center',
     
      },
     
    
   });
   
   
export default   Menu ;
