import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
export default class App extends React.Component {

  state={
    phoneNumber:""
  }

  call=()=>{
    const { phoneNumber } = this.state

    Linking.openURL(`tel:${phoneNumber}`)
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={(text)=>this.setState({phoneNumber:text})}
          style={styles.input} 
          placeholder="911" 
          keyboardType="number-pad"/>
        <TouchableOpacity onPress={()=> this.call()}>
          <Ionicons name="ios-call" style={styles.callTxt}/>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:50,
    fontSize:40,
    color:"#000",
    marginBottom:20
  },
  callTxt:{
    backgroundColor:"#42b883",
    padding:10,
    borderRadius:30,
    width:80,
    textAlign:"center",
    color:"#fff",
    fontSize:30
  }
});
