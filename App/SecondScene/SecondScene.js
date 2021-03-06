import React, { Component } from 'react';
import {
  Button,
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const secondScene = ({ onPress, goBack, onGuide}) => {
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>ThisIsTheSecondScene</Text>
        <TextInput
          placeholder='name?'
        />
        <Button
          title='camera'
          onPress={onPress}
          style={styles.button}
        />
        <Button
          title='go back'
          onPress={goBack}
          style={styles.button}
        />
        <Button
          title='go Guide'
          onPress={onGuide}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'rebeccapurple',
    borderWidth: 1
  },
  button: {
    height: 20,
    width: 250,
    color: '#F7A213',
  }
})

module.exports = secondScene;
