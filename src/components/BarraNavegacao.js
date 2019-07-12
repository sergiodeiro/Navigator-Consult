
import React, {Component} from 'react';
import {
  SafeAreaView
  ,ScrollView
  ,Text
  ,StyleSheet
  ,View
  ,Image
  ,TouchableOpacity
} from 'react-native';

const btn_voltar = require('../img/btn_voltar.png');

export default class BarraNavegacao extends Component{

  render(){
    if(this.props.voltar){
      return(
        <ScrollView>
            <View style={{flex:1,backgroundColor:this.props.corFundo}}>
              <SafeAreaView>
                  <View style={[styles.barraTitulo,{backgroundColor:this.props.corFundo}]}>
                      <TouchableOpacity onPress={ () => {this.props.navigator.pop();}}>
                        <Image source={btn_voltar} style={{padding:10}}/>
                      </TouchableOpacity>
                      <Text style={styles.title}> SSD Consultoria </Text>
                  </View>
              </SafeAreaView>
              </View>
        </ScrollView>
      );
    }
    return(
      <ScrollView>
          <View style={{flex:1,backgroundColor:'#ccc'}}>
            <SafeAreaView>
                <View style={styles.barraTitulo}>
                    <Text style={styles.title}> SSD Consultoria </Text>
                </View>
            </SafeAreaView>
            </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
    barraTitulo:{
        backgroundColor:'#ccc'
        ,padding:10
        ,height:60
        ,flexDirection:'row'
    },
    title:{
        textAlign:'center'
        ,flex:1
        ,fontSize:18
        ,color:'#000'
        ,padding:10
    }
});

