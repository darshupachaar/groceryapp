import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
     
                      
     <Image source={require('../assets/images/veeee.jpg')} style={{width:'100%',height:'25%',borderBottomLeftRadius:30,borderBottomRightRadius:30}} >
     </Image>
      <Image source={require('../assets/images/a.jpg')} style={{width:28,height:25,marginTop:10,marginLeft:10,position:'absolute'}} >
     </Image>
    
     <Text style={{position:'absolute',marginTop:110,marginLeft:10,color:'white',fontSize:35}}>My Profile
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
<View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/maill.png')} style={{marginTop:22,marginLeft:20,height:30,width:30,borderRadius:10}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:30,fontWeight:'bold',fontSize:15}}>
     darshu@gmail.com
     </Text></View>
    
     <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>

   <View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/calll.jpg')} style={{marginTop:12,marginLeft:20,height:30,width:30,borderRadius:10}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     9000000009
     </Text></View>
       <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>
      <View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/cono.png')} style={{marginTop:12,marginLeft:20,height:30,width:30,borderRadius:40}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Darshu
     </Text>
      <Image source={require('../assets/images/edit.png')} style={{marginTop:16,marginLeft:'60%',height:20,width:20}} >
     </Image>
     </View>
   <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>      
    <View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/cono.png')} style={{marginTop:12,marginLeft:20,height:30,width:30,borderRadius:40}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Hawk
     </Text>
      <Image source={require('../assets/images/edit.png')} style={{marginTop:16,marginLeft:'63%',height:20,width:20}} >
     </Image>
     </View>
     <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>
        <View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/add.png')} style={{marginTop:12,marginLeft:20,height:30,width:30,borderRadius:40}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Address
     </Text>
      <Image source={require('../assets/images/edit.png')} style={{marginTop:16,marginLeft:'59%',height:20,width:20}} >
     </Image>
     </View>
     <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>

                <View style={{flexDirection:'row'}}>
 <Image source={require('../assets/images/notii.png')} style={{marginTop:12,marginLeft:20,height:30,width:30,borderRadius:40}} >
     </Image>
     <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold',fontSize:15}}>
     Notification
     </Text>
      <Image source={require('../assets/images/notiii.png')} style={{marginTop:16,marginLeft:'54%',height:20,width:20}} >
     </Image>
     </View>
     <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>
      <TouchableOpacity
          style={styles.s3}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{fontSize:15,paddingLeft:100,paddingRight:100,textAlign:'center',fontWeight:'bold',fontSize:18,color:'white'}} > Save </Text>
            
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   s2: {
    
    position:'absolute',
    
   
    alignItems:'center',
    marginLeft:170,
    marginRight:80,
    borderColor:'green',
   marginTop:180,
   height:70,
   width:70,
    
  paddingTop:3,

   

  borderWidth:2,
    borderRadius:35,
   },
    s3: {
    
   
    
    paddingTop:15,
    paddingBottom:15,
    alignItems:'center',
    marginLeft:90,
    marginRight:90,
    borderColor:'black',
   marginTop:20,
 backgroundColor:'#f75252',
   


    borderRadius:50,
    


  
  },

 
});
