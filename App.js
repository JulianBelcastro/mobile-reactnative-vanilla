/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import renderIf from './renderIf';
import DatePicker from 'react-native-datepicker';
import Moment from 'react-moment';

export default class App extends Component{

    constructor(){
    super();
    this.state={
        firstname:'',
        lastname:'',
        dateOfBirth:'30-01-1980',
        serverResponse: null
        }
    }

    handleSubmit = (text, field) => {

    if(field == 'firstname')
    {
        this.setState({
        firstname:text,
        })
    }
    else if(field == 'lastname')
    {
        this.setState({
        lastname:text,
        })
    }
    else if(field == 'dateOfBirth')
    {}
    }

    submit(){
        if(this.state.firstname == '' || this.state.lastname == ''){
        this.setState({
        serverResponse:'Please enter a valid firstname and lastname!',
            })
        return;
        }
        let collection={}
        collection.firstname = this.state.firstname,
        collection.lastname = this.state.lastname,
        collection.dateOfBirth = this.state.dateOfBirth,
        //console.warn(collection);


        fetch('http://techchallenge.mountain-pass.com.au/api/v1/saveUserData',{
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({
                'Content-Type' : 'application/json',
            })
         }).then(res =>res.json())
         .catch(error => console.error('Error:', error))
         .then(response => {
            this.setState({

                serverResponse:JSON.stringify(response)
         });

         console.log(JSON.stringify(response));
    });
   }

    render(){
        return(
        <View style={styles.container}>
        <Text style={styles.header}> Add a New User </Text>
        <Text style={styles.inputTitle}>Firstname</Text>
           <TextInput
                placeholder="Please enter a Firstname"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text => this.handleSubmit(text, 'firstname'))}
            />

           <Text style={styles.inputTitle}>Lastname</Text>
           <TextInput
                placeholder="Please enter a Lastname"
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text => this.handleSubmit(text, 'lastname'))}
             />
                <DatePicker
                style={styles.datePicker}
                 mode ="date"
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 //onDateChange={(date => this.handleSubmit(date, 'dateOfBirth'))}
                 />

                 {renderIf(this.state.serverResponse,
                   <Text style={styles.response}>
                    {this.state.serverResponse}
                     </Text>)}


           <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.submit()}}>
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
        textAlign: 'center',
        paddingTop: 20,
        height: 60,
        backgroundColor: 'blue',
        fontSize: 24,
        color: 'white',
        fontWeight: "300",
        marginBottom: 20,
    },
    input: {
        height: 50,
        fontSize: 24,
        margin: 20,
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
      marginTop: 140,
        },
  datePicker: {
      width: 300,
      alignItems: 'center',
      margin: 20
        },
  response: {
      color: 'blue',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
      }
});
