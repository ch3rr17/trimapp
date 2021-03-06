import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/trim-logo2.png')}
              style={styles.welcomeImage}
            />
            <Text style={styles.title}>TRIM</Text>
          </View>
          <TouchableOpacity activeOpacity={.5} onPress={this._login}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} onPress={this._register}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _login = () => {
    this.props.navigator.push('login');
  } 

  _register = () => {
    this.props.navigator.push('register');
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#701215'
  },
  title: {
    color: '#F5D04C',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#477b65',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#F5D04C',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 15,
    marginLeft: 20,
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
