import React from 'react';
import { Components } from 'expo';
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
  MapView
} from 'react-native';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <Components.MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 32.7150491,
          longitude: -117.1664087,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />


    );
  }
}