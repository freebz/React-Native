// 예제 7-3 자바스크립트 코드에서 HelloWorld 모듈 사용하기

import { NativeModules } from 'react-native';
let HelloWorld = NativeModules.HelloWorld;
HelloWorld.greeting('Bonnie');
