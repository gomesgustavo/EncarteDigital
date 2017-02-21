import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput
} from 'react-native';
import {Grid, Row, Col, Button, SocialIcon, Tile} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {Spacer} from '../components'


export default class ListaEncartes extends Component {

  render() {
    return (
      <Tile
         imageSrc={{require: ('../imgs/logo.png')}}
         title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
         featured
         caption="Some Caption Text"
      />
    );
  }
}
