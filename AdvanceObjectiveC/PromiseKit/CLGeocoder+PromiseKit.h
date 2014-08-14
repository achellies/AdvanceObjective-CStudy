#import <CoreLocation/CLGeocoder.h>
#import "fwd.h"

@interface CLGeocoder (PromiseKit)
+ (PMKPromise *)reverseGeocode:(CLLocation *)location;
+ (PMKPromise *)geocode:(id)addressDictionaryOrAddressString;
@end
