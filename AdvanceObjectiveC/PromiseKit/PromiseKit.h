#import "Promise.h"

#import "PromiseKit/Promise+When.h"
#import "PromiseKit/Promise+Until.h"
#import "PromiseKit/Promise+Pause.h"

#ifdef PMK_ACACCOUNTSTORE
#import "ACAccountStore+PromiseKit.h"
#endif
#import "AVAudioSession+PromiseKit.h"
#import "CLGeocoder+PromiseKit.h"
#import "CLLocationManager+PromiseKit.h"
#ifdef PMK_CKCONTAINER
#import "CKContainer+PromiseKit.h"
#endif
#ifdef PMK_CKDATABASE
#import "CKDatabase+PromiseKit.h"
#endif
#import "MKDirections+PromiseKit.h"
#import "MKMapSnapshotter+PromiseKit.h"
#import "NSNotificationCenter+PromiseKit.h"
#import "NSURLConnection+PromiseKit.h"
#import "SKProductsRequest+PromiseKit.h"
#import "SLRequest+PromiseKit.h"
#import "UIActionSheet+PromiseKit.h"
#import "UIAlertView+PromiseKit.h"
#import "UIView+PromiseKit.h"
#import "UIViewController+PromiseKit.h"


#ifndef PMK_NO_UNPREFIXATION
// I used a typedef but it broke the tests, turns out typedefs are new
// types that have consequences with isKindOfClass and that
// NOTE I will remove this at 1.1
typedef PMKPromise Promise PMK_DEPRECATED("Use PMKPromise. Use of Promise is deprecated. This is a typedef, and since it is a typedef, there may be unintended side-effects.");
#endif
