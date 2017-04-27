import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

// const personIcon = require('../assets/images/person-icon2.png');
// const lockIcon = require('../assets/images/lock-icon3.png');

export default class LoginScreen extends React.Component {
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
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="EmailAddress"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>

        </View>

 
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#701215',
  },
  title: {
    color: '#F5D04C',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  background: {
    width: null,
    height: null,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  logoImage: {
    width: 140,
    height: 38
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 15,
    marginLeft: 20,
    justifyContent: 'center'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980B9'
  },
  icon: {
    width: 20,
    height: 20
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
  forgotPasswordText: {
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center'
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
    height: 38,
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
