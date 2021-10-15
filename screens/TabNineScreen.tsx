import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

 


export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/aaa.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'15%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
     Select Address
    </Text>
      </View >
    
      <Image source={require('../assets/images/map.png')} style={{width:'90%',height:'50%',marginLeft:20,marginTop:20}} >
     </Image>

     <Text style={{fontSize:18,paddingLeft:20,paddingTop:30}}>Additional Information <Text style={{color:'red'}}>*</Text></Text>

      <TextInput   style={{marginLeft:20,borderBottomWidth:1.5,marginRight:20,borderBottomColor:'lightgrey'}}></TextInput>

  <Text style={{fontSize:18,paddingLeft:20,paddingTop:30}}>Delivery Location<Text style={{color:'red'}}>*</Text></Text>
  <TextInput   style={{marginLeft:20,borderBottomWidth:1.5,marginRight:20,borderBottomColor:'lightgrey'}}></TextInput>
  
     <TouchableOpacity
          style={styles.s4}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white',paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} > Continue</Text>
            
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
s1:{
  color:'green',marginTop:20,fontSize:20,marginLeft:30
} ,
 s3: {
    
   
    
    
    alignItems:'center',
    marginLeft:'41%',
  
    borderColor:'black',
   marginTop:'4%',
 backgroundColor:'#f75252',
   


    borderRadius:50,
    } ,
     s4: {
    
   
    
    
    alignItems:'center',
    marginLeft:'30%',
    marginRight:'33%',
  
    borderColor:'black',
   marginTop:'12%',
 backgroundColor:'#f75252',
   


    borderRadius:50,
    }  
 

 
});
