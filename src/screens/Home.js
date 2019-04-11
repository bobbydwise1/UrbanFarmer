import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import FooterComponent from '../components/FooterComponent';

export default class Home extends Component {
  render () {
    return(
      <View>
        <Text>Home</Text>
        <Button
          title="Add Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="Item List"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
         <FooterComponent/>
      </View>
    )
  }
}