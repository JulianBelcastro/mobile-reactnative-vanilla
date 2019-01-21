/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    Firstname: t.String,
    Lastname: t.String,
});

const Options = {
    order:[ 'Firstname', 'Lastname'],
    fields:{
        firstName: {
        placeholder: 'Please enter a Firstname',
        error: 'Try again',
        },
        lastName: {
        placeholder: 'Please enter a Lastname',
                error: 'Try again',
        },

    }
}

export default class App extends Component{
    handleSubmit = () => {
    };
    render(){
        return(
        <View style={styles.container}>
        <Text style={styles.header}> Add a New User </Text>
        <Text style={styles.inputTitle}>Firstname</Text>
           <TextInput
            placeholder="Please enter a Firstname"
            style={styles.input}
            underlineColorAndroid="transparent"
            />
                    <Text style={styles.inputTitle}>Lastname</Text>
           <TextInput
                placeholder="Please enter a Lastname"
                style={styles.input}
                underlineColorAndroid="transparent"
             />
            <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.button}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
    height: 50,
    backgroundColor: 'blue',
    textAlign: 'center',
      fontSize: 24,
      color: 'white',
      fontWeight: "300",
      marginBottom: 20,
    },
  input: {
  height: 50,
  fontSize: 24,
  margin: 20,
  //borderStyle: 'rounded',
  borderWidth: 1,
  },
  inputTitle: {
  color: '#000000',
  margin: 20,
  fontSize: 24,
  marginBottom: 2,
  },
  container: {
    backgroundColor: '#ffffff',
  },
  button: {
  padding: 20,
  backgroundColor: 'blue',
  color: 'white',
  fontSize: 24,
  textAlign: 'center',
  marginLeft: 20,
  marginRight: 20,
  marginTop: 250,
    }
});
