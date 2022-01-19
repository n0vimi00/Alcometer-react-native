import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(50);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alevel, setAlevel] = useState(0);

function calculate(e) {
  let result = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10
  let gramsleft = grams - (burning * time);
  e.preventDefault();
  if (gender === 'male') {
    result = (gramsleft / (weight * 0.7));
  } else {
    result = (gramsleft / (weight * 0.6));
  }
  setAlevel(result);
}
  return (
    <View style={styles.container}>
    <Text style={styles.field}>Euros</Text>
    <TextInput style={styles.field} value={euros} onChangeText={text => setEuros(text)}
    keyboardType='decimal-pad'/>
    <Text style={styles.field}>Pounds</Text>
    <Text style={styles.field}>{pounds.toFixed(2)}</Text>
    <Button onPress={calculate} title='Calculate'></Button>
  </View>
);
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
   },
   field: {
     marginBottom: 10,
   }
});
