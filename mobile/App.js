import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'mobx-react/native'
import {ActivityIndicator} from 'react-native'
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility'
import Navigation from './src/screens';
import { cacheImages } from './src/utils/cacheImages';
import { images } from './src/constants/images';
import {theme} from './src/constants/theme'
import { store } from './src/models';


export default class App extends React.Component {
  state={
    isReady:false
  }
componentDidMount(){
  this.cacheAssets();
}
cacheAssets= async ()=>{
  const imageAssets = cacheImages(Object.values(images))
  await Promise.all([...imageAssets]);

  this.setState({isReady:true})
}

  render(){
    if(!this.state.isReady){
      return(
        <Box f={1} center bg="white">
          <ActivityIndicator size="large"/>
        </Box>
      )
    }


  return (
    <Provider {...store}>
    <UtilityThemeProvider theme={theme}>
    <Navigation/>
    </UtilityThemeProvider>
    </Provider>
  );
  }
}


