import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

//telas
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} initial={true} hideNavBar={true} title="Login"/>
    <Scene key="cadastro" component={Cadastro} hideNavBar={false} title='Criar conta' />
    <Scene key="home" component={Home} hideNavBar={false} title="Home"/>
  </Scene>
);

class Index extends Component {
  render() {
      return <Router scenes={scenes}/>
  }
}

export default Index
