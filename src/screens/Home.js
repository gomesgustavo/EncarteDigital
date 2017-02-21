import React, { Component } from 'react';
import {Text, Alert, View, StyleSheet, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';

//tab view
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import ListEncartes from './ListEncartes';
import CadastroEncarte from './CadastroEncarte';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
       { key: '1', title: 'Lista' },
       { key: '2', title: 'Cadastro' },
      ]
    };
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar
              style={styles.tabbar}
              tabStyle={styles.tabbarTab}
              indicatorStyle={styles.tabbarIndicator}
              {...props} />;
  };


  _renderScene = ({ route }) => {
     switch (route.key) {
     case '1':
        return <ListEncartes />
     case '2':
        return <CadastroEncarte />
     default:
       return null;
   }
 };

  render() {
      return (
          <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderFooter={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 50,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    backgroundColor: "#4169E1",
  },
  tabbarTab: {
    backgroundColor: "transparent"
  },
  tabbarIndicator: {
    backgroundColor: "gray",
  },
});

export default Home
