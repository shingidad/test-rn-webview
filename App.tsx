/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';


const App = () => {
  return (
    <SafeAreaView style={{width: '100%',height: '100%'}}>
       <WebView source={{ uri: 'https://naver.com' }} style={{width: '100%', height: '100%'}}/>
    </SafeAreaView>
  );
};

export default App;
