import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(50);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alevel, setAlevel] = useState(0);

  const bottles_array = Array.from(Array(13).keys()).splice(1);

  const time_array = Array.from(Array(11).keys()).splice(1);

  const genders = Array();
    genders.push({label: 'Male', value: 'male' });
    genders.push({label: 'Female', value: 'female' });

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
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
          value={weight.toString()}
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
              <Picker.Item style={styles.ddtext}
                key={index} value={(index + 1).toString()} label={bottles.toString()} />
            ))
          }
        </Picker>
        </View>
      <Text style={styles.label}>Time</Text>
        <View style={styles.field}>
        <Picker 
            style={styles.dropdown}
            onValueChange={(itemValue) => setTime(itemValue)}
            selectedValue={time}
          >
            {time_array.map((time,index) => (
              <Picker.Item style={styles.ddtext}
                key={index} value={(index + 1).toString()} label={time.toString()} />
            ))
          }
        </Picker>
        </View>
      <Text style={styles.label}>Gender</Text>
        <RadioForm
          style={styles.radio}
          // formHorizontal={true}
          // labelHorizontal={false}
          labelStyle={{fontSize: 17}}
          buttonSize = {30}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
      <Text style={styles.answer}>{alevel.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={calculate}
      >
        <Text style={styles.btext}>CALCULATE</Text>
      </TouchableOpacity>
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
      fontSize: 50,
      textAlign: 'center',
      color: 'dodgerblue',
      padding: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: 15,
    },
    field: {
      margin: 10,
      borderWidth: 1,
    },
    input: {
      marginLeft: 10,
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    radio: {
      paddingLeft: 10,
      paddingTop: 20,
    },
    ddtext: {
      fontSize: 20,
    },
    answer: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 50,
      color: 'gold',
      paddingBottom: 20,
    }, 
    btext: {
      fontSize: 30,
      color: 'white'
    },
    button: {
      alignItems: "center",
      backgroundColor: 'dodgerblue',
      padding: 15,
    },
  });

 
