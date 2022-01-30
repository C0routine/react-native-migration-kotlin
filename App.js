import React from 'react';
import {TouchableOpacity, View, Text, NativeModules} from 'react-native';

const App = () => {
  const nativeModules = NativeModules.FirstModule;

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      <TouchableOpacity
      style={{backgroundColor:'lightgreen', padding:30}}
      onPress={async() => {
        const test = await nativeModules.getTest();
        console.log(test);
      }}>
        <Text style={{color:'black', fontSize:25}}>TEST</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;