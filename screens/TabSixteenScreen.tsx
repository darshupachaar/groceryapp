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
     <Text  style={{marginLeft:'27%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25,marginBottom:10}}>
      My Order
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

<View style={{flexDirection:'row'}}>
     <Image source={require('../assets/images/waiting.png')} style={{width:30,height:30,marginLeft:40,marginTop:20}} >
     </Image>
     <Text style={{color:'green',paddingTop:20,paddingLeft:20,fontSize:16}}>This order to be accepted.{'\n'}Please wait for a while.Thank You!</Text>
</View>

<View style={{flexDirection:'row',marginTop:30}}>
   <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:20}}>Fruitia Avocado,500 g(*1)</Text> 
   <Text  style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:135}}>$2.40</Text> 
 
</View>

<View style={{flexDirection:'row',marginTop:30}}>
   <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:20}}>Nescafe Instant Coffee,25 g(*2)</Text> 
   <Text  style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:95}}>$1.62</Text> 
 
</View>
<View style={{flexDirection:'row',marginTop:30}}>
   <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:20}}>Grapes-Blue with Seed,,500 g(*3)</Text> 
   <Text  style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:85}}>$0.50</Text> 

 
</View>
 <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>
      <View style={{flexDirection:'row',marginTop:20}}>
   <Text style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:20}}>Total Amount</Text> 
   <Text  style={{color:'black',fontSize:16,fontWeight:'bold',paddingLeft:210,paddingBottom:20}}>$4.62</Text> 

 
</View>   

 

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
