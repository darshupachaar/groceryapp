import * as React from 'react';
import { StyleSheet,Image,ImageBackground ,TouchableOpacity,backgroundColor} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
   <ImageBackground source={require('../assets/images/vegg.jpg')} style={{width:430,height:730,position:'relative'}}>
                              </ImageBackground>

                       
     <Image source={require('../assets/images/logo.jpg')} style={{height:100,width:70,position:'absolute',marginLeft:170,marginTop:50,borderRadius:10}} >
     </Image>  
     <Text style={{position:'absolute',marginTop:'40%',marginLeft:'35%',fontWeight:'bold',fontSize:40,fontFamily: 'sans-serif-light'}}>Eatance
     </Text>                     
      <Text style={{position:'absolute',marginTop:'55%',marginLeft:135,fontWeight:'bold',fontSize:50,fontFamily: 'sans-serif-light',color:'white'}}>Grocery
     </Text>


                      <TouchableOpacity
          style={styles.s1}
          activeOpacity = { .5 }
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{fontSize:15,paddingRight:'20%',paddingLeft:'20%',fontWeight:'bold',fontSize:18}} > Sign In </Text>
            
      </TouchableOpacity>



      <TouchableOpacity
          style={styles.s2}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{fontSize:15,paddingLeft:'20%',paddingRight:'20%',textAlign:'center',fontWeight:'bold',fontSize:18}} > Skip </Text>
            
      </TouchableOpacity>


      <View style={{flexDirection:'row',marginTop:'125%',position:'absolute',width:'90%',marginLeft:'6%',backgroundColor:'transparent'}}>
             <View style={{backgroundColor:'transparent'}}>
              <Text style={{marginLeft:'24%',fontSize:18,color:'white'}}>
                 Don't have an account ?
               </Text>
               </View>
    
      
            
              <Text style={{color:'black',fontSize:18,textDecorationLine: 'underline', textDecorationStyle: 'solid',borderColor:'#333333',color:'white'}} >
                 SIGN UP
               </Text>
             


  </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
  },
 s1: {
    
    position:'absolute',
    
    paddingTop:15,
    paddingBottom:15,
    width:200,
    marginRight:60,
    
   marginTop:350,
   marginLeft:'23%',
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
  
  },
 s2: {
    
    position:'absolute',
    width:200,
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center',
    marginLeft:'23%',
    marginRight:60,
    borderColor:'white',
   marginTop:430,
   

  borderWidth:1,
    borderRadius:20,
    backgroundColor: 'rgba(158, 245, 50, 0.8)'


  
  },

});
