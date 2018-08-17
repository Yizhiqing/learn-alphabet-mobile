import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Start',
    };
  }

  onPress = () => {
    let text = this.state.text;
    if (text === 'Start') {
      this.setState({ text: 'A' });
      Expo.Speech.speak('A', { language: 'en-us' });
    } else {
      if (text === 'Z') {
        text = 'A';
      } else {
        text = String.fromCharCode(text.charCodeAt(0) + 1);
      }
      this.setState({ text });
      Expo.Speech.speak(text.toString(), { language: 'en-us' });
    }
  }

  render() {
    return (
      <View style={styles.container} onPress={this.onPress}>
        <Text style={styles.number} >{this.state.text}</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 130,
    fontWeight: 'bold',
  },
});