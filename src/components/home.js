
import React, {Component} from 'react';
import {
  SafeAreaView
  ,ScrollView
  ,Text
  ,StyleSheet
  ,View
  ,StatusBar
  ,Image
  ,TouchableOpacity
} from 'react-native';
 
import BarraNavegacao from './BarraNavegacao'

//import {logo} from '../img/index'

const logo = require('../img/logo.png')
const menu_cliente = require('../img/menu_cliente.png')
const menu_contato = require('../img/menu_contato.png')
const menu_empresa = require('../img/menu_empresa.png')
const menu_servico = require('../img/menu_servico.png')

export default class Home extends Component{

  render(){
    return(
        <View>
            <StatusBar 
            backgroundColor='#ccc'
            />
            <BarraNavegacao/>

            <View style={{flexDirection:'row',alignSelf:'center',padding:15}}>
                <Image source={logo}></Image>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',padding:15}}>
                <TouchableOpacity onPress={() => {this.props.navigator.push('cenaCliente')}}>
                  <Image style={{marginRight:30}}source={menu_cliente}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigator.push('cenaContato')}}>
                  <Image source={menu_contato}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',padding:15}}>
            <TouchableOpacity onPress={() => {this.props.navigator.push('cenaEmpresa')}}>
                <Image style={{marginRight:30}} source={menu_empresa}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigator.push('cenaServico')}}>
                <Image source={menu_servico}></Image>
            </TouchableOpacity>
            </View>
        </View>
    );
  }

}