import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RadioButton } from 'react-native-paper'; 

export default function TabTwoScreen() {
  const [checked, setChecked] = React.useState('first');
  

   
  return (
    <View style={styles.container}>
     
                      
     <Image source={require('../assets/images/ve.jpg')} style={{width:'100%',height:'25%',borderBottomLeftRadius:30,borderBottomRightRadius:30}} >
     </Image>
      <Image source={require('../assets/images/menu.jpg')} style={{width:28,height:25,marginTop:10,marginLeft:10,position:'absolute'}} >
     </Image>
     <Text style={{position:'absolute',marginTop:60,marginLeft:10,color:'white',fontSize:25,fontFamily:'sans-serif-light'}}>Welcome
     </Text>
     <Text style={{position:'absolute',marginTop:'24%',marginLeft:10,color:'white',fontSize:32}}>Account
     </Text>
      
   <View style={{flexDirection:'row',borderWidth:1,borderColor:'black',marginTop:20,marginLeft:20,marginRight:20,borderRadius:5,height:45}}>
      <Image source={require('../assets/images/use.jpg')} style={{width:30,height:30,marginTop:6,marginLeft:10,borderRadius:15}} >
     </Image>
     <Text  style={{marginLeft:'20%',fontWeight:'bold',marginTop:8}}>
     Edit Profile
     </Text>
     <Image source={require('../assets/images/ra.png')} style={{width:28,height:25,marginTop:10,marginLeft:'40%',}} >
     </Image>
  </View>

   <View style={{flexDirection:'row',borderWidth:1,borderColor:'black',marginTop:20,marginLeft:20,marginRight:20,borderRadius:5,height:45}}>
      <Image source={require('../assets/images/lock.png')} style={{width:30,height:30,marginTop:7,marginLeft:10,borderRadius:15}} >
     </Image>
     <Text  style={{marginLeft:'20%',fontWeight:'bold',marginTop:12}}>
     Change Password
     </Text>
     <Image source={require('../assets/images/ra.png')} style={{width:28,height:25,marginTop:10,marginLeft:'30%',}} >
     </Image>
  </View>

<View style={{marginTop:10,marginLeft:20,marginRight:20,borderWidth:1,height:'32%',borderRadius:10,borderColor:'black'}}>
      <View style={{flexDirection:'row',marginTop:20}}>
         <Image source={require('../assets/images/lg.png')} style={{width:30,height:30,marginTop:7,marginLeft:35,borderRadius:5}} >
     </Image>
     <Text  style={{marginLeft:'5%',fontWeight:'bold',marginTop:12,}}>
     Select Language
     </Text>
     </View>  
<View style={{flexDirection:'row',marginRight:'67%',marginLeft:14}}>
     <View style={{marginLeft:20,marginTop:20,marginRight:'82%'}}>
      <RadioButton
   
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
    
      </RadioButton>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />

      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      />
    </View>
    <View style={{}}>
<Text style={{marginTop:25,fontWeight:'bold',fontSize:15,fontFamily:'sans-serif-light'}}>English </Text>
<Text style={{marginTop:20,fontWeight:'bold',fontSize:15,fontFamily:'sans-serif-light'}} >Chinese </Text>
<Text style={{marginTop:20,fontWeight:'bold',fontSize:15,fontFamily:'sans-serif-light'}} >French </Text>
</View>
</View>

  </View>
<View style={{flexDirection:'row',marginTop:20,borderWidth:1,height:'7%',marginLeft:20,marginRight:20,borderRadius:10}}>
 <Image source={require('../assets/images/ea.png')} style={{width:30,height:20,marginTop:10,marginLeft:20}} >
     </Image>
     <Text style={{marginLeft:'25%',marginTop:10,fontWeight:'bold',fontSize:18}} >
     Sign out
     </Text>
      <Image source={require('../assets/images/ra.png')} style={{width:30,height:20,marginTop:10,marginLeft:'32%'}} >
     </Image>
  </View>   
 
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
   

 
});
