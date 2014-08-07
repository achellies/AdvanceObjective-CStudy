//
//  AdvanceObjectiveCViewController.h
//  AdvanceObjectiveC
//
//  Created by achellies on 14-7-15.
//  Copyright (c) 2014年 achellies. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol MyProtocol <NSObject>

@required

+(void) test;
@optional

@end

@interface AdvanceObjectiveCViewController : UIViewController
{
@public
    NSString* test;
    @private
    @protected
}
@end
