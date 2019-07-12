import React, {Component} from 'react';
import {
  View
  ,StatusBar
  ,Image
  ,Text
  ,StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheCliente = require('../img/detalhe_cliente.png')
const cliente1 = require('../img/cliente1.png')
const cliente2 = require('../img/cliente2.png')

export default class CenaCliente extends Component{

constructor(){
  super();
}

render(){
        return(
            <View style={{}}> 
                <StatusBar  backgroundColor='#B9C941'/>
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#B9C941'/>

                <View style={styles.detalhe}>
                    <Image source={detalheCliente} />
                    <Text style={styles.txtSize}> Nossos Clientes</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente1}/>
                    <Text style={styles.txtDetalhe}> Cliente 1 </Text>
                    <Image source={cliente2}/>
                    <Text style={styles.txtDetalhe}> Cliente 2</Text>
                </View>
                    
            </View>
        );
    }
}


const styles = StyleSheet.create({
    detalhe:{
        flexDirection:'row'
        ,marginTop:10
    },
    txtSize:{
        fontSize:30
        ,color:'#B9C941'
        ,marginLeft: 10
        ,marginTop: 25
    },
    detalheCliente:{
        padding:20
        ,marginTop:10
    },txtDetalhe:{
        fontSize:18
        ,marginLeft:20
    }


})