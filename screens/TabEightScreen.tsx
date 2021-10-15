import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { RadioButton } from 'react-native-paper'; 


export default function TabTwoScreen() {
  const [checked, setChecked]= React.useState('first');
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/aaa.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'15%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
     Address Selection
    </Text>
      </View >
                      
    <Text style={styles.s1}>
    Select Address
    </Text>

     
<View style={{flexDirection:'row',marginRight:'67%',marginLeft:30,marginTop:10}}>
   <View>
     <RadioButton
       label="dfsg"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
      <View>
      <Text style={{fontSize:20,paddingTop:5}}>Pickup</Text>
      </View>
      <View>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}

      />
      </View>
       <View>
      <Text style={{fontSize:20,paddingTop:5}}>Delivery</Text>
      </View>
  </View>

  <View style={{flexDirection:'row'}}>

  <Text style={{fontSize:20,color:'green',marginLeft:30,marginTop:20}}>Address</Text>
   <TouchableOpacity
          style={styles.s3}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white',paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}} > Add Address </Text>
            
      </TouchableOpacity>

     </View>
   
   <View  style={{borderWidth:2,borderRadius:8,marginTop:30,marginLeft:'7%',marginRight:'6%',borderColor:'green'}}>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:20,color:'green',marginLeft:30,marginTop:20}}>Home Address</Text>
        <Image source={require('../assets/images/edit.png')} style={{width:'5%',height:'50%',marginLeft:'31%',marginTop:'5%',marginRight:'5%'}} >
     </Image>
      <Image source={require('../assets/images/delet.png')} style={{width:'5%',height:'50%',marginLeft:20,marginTop:'5%'}} >
     </Image>
     </View>

     <Text style={{marginLeft:30,paddingTop:'5%',paddingBottom:10,fontSize:18,fontFamily:'sans-serif-light'}}>Suhana Main Road ,SCO 37, {'\n'}Sector-17 Gurgaon,Haryana 12001</Text>
    </View>

     <View  style={{borderWidth:2,borderRadius:8,marginTop:30,marginLeft:'7%',marginRight:'6%',borderColor:'lightgrey'}}>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:20,color:'green',marginLeft:30,marginTop:20}}>Work Address</Text>
        <Image source={require('../assets/images/edit.png')} style={{width:'5%',height:'50%',marginLeft:'34%',marginTop:'5%',marginRight:'5%'}} >
     </Image>
      <Image source={require('../assets/images/delet.png')} style={{width:'5%',height:'50%',marginLeft:20,marginTop:'5%'}} >
     </Image>
     </View>

     <Text style={{marginLeft:30,paddingTop:'5%',paddingBottom:10,fontSize:18,fontFamily:'sans-serif-light'}}>Suhana Main Road ,SCO 37, {'\n'}Sector-17 Gurgaon,Haryana 12001</Text>
    </View>

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
   marginTop:'30%',
 backgroundColor:'#f75252',
   


    borderRadius:50,
    }  
 

 
});
