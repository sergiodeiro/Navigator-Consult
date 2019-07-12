import React, {Component} from 'react';
import {
  View
  ,StatusBar
  ,Image
  ,Text
  ,StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require('../img/detalhe_empresa.png')

export default class CenaEmpresa extends Component{

constructor(){
  super();
}

render(){
        return(
            <View> 
                <StatusBar  backgroundColor='#EC7148'/>
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#EC7148' />

                <View style={styles.detalhe}>
                    <Image source={detalheEmpresa} style={{marginLeft:20}} />
                    <Text style={styles.txtSize}> Empresa</Text>
                </View>
                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtDetalhe}>Empresa totalmente focada em uma missão que é o crescimento.</Text>
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
        ,color:'#EC7148'
        ,marginLeft: 10
        ,marginTop: 25
    },
    detalheEmpresa:{
        padding:20
        ,marginTop:10
    },txtDetalhe:{
        fontSize:18
        ,marginLeft:8
    },txtMail:{
        marginTop:10
        ,fontSize:18
        ,marginLeft:8
    }


})