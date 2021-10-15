import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button,backgroundColor,SearchBar} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


  

export default function TabTwoScreen() {
  

  return (
    <View style={styles.container}>
     
     <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/c.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'20%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
     Eatance Grocery
     </Text>
           <Image source={require('../assets/images/cros.jpg')} style={{width:40,height:40,marginLeft:60,marginTop:22}} >
     </Image>
 </View >
    <View style={{flexDirection:'row',borderWidth:.1,borderRadius:2,marginLeft:20,marginRight:20,marginTop:10,height:35}}>
     <Image source={require('../assets/images/seach.jpg')} style={{width:20,height:20,marginLeft:20,marginTop:10}} >
     </Image>
   
      <Text style={{fontSize:20,fontFamily:'sans-serif-light',marginTop:6,marginLeft:59}}>
      noodles
      </Text> 
       <Image source={require('../assets/images/cr.jpg')} style={{width:20,height:20,marginLeft:'50%',marginTop:10}} >
     </Image>

     </View>
 <View style={{marginTop:10,borderWidth:.2,height:'20%'}}>
      <Text style={{fontSize:15,fontFamily:'sans-serif-light',fontWeight:'bold',marginTop:6,marginLeft:20}}>
      noodles in <Text style={{fontSize:15,marginTop:6,marginLeft:25,color:'green'}}>
             Noodles & Vermicell
      </Text> 
      </Text> 

    <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>


           <Text style={{fontSize:15,fontFamily:'sans-serif-light',fontWeight:'bold',marginTop:6,marginLeft:20}}>
     masala noodles in <Text style={{fontSize:15,marginTop:6,marginLeft:25,color:'green'}}>
             Noodles & Vermicell
      </Text> 
      </Text> 
      <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>



         <Text style={{fontSize:15,fontFamily:'sans-serif-light',fontWeight:'bold',marginTop:6,marginLeft:20}}>
     masala 2 minutesinstant noodles in <Text style={{fontSize:15,marginTop:6,marginLeft:25,color:'green'}}>
             Noodles...
      </Text> 
      </Text> 
      <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginLeft:20,marginRight:20,marginTop:10}}/>

     
      <Text style={{fontSize:15,fontFamily:'sans-serif-light',fontWeight:'bold',marginTop:6,marginLeft:20,paddingBottom:10}}>
     maggi noodles in <Text style={{fontSize:15,marginTop:6,marginLeft:25,color:'green',paddingBottom:10}}>
             Noodles & Vermicell
      </Text> 
      </Text> 
 </View>
<View style={{backgroundColor:'lightgrey',height:'100%'}}>
<Text style={{fontSize:15,marginLeft:20,marginTop:10,fontWeight:'bold'}}>
Shop by categry<Text style={{fontSize:15,marginLeft:'50%',marginTop:10,color:'red',fontWeight:'bold'}}>                                                                 View all
</Text>
</Text>
 

 <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'lightgrey',width:'100%',marginLeft:8,marginTop:'5%'}}>
 <View style={{borderWidth:1,marginLeft:8,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/ffv.jpg')} style={{width:'100%',height:60,backgroundColor:'lightgrey'}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:35,color:'grey',marginRight:10}}>
   fruit &
   </Text>
   <Text style={{marginLeft:30,color:'grey',paddingBottom:10}}>
   vegitable
   
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/masala.jpg')} style={{width:'65%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:25,color:'grey'}}>
   Food grain,
   </Text>
   <Text style={{marginLeft:30,color:'grey'}}>
   oil,masala
   
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,marginRight:28,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/cake.jpg')} style={{width:'65%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:35,color:'grey'}}>
   Bakery,
   </Text>
   <Text style={{marginLeft:30,color:'grey'}}>
   cake,dairy
   
   </Text>  
  </View>
  </View>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'lightgrey',width:'100%',marginTop:'3%',marginLeft:8}}>
 <View style={{borderWidth:1,marginLeft:8,width:90,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/coka.jpg')} style={{width:'60%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:30,color:'grey'}}>
 beverage
   </Text>
   <Text style={{marginLeft:30,color:'grey'}}>
   cooldrink
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/snaks.png')} style={{width:'65%',height:60,marginLeft:20,marginTop:10}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:35,color:'grey',}}>
   Snaks &
   </Text>
   <Text style={{marginLeft:20,color:'grey',paddingBottom:5}}>
   branded foods
   
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,marginRight:28,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/hyy.jpg')} style={{width:'65%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column', }}>
   <Text style={{marginLeft:35,color:'grey'}}>
   beauty
   </Text>
   <Text style={{marginLeft:30,color:'grey'}}>
   & hygiene
   
   </Text>  
  </View>
  </View>

</View>


<View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'lightgrey',width:'100%',marginLeft:8,marginTop:'2%'}}>
 <View style={{borderWidth:1,marginLeft:8,width:90,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/clean.jpg')} style={{width:'65%',height:70,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:35,color:'grey',marginRight:10}}>
   cleaning
   </Text>
   <Text style={{marginLeft:20,color:'grey'}}>
   & household
   
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/kit.jpg')} style={{width:'55%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column'}}>
   <Text style={{marginLeft:35,color:'grey'}}>
   Kitchen,
   </Text>
   <Text style={{marginLeft:20,color:'grey'}}>
   garden,pets
   
   </Text>  
  </View>
  </View>

   <View style={{borderWidth:1,marginLeft:8,marginRight:28,width:90,borderColor:'grey',width:'30%',borderRadius:5}}>
 <Image source={require('../assets/images/fish.jpg')} style={{width:'65%',height:60,marginLeft:20}} >
     </Image>
  <View style={{flexDirection:'column', }}>
   <Text style={{marginLeft:35,color:'grey'}}>
   Egg,meat
   </Text>
   <Text style={{marginLeft:30,color:'grey'}}>
   &fish
   
   </Text>  
  </View>
  </View>

</View>



</View>




  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   

 
});
