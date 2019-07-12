import React, {Component} from 'react';
import {
  View
  ,StatusBar
  ,Image
  ,Text
  ,StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContato = require('../img/detalhe_contato.png')

export default class CenaContato extends Component{

constructor(){
  super();
}

render(){
        return(
            <View> 
                <StatusBar  backgroundColor='#61BD8C'/>
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#61BD8C' />

                <View style={styles.detalhe}>
                    <Image source={detalheContato} style={{marginLeft:20}} />
                    <Text style={styles.txtSize}> Contato</Text>
                </View>
                <View style={styles.detalheContato}>
                    <Text style={styles.txtDetalhe}>TEL: (11) 1234-1234</Text>
                    <Text style={styles.txtDetalhe}>TEL: (11) 1234-1234</Text>
                    <Text style={styles.txtMail}>EMAIL: manocontador@hotmail.com</Text>
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
        ,color:'#61BD8C'
        ,marginLeft: 10
        ,marginTop: 25
    },
    detalheContato:{
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