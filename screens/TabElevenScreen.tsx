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
     <Text  style={{marginLeft:'20%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
     Order Detail
    </Text>
      </View >
    
      <Image source={require('../assets/images/map.png')} style={{width:'90%',height:'50%',marginLeft:20,marginTop:20}} >
     </Image>

<View style={{borderWidth:1,marginLeft:20,marginRight:20,marginTop:20,borderColor:'lightgrey'}}>
      <View style={{marginBottom:10,borderWidth:1,backgroundColor:'lightgrey',borderColor:'lightgrey'}}>
     <Text style={{fontSize:18,paddingLeft:20,paddingTop:10,fontWeight:'bold',paddingBottom:10}}>Order# 680 </Text>
     </View>

<View style={{flexDirection:'row'}}>
<View style={{flexDirection:'column',marginRight:12}}>
     <View style={{flexDirection:'row',marginRight:'40%'}}>
      <Image source={require('../assets/images/ssd.jpg')} style={{width:40,height:40,marginLeft:20}} >
     </Image>
     <Text style={{paddingLeft:10,paddingTop:10,fontSize:15}}>Justin will deliver your order</Text>
     </View>
     <View style={{flexDirection:'row',marginRight:'40%'}}>
       <Image source={require('../assets/images/sw.png')} style={{width:30,height:30,marginLeft:20}} >
     </Image>
     <Text  style={{paddingLeft:22,paddingTop:10,fontSize:15}}>Arriving in 30 mins </Text>
      </View>
   </View>  
   <View style={{marginLeft:-110,}}> 
       <Image source={require('../assets/images/user.png')} style={{width:70,height:60}} >
     </Image>
      <Image source={require('../assets/images/call.png')} style={{width:29,height:30,position:'absolute',marginTop:35,marginLeft:40,borderRadius:18}} >
     </Image>
     </View>
   </View>
   <Text style={{fontWeight:'bold',paddingLeft:28,paddingTop:10,fontSize:17,paddingBottom:10}}>Payable Amount-$4.62</Text>
   </View>
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
