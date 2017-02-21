import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Alert,
  Platform,
  TouchableHighlight
} from 'react-native';
import {Grid, Row, Col, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {Spacer} from '../components'


export default class Login extends Component {

constructor(props){
  super(props);
  this.state = {
    login: '',
    password: '',
    loading: false
  }
}

_login = () => {
    this.setState({loading:true});
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.login,
            password: this.state.password
        })
    }).then((responseData) => {
        if (responseData.status == 200) {
            Actions.home();
        }else {
          Alert.alert('Acesso inválido', responseData.status.toString());
        }
    }).catch((error) => {
        Alert.alert(error);
        console.log(error);
    }).then(()=> this.setState({loading: false})).done();
  }



  render() {
    return (
      <Grid>
          <Col style={{alignItems:'center'}}>

              <Row size={40}>
                  <Image source={require('../imgs/logo.png')} style={styles.logo} resizeMode={'contain'} />
              </Row>

              <Row size={10}>
                  <TextInput style={[styles.input]} placeholder="login" onChangeText={(text) => this.setState({login: text})}/>
              </Row>

              <Row size={10}>
                  <TextInput style={[styles.input]} placeholder="senha" secureTextEntry onChangeText={(text) => this.setState({password: text})}/>
              </Row>

              <Spacer size={25}/>

              <Row size={30}>
                <View>
                  <Button  small icon={{name: 'done'}} title='ENTRAR' onPress={() => this._login()} loading={this.state.loading}/>
                </View>
              </Row>

              <Row size={10}>
                  <TouchableHighlight onPress={() => Actions.cadastro()}  underlayColor={'transparent'}>
                    <Text style={{color:'gray', fontSize: 18}}>
                        Cadastre-se
                    </Text>
                  </TouchableHighlight>
              </Row>

          </Col>
      </Grid>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 260,
    height: 260,
    backgroundColor: 'transparent',
    marginTop: 40
  },
  input: {
    width: 300,
    height: 40,
    borderColor: Platform.OS === 'android' ? 'transparent': 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10
  }

});
