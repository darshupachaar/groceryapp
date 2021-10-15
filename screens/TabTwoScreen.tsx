import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     
                      
     <Image source={require('../assets/images/vv.jpg')} style={{width:425,height:170,borderBottomLeftRadius:30,borderBottomRightRadius:30}} >
     </Image>
      <Image source={require('../assets/images/a.jpg')} style={{width:28,height:25,marginTop:10,marginLeft:10,position:'absolute'}} >
     </Image>
     <Text style={{position:'absolute',marginTop:60,marginLeft:10,color:'white',fontSize:25,fontFamily:'sans-serif-light'}}>Welcome
     </Text>
     <Text style={{position:'absolute',marginTop:100,marginLeft:10,color:'white',fontSize:30}}>Sign Up
     </Text>
      
       <TouchableOpacity
          style={styles.s2}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
          <Image source={require('../assets/images/user.png')} style={{height:60,width:60,borderRadius:30}} >
     </Image>
 
            <Text style={{fontSize:15,paddingLeft:75,textAlign:'center',fontWeight:'bold',fontSize:18}} > </Text>
            
      </TouchableOpacity>

        <Image source={require('../assets/images/cam.jpg')} style={{marginTop:55,marginLeft:210,height:30,width:30,borderRadius:40}} >
     </Image>


     <Text style={{marginLeft:20,marginTop:30,fontWeight:'bold',fontSize:15}}>
     First name
     </Text>
    
    <TextInput placeholder="darshu"   style={{marginLeft:20,borderBottomWidth:0.5,marginRight:20,}}></TextInput>

    <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Last Name
     </Text>
      <TextInput placeholder="pachaar"   style={{marginLeft:20,borderBottomWidth:0.5,marginRight:20,}}></TextInput>
       <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Email
     </Text>
     <TextInput placeholder="example123@gmail.com"   style={{marginLeft:20,borderBottomWidth:0.5,marginRight:20,}}></TextInput>
      
    <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Phon Number
     </Text>
      <TextInput placeholder="9123456789"  value={Number}  style={{marginLeft:20,borderBottomWidth:0.5,marginRight:20,}}></TextInput>
       <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Password
     </Text>
     <TextInput placeholder="********"  value={Password} secureTextEntry={true}  style={{marginLeft:20,borderBottomWidth:0.5,marginRight:20,}}></TextInput>
      <Image source={require('../assets/images/eyeh.png')} style={{width:20,height:20,marginTop:-25,marginLeft:'83%'}} >
     </Image>

      <TouchableOpacity
          style={styles.s3}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{fontSize:15,paddingLeft:100,paddingRight:100,textAlign:'center',fontWeight:'bold',fontSize:18,color:'white'}} > Sign Up </Text>
            
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   s2: {position:'absolute',alignItems:'center', marginLeft:170,  marginRight:80,borderColor:'green',marginTop:180, height:70,  width:70, paddingTop:3,

   

  borderWidth:2,
    borderRadius:35,
   },
    s3: {
    
   
    
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center',
    marginLeft:20,
    marginRight:20,
    borderColor:'black',
   marginTop:10,
 backgroundColor:'#f75252',
   


    borderRadius:50,
    


  
  },

 
});
