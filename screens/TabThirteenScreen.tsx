import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

 


export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/meenu.jpg')} style={{width:30,height:30,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'23%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25,marginBottom:10}}>
     Order Detail
    </Text>
      </View >

       <View style={{flexDirection:'row'}}>
    <View style={{borderWidth:1,borderColor:'#87bd75',marginLeft:20,marginTop:20}}>
    <Text style={{color:'green',fontSize:18,paddingTop:10,paddingBottom:10,paddingLeft:50,paddingRight:75}}>In Process</Text>
     </View>
     <View style={{borderWidth:1,marginTop:20,borderColor:'#87bd75'}}>
    <Text  style={{color:'green',fontSize:18,paddingTop:10,paddingBottom:10,paddingLeft:70,paddingRight:75,backgroundColor:'#87bd75',color:'white'}}>Past</Text>
     </View>
    </View>

<View style={{borderWidth:1,marginTop:20,marginLeft:20,marginRight:22,borderColor:'lightgrey',borderRadius:5}}>
<View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
<Text style={{fontSize:16,fontWeight:'bold'}}>Order# 680</Text>
<Text style={{color:'green',fontSize:16,paddingLeft:50}}>Jun 22,2020</Text>
<Text style={{color:'green',fontSize:16,paddingLeft:50}}>3 Items ordered</Text>
 </View> 

 <View style={{marginLeft:40,marginTop:60,width:'70%',height:2,backgroundColor:'green'}}><Text></Text>
  <View style={{marginLeft:0,marginTop:-35,width:'14%',height:40,borderRadius:55}}><Image source={require('../assets/images/right.png')} style={{width:42,height:40,borderRadius:25}} >
     </Image></View>
  <View style={{marginLeft:90,marginTop:-40,width:'14%',height:40,borderRadius:55}}><Image source={require('../assets/images/right.png')} style={{width:42,height:40,borderRadius:25}} >
     </Image></View>

     <View style={{marginLeft:180,marginTop:-40,width:'14%',height:40,borderRadius:55}}><Image source={require('../assets/images/right.png')} style={{width:42,height:40,borderRadius:25}} >
     </Image></View>

     <View style={{marginLeft:260,marginTop:-40,width:'14%',height:40,backgroundColor:'lightgrey',borderRadius:55}}><Text></Text>
     </View>
 </View>

<View style={{flexDirection:'row',marginTop:40}}>
   <Text style={{color:'grey',fontSize:15,paddingLeft:30}}>Accepted</Text> 
   <Text  style={{color:'grey',fontSize:15,paddingLeft:45}}>Packed</Text> 
   <Text  style={{color:'grey',fontSize:15,paddingLeft:40}}>Picked up</Text> 
   <Text  style={{color:'grey',fontSize:15,paddingLeft:25}}>Delivered</Text> 
</View>

 <TouchableOpacity
          style={styles.s4}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white',paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}} >View Order</Text>
            
      </TouchableOpacity>

      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
 s4: {
    
   
    
    
    alignItems:'center',
    marginLeft:'30%',
    marginRight:'33%',
  
    borderColor:'black',
   marginTop:'12%',
   marginBottom:20,
 backgroundColor:'#f75252',
   


    borderRadius:50,
    }  

 
});
