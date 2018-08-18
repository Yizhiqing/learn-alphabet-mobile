import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerCase: '',
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
      this.setState({ lowerCase: text.toLowerCase() });
      Expo.Speech.speak(text.toString(), { language: 'en-us' });
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Text style={styles.number} >{this.state.lowerCase}</Text>
        <Text style={styles.number} >{this.state.text}</Text>
      </TouchableOpacity>
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
