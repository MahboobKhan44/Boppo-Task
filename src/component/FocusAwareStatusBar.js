import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//color
import { GRAY_DARK, WHITE } from '../global/color';

const FocusAwareStatusBar = ({ isLightBar, isTopSpace, isTransparent }) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const isAndroid = Platform.OS === 'android';

  return <>
    <StatusBar translucent={true} />
    {
      isFocused
        ?
        isAndroid
          ?
          <View style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : WHITE }}>
            <StatusBar
              backgroundColor={isTransparent ? 'transparent' : GRAY_DARK}
              barStyle={isLightBar ? 'light-content' : 'dark-content'}
            />
          </View>
          :
          <View style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : WHITE }}>
            <StatusBar
              barStyle={isLightBar ? 'light-content' : 'dark-content'}
            />
          </View >
        :
        null
    }
  </>
};

export default FocusAwareStatusBar;