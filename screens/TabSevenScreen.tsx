import  React, { useState } from 'react';
import { StyleSheet,Image ,TouchableOpacity,TextInput,Password ,Button,backgroundColor,SearchBar, CheckBox} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


  

export default function TabTwoScreen() {
const [isSelected, setSelection] = useState(false);  
const [iSelected, sSelection] = useState(false);
const [aSelected, aSelection] = useState(false);
const [bSelected, bSelection] = useState(false);
const [cSelected,cSelection] = useState(false);
const [dSelected, dSelection] = useState(false);
const [eSelected, eSelection] = useState(false);
  return (
    <View style={styles.container}>
     
     <View style={{backgroundColor:'#87bd75',flexDirection:'row' }}>
              <Image source={require('../assets/images/aaa.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text  style={{marginLeft:'20%',fontWeight:'bold',fontSize:25,fontFamily:'sans-serif-light',color:'white',marginTop:25}}>
     Fruit & Vegitable
    </Text>
      </View >
    
      <View style={{backgroundColor:'#5eb05a',marginRight:'80%',height:'15%'}}> 
      <Image source={require('../assets/images/box.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text style={{fontSize:18,paddingLeft:10,paddingTop:5,color:'white'}}>
     Category
     </Text>
      </View>
      <View style={{backgroundColor:'#87bd75',marginRight:'80%',height:'15%',marginTop:2}}> 
      <Image source={require('../assets/images/brand.jpg')} style={{width:40,height:40,marginLeft:20,marginTop:20}} >
     </Image>
     <Text style={{fontSize:18,paddingLeft:15,paddingTop:5,color:'white'}}>
     Brands
     </Text>
  </View>
 
      <View style={{flex:1,backgroundColor:'#87bd75',marginRight:'80%',marginTop:2}}>

      </View>
      <View style={{flex:1,backgroundColor:'#5eb05a',marginLeft:87,marginTop:'-185%',marginBottom:35}}>
         
 <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'60%',marginTop:10,fontSize:18}}>All product
          </Text>
          <CheckBox
           
          value={isSelected}
          onValueChange={setSelection}
         
        />
         </View>
          <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'74%',marginTop:10,fontSize:18}}>Fruit
          </Text>
         <CheckBox
        
          value={aSelected}
          onValueChange={aSelection}
          style={styles.checkbox}
        />
        </View>
        <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'60%',marginTop:10,fontSize:18}}>Vegetables
          </Text>
         <CheckBox
        
          value={iSelected}
          onValueChange={sSelection}
          style={styles.checkbox}
        />
        </View>
        <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'44%',marginTop:10,fontSize:18}}>Herbs & seasoning
          </Text>
         <CheckBox
        
          value={bSelected}
          onValueChange={bSelection}
          style={styles.checkbox}
        />
         </View>
        <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'29%',marginTop:10,fontSize:18}}>Exotic Fruits & Vegetables
          </Text>
         <CheckBox
         label="kjsdn"
          value={cSelected}
          onValueChange={cSelection}
          style={styles.checkbox}
        />
     </View>
        <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'26%',marginTop:10,fontSize:18}}>Organic Fruits & Vegetables
          </Text>
         <CheckBox
        
          value={dSelected}
          onValueChange={dSelection}
          style={styles.checkbox}
        />
         </View>
        <View style={{flexDirection:'row',backgroundColor:'#5eb05a'}}>
          <Text style={{marginLeft:10,marginRight:'54%',marginTop:10,fontSize:18}}>cuts & sprouts
          </Text>
         <CheckBox
        
          value={eSelected}
          onValueChange={eSelection}
          style={styles.checkbox}
        />
        </View>
      </View>
      <View style={{marginLeft:'21%',marginRight:'38%',marginTop:'-7%'}}>
      <Button
      style={{marginTop:'-10%'}}
       title='sf'
      >
      </Button>
      </View>

        <View style={{marginLeft:'64%',marginTop:'-8%'}}>
      <Button
      
       title='sf'
      >
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   

 
});
