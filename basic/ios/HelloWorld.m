//
//  HelloWorld.m
//  basic
//
//  Created by inspire on 16/6/15.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "HelloWorld.h"
#import "RCTLog.h"

@implementation HelloWorld

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(greeting:(NSString *)name)
{
  RCTLogInfo(@"Saluton, %@", name)
}

@end
