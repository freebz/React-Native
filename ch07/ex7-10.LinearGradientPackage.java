// 예제 7-10 LinearGradientPackage.java

package com.BV.LinearGradient;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LinearGridientPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
	return Collections.emptyList();
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
	return Collections.emptyList();
    }

    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
	List<ViewManager> modules = new ArrayList<>();
	modules.add(new LinearGradientManager());
	return modules;
    }
}
