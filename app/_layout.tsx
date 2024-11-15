import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>Telegram</Text>
          <Text style={styles.text2}>Country</Text>
          <TextInput style={styles.inputtext1} placeholder="" />
          <Text style={styles.text3}>Phone Number</Text>
          <TextInput style={styles.inputtext2} placeholder="" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('Login')}>
          <Text></Text>
          </TouchableOpacity>
          
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "blue",
  borderRadius:100,
  borderWidth:1,
  fontSize:20,
  width:50,
  height:50,
  margin:10,
  left:100,

},
button2:{

 right:93,
},
text1:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},
text3:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:94,
},
text2:{
  fontFamily:"Arial",
  fontSize:15,
  color:"black",
  right:119,
},
inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:15,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:15,
  width:300,
  height:30,
  marginTop:10
 },


})