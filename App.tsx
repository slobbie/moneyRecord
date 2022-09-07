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
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SvgIcon from './src/components/common/svgIcon/SvgIcon';
import Config from 'react-native-config';
import {Text} from 'react-native-svg';

const App = () => {
  const Key = Config.API_KEY;
  console.log(Key);
  return (
    <SafeAreaView>
      {/* <SvgIcon name="PowerOff" fill="red" /> */}
      <View style={{...Styles.test}}>
        <Text>APIdasasasa:</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  test: {
    width: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
});

export default App;
