import React, {Component} from 'react';
import {
  View
  ,StatusBar
  ,Image
  ,Text
  ,StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheServico = require('../img/detalhe_servico.png')

export default class CenaServico extends Component{

constructor(){
  super();
}

render(){
        return(
            <View> 
                <StatusBar  backgroundColor='#19D1C8'/>
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#19D1C8'/>

                <View style={styles.detalhe}>
                    <Image source={detalheServico} style={{marginLeft:20}} />
                    <Text style={styles.txtSize}> Serviço</Text>
                </View>
                <View style={styles.detalheServico}>
                    <Text style={styles.txtDetalhe}>- Consultoria</Text>
                    <Text style={styles.txtDetalhe}>- Processos</Text>
                    <Text style={styles.txtDetalhe}>- Acompanhamento de Projetos</Text>
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
        ,color:'#19D1C8'
        ,marginLeft: 10
        ,marginTop: 25
    },
    detalheServico:{
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