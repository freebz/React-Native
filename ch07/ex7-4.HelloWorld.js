// 예제 7-4 Depends/HelloWorld.js는 HelloWorld 네이티브 모듈을 감싸는 자바스크립트 모듈이다

import { NativeModules } from 'react-native';
export default NativeModules.HelloWorld;
