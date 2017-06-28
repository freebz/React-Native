// 예제 4-15 단순히 crossplatform.js 파일을 불러와서 사용하면 된다.
//          index.ios.js와 index.android.js 파일의 사용법은 같다.

import {
  AppRegistry,
} from 'react-native';

import CrossPlatform from './crossplatform';

AppRegistry.registerComponent('PlatformSpecific', () => CrossPlatform);
