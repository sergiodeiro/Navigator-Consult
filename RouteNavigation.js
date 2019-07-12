
import React, {Component} from 'react';
import {
  SafeAreaView
  ,View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Home from './src/components/home'
import CenaCliente from './src/components/CenaCliente'
import CenaContato from  './src/components/CenaContato'
import CenaEmpresa from  './src/components/CenaEmpresa'
import CenaServico from  './src/components/CenaServico'


export default class RouteNavigation extends Component{

  render(){
    return(
      <Navigator 
        initialRoute={'home'}
          renderScene={(route, navigator) => {
              switch(route){
                case 'home' :   
                  return(<Home navigator={navigator} />);
                case 'cenaCliente':
                    return(<CenaCliente navigator={navigator}/>);
                case 'cenaContato':
                  return(<CenaContato navigator={navigator}/>);
                case 'cenaEmpresa':
                  return(<CenaEmpresa navigator={navigator}/>)
                case 'cenaServico':
                  return(<CenaServico navigator={navigator}/>)
              } 
          }}
      />
    );
  }

}

