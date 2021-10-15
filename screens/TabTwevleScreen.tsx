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
   
   <View style={{flexDirection:'row',marginTop:20,borderWidth:0.2,borderColor:'lightgrey',marginLeft:20,marginRight:23}}>
    <Text style={{color:'green',paddingLeft:30,fontSize:18,paddingTop:15,paddingBottom:15}}>14 May</Text>
    <Text style={{paddingLeft:45,fontSize:18,paddingTop:15,paddingBottom:15,fontWeight:'bold'}}>3 Items ordered</Text>
    <View style={{backgroundColor:'lightgrey',marginTop:4,marginLeft:20,width:1,height:'80%'}} ><Text> </Text></View>
    <Text  style={{color:'grey',paddingLeft:35,fontSize:18,paddingTop:15,paddingBottom:15}}>$61.05</Text>
    </View>

     <View style={{flexDirection:'row',marginTop:20,borderWidth:0.2,borderColor:'lightgrey',marginLeft:20,marginRight:23}}>
    <Text style={{color:'green',paddingLeft:30,fontSize:18,paddingTop:15,paddingBottom:15}}>8 May</Text>
    <Text style={{paddingLeft:45,fontSize:18,paddingTop:15,paddingBottom:15,fontWeight:'bold'}}>1 Items ordered</Text>
    <View style={{backgroundColor:'lightgrey',marginTop:4,marginLeft:28,width:1,height:'80%'}} ><Text> </Text></View>
    <Text  style={{color:'grey',paddingLeft:35,fontSize:18,paddingTop:15,paddingBottom:15}}>$10.12</Text>
    </View>


 <View style={{flexDirection:'row',marginTop:20,borderWidth:0.2,borderColor:'lightgrey',marginLeft:20,marginRight:23}}>
    <Text style={{color:'green',paddingLeft:30,fontSize:18,paddingTop:15,paddingBottom:15}}>10 Feb</Text>
    <Text style={{paddingLeft:45,fontSize:18,paddingTop:15,paddingBottom:15,fontWeight:'bold'}}>2 Items ordered</Text>
    <View style={{backgroundColor:'lightgrey',marginTop:4,marginLeft:25,width:1,height:'80%'}} ><Text> </Text></View>
    <Text  style={{color:'grey',paddingLeft:35,fontSize:18,paddingTop:15,paddingBottom:15}}>$40.04</Text>
    </View>

 <View style={{flexDirection:'row',marginTop:20,borderWidth:0.2,borderColor:'lightgrey',marginLeft:20,marginRight:23}}>
    <Text style={{color:'green',paddingLeft:30,fontSize:18,paddingTop:15,paddingBottom:15}}>2 Feb</Text>
    <Text style={{paddingLeft:45,fontSize:18,paddingTop:15,paddingBottom:15,fontWeight:'bold'}}>4 Items ordered</Text>
    <View style={{backgroundColor:'lightgrey',marginTop:4,marginLeft:35,width:1,height:'80%'}} ><Text> </Text></View>
    <Text  style={{color:'grey',paddingLeft:35,fontSize:18,paddingTop:15,paddingBottom:15}}>$61.05</Text>
    </View>


 <View style={{flexDirection:'row',marginTop:20,borderWidth:0.2,borderColor:'lightgrey',marginLeft:20,marginRight:23}}>
    <Text style={{color:'green',paddingLeft:30,fontSize:18,paddingTop:15,paddingBottom:15}}>20Feb </Text>
    <Text style={{paddingLeft:42,fontSize:18,paddingTop:15,paddingBottom:15,fontWeight:'bold'}}>1 Items ordered</Text>
    <View style={{backgroundColor:'lightgrey',marginTop:4,marginLeft:29,width:1,height:'80%'}} ><Text> </Text></View>
    <Text  style={{color:'grey',paddingLeft:35,fontSize:18,paddingTop:15,paddingBottom:15}}>$30.05</Text>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
 

 
});
