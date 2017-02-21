import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput
} from 'react-native';
import {Grid, Row, Col, Button, SocialIcon, List, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {Spacer} from '../components'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class ListaEncartes extends Component {


  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
    );
  }
}
