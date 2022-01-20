import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [weight, setWeight] = useState(50);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alevel, setAlevel] = useState(0);

  const bottles_array = [
    {label: '1', value: '1'},
    {label: '2', value: '2' },
    {label: '3', value: '3' }
  ]

  const time_array = [
    {label: '1', value: '1'},
    {label: '2', value: '2' }
  ]

  const genders = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' }
  ]

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10
    let gramsleft = grams - (burning * time);

    if (gender === 'male') {
      result = (gramsleft / (weight * 0.7));
    } else {
      result = (gramsleft / (weight * 0.6));
    }
    if (result < 0) {
      result = 0;
    }
    setAlevel(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alcometer</Text>
      <Text style={styles.label}>Weight</Text>
        <View style={styles.field}>
        <TextInput 
          style={styles.input}
          value={weight}
          onChangeText={text => setWeight(text)}
          placeholder='in kilograms'
          keyboardType='numeric'/>
        </View>
      <Text style={styles.label}>Bottles</Text>
        <View style={styles.field}>
        <Picker 
            onValueChange={(itemValue) => setBottles(itemValue)}
            selectedValue={bottles}
          >
            {bottles_array.map((bottles,index) => (
              <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
            ))
          }
        </Picker>
        </View>
      <Text style={styles.label}>Time</Text>
        <View style={styles.field}>
        <Picker 
            onValueChange={(itemValue) => setTime(itemValue)}
            selectedValue={time}
          >
            {time_array.map((time,index) => (
              <Picker.Item key={index} label={time.label} value={time.value}/>
            ))
          }
        </Picker>
        </View>
      <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize = {30}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
      <Text>{alevel.toFixed(2)}</Text>
      <Button onPress={calculate} title='Calculate'></Button>
  </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      color: 'dodgerblue',
      padding: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
    field: {
      margin: 10,
      borderWidth: 1,
      textAlign: 'center',

    },
    input: {
      marginLeft: 10,
    },
    radio: {
      marginTop: 10,
      marginBottom: 10,
    },
  });

 
