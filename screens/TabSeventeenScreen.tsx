import  React, { useState } from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button,backgroundColor,SearchBar, CheckBox} from 'react-native';

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
     <Text  style={{marginLeft:'20%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25,paddingBottom:15}}>
     Category Details
    </Text>
      </View >
    
     <Image source={require('../assets/images/avo.jpg')} style={{width:100,height:90,marginLeft:20,marginTop:20}} >
     </Image>
     <View style={{flexDirection:'column',marginLeft:'40%',marginTop:'-17%'}}>
     <Text style={{fontWeight:'bold',fontSize:17}}>Fruit Avocado, 500 g
     </Text>
      <Text style={{}}>Fruita
      </Text>
      </View>

     <View style={{backgroundColor:'lightgrey',marginTop:'8%'}}>     
      <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,paddingTop:10,paddingBottom:10}}>Volume
      </Text>
     </View>

     <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
      
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>250g</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'60%'}}>$0.60</Text>
       </View>
        <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginTop:10}}/>

           <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
    
        value="second"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>500g</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'60%'}}>$1.20</Text>
       </View>
        <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginTop:10}}/>

           <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
     
        value="third"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>1kg</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'62%'}}>$2.40</Text>
       </View>
     
     <View style={{backgroundColor:'lightgrey',marginTop:'2%'}}>     
      <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,paddingTop:10,paddingBottom:10}}>Volume
      </Text>
     </View>

     <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
       label="dfsg"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>250g</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'60%'}}>$0.60</Text>
       </View>
        <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginTop:10}}/>

         <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
       label="dfsg"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>250g</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'60%'}}>$0.60</Text>
       </View>
        <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginTop:10}}/>

         <View style={{flexDirection:'row'}}>
     <View  style={{marginLeft:10,marginTop:10}}>
      <RadioButton
       label="dfsg"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
      <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'5%'}}>250g</Text>
       <Text style={{color:'grey',fontSize:18,paddingTop:15,paddingLeft:'60%'}}>$0.60</Text>
       </View>
        <View
         style={{borderBottomWidth:1,borderBottomLength:10, borderBottomColor:'#ede4e4',marginTop:10}}/>

         <TouchableOpacity
          style={styles.s3}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{fontSize:15,paddingLeft:50,paddingRight:50,textAlign:'center',fontWeight:'bold',fontSize:18,color:'white'}} > Save </Text>
            
      </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
    s3: {
    
   
    
    paddingTop:12,
    paddingBottom:12,
    alignItems:'center',
    marginLeft:'28%',
    marginRight:'28%',
    borderColor:'black',
   marginTop:'5%',
 backgroundColor:'#f75252',
   


    borderRadius:50,
    


  
  }, 

 
});
