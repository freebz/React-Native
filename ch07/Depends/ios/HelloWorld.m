// 예제 7-2 Depends/iOS/HelloWorld.m

#import "HelloWorld.h"
//#import "RCTLog.h"
#import <React/RCTLog.h>

@implementation HelloWorld

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(greeting:(NSString *)name)
{
  RCTLogInfo(@"Saluton, %@", name);
}

@end
