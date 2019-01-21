/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    firstName:t.String,
    lastName: t.String,
});

const Options = {
    order:[ 'firstName', 'lastName'],
    fields:{
        firstName: {
        placeholder: 'Please enter a firstName',
        },
        lastName: {
        placeholder: 'Please enter a lastName'
        },

    }
}

export default class App extends Component{
    handleSubmit = () => {
    };
    render(){
        return(
        <View style={styles.container}>
        <Form
            type={User}
            options={Options}
          />
        <Button
            title="Submit"
            onPress={this.handleSubmit}
          />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
