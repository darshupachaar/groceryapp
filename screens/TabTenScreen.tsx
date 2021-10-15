import * as React from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

 import { RadioButton } from 'react-native-paper'; 



export default function TabTwoScreen() {
 const [checked, setChecked]= React.useState('');
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/aaa.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'25%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
  Payment
    </Text>
      </View >

      <View style={{flexDirection:'row',borderWidth:1,marginTop:20,borderColor:'lightgrey',borderRadius:5,marginLeft:20,marginRight:20}}>
      <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15,paddingTop:5}}>Cash on delivery</Text>
       <View style={{marginLeft:'50%'}}>
      <RadioButton 

      
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}>
      
      </RadioButton>
      </View>
    
     </View>

<View style={{flexDirection:'row',marginTop:'115%',borderWidth:1,borderColor:'lightgrey'}}>
     <Text style={{fontSize:20,fontWeight:'bold',paddingTop:'6%',paddingLeft:20}}>$4.62</Text>
  
     <TouchableOpacity
          style={styles.s4}
          activeOpacity = { .5}
          onPress={()=>Alert.alert('going next page') }>
 
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white',paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10}} > Place Order</Text>
            
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
    marginLeft:'50%',
    marginRight:'20%',
    marginBottom:7,
    borderColor:'black',
   marginTop:'4%',
 backgroundColor:'#f75252',
   


    borderRadius:50,
    }  
 

 
});
