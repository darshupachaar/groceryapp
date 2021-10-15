import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     
                      
     <Image source={require('../assets/images/bv.jpg')} style={{width:'100%',height:'25%'}} >
     </Image>
   
     <Text style={{position:'absolute',marginTop:40,marginLeft:'20%',color:'#470005',fontSize:25,fontFamily:'sans-serif-light'}}>Welcome
     </Text>
     <Text style={{position:'absolute',marginTop:80,marginLeft:'20%',color:'#470005',fontSize:30}}>Guest User
     </Text>

     <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/hm.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Home
     </Text> 
     </View>
      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/seting.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Account
     </Text> 
     </View>

      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/order.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     My Order
     </Text> 
     </View>
      

       <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/noti.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     notification
     </Text> 
     </View>
   
       <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/rate.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Rate
     </Text> 
     </View>

      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/shar.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Share
     </Text> 
     </View>

      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/about.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     About Us
     </Text> 
     </View>

      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/contact.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Contact Us
     </Text> 
     </View>

      <View style={{flexDirection:'row',marginTop:15}}>
      <Image source={require('../assets/images/privacy.png')} style={{width:25,height:25,marginTop:10,marginLeft:20}} >
     </Image>
     <Text  style={{marginTop:10,paddingLeft:20,fontSize:20,fontFamily:'sans-serif-light',fontWeight:'bold'}}>
     Privacy Policy
     </Text> 
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   

 
});
