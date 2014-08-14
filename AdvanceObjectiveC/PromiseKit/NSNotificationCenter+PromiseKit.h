#import <Foundation/NSNotification.h>
#import "fwd.h"


@interface NSNotificationCenter (PromiseKit)
/**
 Fires once for the named notification.
 
 thens the NSNotification object and the NSNotification’s userInfo as the second argument.
*/
+ (PMKPromise *)once:(NSString *)notificationName;
@end
