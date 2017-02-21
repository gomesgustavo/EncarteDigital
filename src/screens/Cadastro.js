import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput
} from 'react-native';
import {Grid, Row, Col, Button, SocialIcon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {Spacer} from '../components'


export default class Cadastro extends Component {

constructor(props){
    super(props);
    this.state = {
      loading: false,
      razao_social  : '',
      telefone      : '',
      cnpj          : '',
      endereco      : '',
      qt_empregados : '',
      email         : '',
      password      : '',
    }
  }


  cadastrar = () => {
    this.setState({loading: true});
    fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        })}).then((responseData) => {
        if (responseData.status == 200) {
            Actions.home();
        }else {Alert.alert('Dados inválidos', responseData.status.toString())}
    }).catch((error) => {
        console.log(error);
    }).then(()=> this.setState({loading: false})).done();
  }


  render() {
    return (
      <Grid>
          <Col style={{alignItems:'center'}}>

            <Row size={15} style={{marginTop: 80}}>
                <View style={{width: 300}}>
                  <SocialIcon
                    title='Criar conta usando o Facebook'
                    button
                    type='facebook'
                  />
                </View>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="Razão Social" onChangeText={(text) => this.setState({razao_social: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="Telefone" onChangeText={(text) => this.setState({telefone: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="CNPJ" onChangeText={(text) => this.setState({cnpj: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="Endereço" onChangeText={(text) => this.setState({endereco: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="Quantidade de Empregados" onChangeText={(text) => this.setState({qt_empregados: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="E-mail" onChangeText={(text) => this.setState({email: text})}/>
            </Row>

            <Row size={10}>
              <TextInput style={[styles.input]} placeholder="Senha" secureTextEntry onChangeText={(text) => this.setState({password: text})}/>
            </Row>

            <Spacer size={5}/>

            <Row size={10}>
                <View>
                  <Button  small icon={{name: 'done'}} title='Cadastrar' onPress={() => this.cadastrar()} loading={this.state.loading}/>
                </View>
            </Row>

        </Col>
    </Grid>
    );
  }
}



const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    borderColor: Platform.OS === 'android' ? 'transparent': 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10
  }

});
