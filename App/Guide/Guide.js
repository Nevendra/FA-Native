import React, { Component } from 'react';
import { ButtonComp } from '../Button/Button.js';

import {
  AppRegistry,
  Button,
  Dimensions,
  NavigationExperimental,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const Guide = ({  goBack }) => {
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>ThisIsTheSecondScene</Text>
        <TextInput
          placeholder='name?'
        />
      <ButtonComp text="Go Back" onPress={()=> { goBack() }}/>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headText: {
    fontSize: 24
  },
  quesText: {
    fontSize: 18
  }
});
module.exports = Guide 
