//
//  AdvanceObjectiveCViewController.m
//  AdvanceObjectiveC
//
//  Created by achellies on 14-7-15.
//  Copyright (c) 2014年 achellies. All rights reserved.
//

#import "AdvanceObjectiveCViewController.h"
#import <objc/message.h>
#import <objc/objc.h>
#import <objc/runtime.h>
#import <dispatch/dispatch.h>
#import <unistd.h>
#import <sys/uio.h>
#import <objc/objc-load.h>

@interface AdvanceObjectiveCViewController () <UITableViewDataSource, UITableViewDelegate> {
    NSArray *topics ;
}
@property (assign, nonatomic, readwrite) NSString *kvo;
@property (weak, nonatomic) IBOutlet UITableView *tableView;
@end

void externalIntMethod(id self, SEL _cmd, int i) {
    printf("externalMethod, class = %s, method = %s, param = %d, %s, Line %d.\n", class_getName([self class]), sel_getName(_cmd), i, __func__, __LINE__);
}

void externalFloatMethod(id self, SEL _cmd, NSNumber *i) {
    printf("externalMethod, class = %s, method = %s, param = %f, %s, Line %d.\n", class_getName([self class]), sel_getName(_cmd), [i floatValue], __func__, __LINE__);
}

@interface Swizzle : NSObject

-(void) instanceMethodA:(float) i;
-(void) instanceMethodB:(float) i;

+(void) classMethodA:(int) i;
+(void) classMethodB:(float) i;

-(void) unknownMethod:(NSString *)method;
@end

@implementation Swizzle

-(void) instanceMethodA:(float) i {
    Method method = class_getInstanceMethod([self class], @selector(instanceMethodA:));
    printf("method name = %s, method type encoding = %s, param = %f.\n", "instanceMethodA", method_getTypeEncoding(method), i);
}

-(void) instanceMethodB:(float) i  {
    Method method = class_getInstanceMethod([self class], @selector(instanceMethodB:));
    printf("method name = %s, method type encoding = %s, param = %f.\n", "instanceMethodB", method_getTypeEncoding(method), i);
}

+(void) classMethodA:(int)i {
    Method method = class_getClassMethod([self class], @selector(classMethodA:));
    printf("method name = %s, method type encoding = %s, param = %d.\n", "classMethodA", method_getTypeEncoding(method), i);
}

+(void) classMethodB:(float)i {
    Method method = class_getClassMethod([self class], @selector(classMethodB:));
    printf("method name = %s, method type encoding = %s, param = %f.\n", "classMethodB", method_getTypeEncoding(method), i);
}

-(void) unknownMethod:(NSString *)method {
    printf("unknownMethod, class = %s, method = %s, param = %s.\n", class_getName([self class]), sel_getName(_cmd), [method UTF8String]);
}
@end

#pragma mark - Dynamic Create Class & Protocol Methods

void protocolInstanceMethod(id self, SEL _cmd, NSString* msg) {
    printf("protocolInstanceMethod, class = %s, method = %s, param = %s.\n", class_getName([self class]), sel_getName(_cmd), [msg UTF8String]);
}

void protocolClassMethod(id self, SEL _cmd, NSString* msg) {
    printf("protocolClassMethod, class = %s, method = %s, param = %s.\n", class_getName([self class]), sel_getName(_cmd), [msg UTF8String]);
}

#pragma mark - Dynamic Method Resolution Methods

void dynamicInstanceMethod(id self, SEL _cmd, NSString *msg) {
    printf("dynamicInstanceMethod, class = %s, method = %s, param = %s.\n", class_getName([self class]), sel_getName(_cmd), [msg UTF8String]);
}

void dynamicClassMethod(id self, SEL _cmd, NSString *msg) {
    printf("dynamicClassMethod, class = %s, method = %s, param = %s.\n", class_getName([self class]), sel_getName(_cmd), [msg UTF8String]);
    
}

#pragma mark - NSObject Category

@interface NSObject (Extend)
-(id) performSelector:(SEL)aSelector withObjects:(NSArray*)objects;
-(id) performSelector:(SEL)aSelector withParameters:(id)param1, ...;
@end

@implementation NSObject (Extend)

-(id) performSelector:(SEL)aSelector withObjects:(NSArray*)objects {
    NSMethodSignature *signature = [[self class ] instanceMethodSignatureForSelector:aSelector];
    signature = [self methodSignatureForSelector:aSelector];
    
    NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:signature];
    [invocation setTarget:self];
    [invocation setSelector:aSelector];
    
    int index = 2;
    for (id object in objects) {
        [invocation setArgument:(void*)&object atIndex:index++];
    }
    [invocation invoke];
    if ([signature methodReturnLength]) {
        id data;
        [invocation getReturnValue:&data];
        return data;
    } else {
        return nil;
    }
}

-(id) performSelector:(SEL)aSelector withParameters:(id)param1, ... {
    NSMethodSignature *signature = [self methodSignatureForSelector:aSelector];
    
    NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:signature];
    [invocation setTarget:self];
    [invocation setSelector:aSelector];

    [invocation setArgument:&param1 atIndex:2];
    va_list arg_prt;
    va_start(arg_prt, param1);
    int index = 3;
    int length = [signature numberOfArguments];
    for (;index < length; ++index) {
        void* param = va_arg(arg_prt, void*);
        [invocation setArgument:&param atIndex:index];
    }
    va_end(arg_prt);
    
    [invocation invoke];
    if ([signature methodReturnLength]) {
        id data;
        [invocation getReturnValue:&data];
        return data;
    } else {
        return nil;
    }
}

@end

void uncaughtExceptionHandler(NSException *exception) {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:[exception name] message:exception.reason delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil, nil];
    [alertView show];
}

@implementation AdvanceObjectiveCViewController

#pragma mark - ViewController Life Circle

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    NSSetUncaughtExceptionHandler(&uncaughtExceptionHandler);
    topics = @[ @"selector", @"objc_sendMsg", @"_cmd", @"imp", @"NSUncaughtExceptionHandler", @"block", @"kvo", @"shallow copy/deap copy",  @"swizzling", @"dynamic create protocol & class", @"dynamic method resolution", @"dynamic loading", @"message forwarding", @"keep unrecognized selector crash", @"类簇", @"run command"];

    UIImage *image = [UIImage imageNamed:@"tableview_header.png"];
    UIImageView *imageView = [[UIImageView alloc] initWithImage:image];
    [imageView setFrame:CGRectMake(0, 0, self.tableView.frame.size.width, (image.size.height / image.size.width) * self.tableView.frame.size.width)];
    UIView *header = [[UIView alloc] initWithFrame:imageView.frame];
    [header addSubview:imageView];
    self.tableView.tableHeaderView = header;

    self.tableView.dataSource = self;
    self.tableView.delegate = self;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Setter & Getter
-(NSString *) kvo {
    if (!_kvo) {
        _kvo = @"kvo title";
    }
    return _kvo;
}

#pragma mark - UITableViewDelegate

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 48.0;
}

- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
    return 48.0;
}


- (UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section {
    UILabel *title = [[UILabel alloc] initWithFrame:CGRectMake(self.tableView.frame.origin.x, self.tableView.frame.origin.y, self.tableView.frame.size.width, 48)];
    title.textAlignment = NSTextAlignmentCenter;
    title.textColor = [UIColor whiteColor];
    title.backgroundColor = [UIColor blackColor];
    title.text = @"ObjectiveC Advance";
    
    return title;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *cell = [tableView cellForRowAtIndexPath:indexPath];
    if ([cell.textLabel.text isEqualToString:@"objc_sendMsg"]) {
        [self testObjcMsgSend];
    } else if ([cell.textLabel.text isEqualToString:@"_cmd"]) {
        [self test_cmd];
    } else if ([cell.textLabel.text isEqualToString:@"selector"]) {
        [self testSelector];
    } else if ([cell.textLabel.text isEqualToString:@"imp"]) {
        [self testIMP];
    } else if ([cell.textLabel.text isEqualToString:@"NSUncaughtExceptionHandler"]) {
        [self testUncaughtException];
    } else if ([cell.textLabel.text isEqualToString:@"block"]) {
        [self testBlock];
    } else if ([cell.textLabel.text isEqualToString:@"kvo"]) {
        [self testKVO];
    } else if ([cell.textLabel.text isEqualToString:@"shallow copy/deap copy"]) {
        [self testShallowDeepCopy];
    } else if ([cell.textLabel.text isEqualToString:@"dynamic create protocol & class"]) {
        [self testDynamicCreate];
    } else if ([cell.textLabel.text isEqualToString:@"swizzling"]) {
        [self testSwizzling];
    } else if ([cell.textLabel.text isEqualToString:@"dynamic method resolution"]) {
        [self testDynamicMethodResolution];
    } else if ([cell.textLabel.text isEqualToString:@"message forwarding"]) {
        [self testMessageForwarding];
    } else if ([cell.textLabel.text isEqualToString:@"dynamic loading"]) {
        [self showUnImplemetionDialog];
    } else if ([cell.textLabel.text isEqualToString:@"keep unrecognized selector crash"]) {
        [self testUnrecognizedSelector];
    } else if ([cell.textLabel.text isEqualToString:@"run command"]) {
        [self testRunCommand];
    }
}

#pragma mark - UITableViewDataSource


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return topics.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    NSString * reusableIdentifier = @"cell";
    UITableViewCell *cell = [self.tableView dequeueReusableCellWithIdentifier:reusableIdentifier];
    
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:reusableIdentifier];
    }
    cell.textLabel.text = topics[indexPath.item];
    cell.selectionStyle = UITableViewCellSelectionStyleBlue;
    cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    
    return cell;
}

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 1;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    return @"ObjectiveC 进阶";
}

#pragma mark - NSKeyValueObserving

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context {
    if ([keyPath isEqualToString:@"kvo"]) {
        NSString *newValue = [change objectForKey:NSKeyValueChangeNewKey];
        NSString *oldValue = [change objectForKey:NSKeyValueChangeOldKey];
        [self showAlert:oldValue message:newValue];
    } else {
        [super observeValueForKeyPath:keyPath ofObject:object change:change context:context];
    }
}

#pragma mark - Private Instance Methods
-(id)emptyMethod {
    printf("protocolInstanceMethod, class = %s, method = %s.\n", class_getName([self class]), sel_getName(_cmd));
    return nil;
}

-(id) showAlert:(NSString*)title message:(NSString*)message {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:message delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil, nil];
    [alertView show];
    return nil;
}

-(id) showAlert:(NSString*) message {
    return [self showAlert:@"ObjectiveC 进阶" message:message];;
}

-(void) showUnImplemetionDialog {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"" message:@"暂未实现" delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil, nil];
    [alertView show];
}

#pragma mark - block

-(void) testBlock {
    // https://developer.apple.com/library/ios/documentation/cocoa/Conceptual/Blocks/Articles/bxUsing.html
    // http://blog.csdn.net/u010180166/article/details/19040541
    __block int blockChangeLocalParam = 10;
    __weak AdvanceObjectiveCViewController *controller = self;
    int (^squre_block)(int) = ^(int n) {
        blockChangeLocalParam = n;
        
        [controller showAlert:@"block"];
        return n * n;
    };

    squre_block(25);
    
    dispatch_queue_t queue = dispatch_queue_create("", DISPATCH_QUEUE_SERIAL); // serial queue
    
    dispatch_block_t block = ^ {
        dispatch_async (dispatch_get_main_queue(), ^(void) {
            [controller showAlert:@"block"];
        });
    };

    dispatch_async(queue, block);

#if !OS_OBJECT_USE_OBJC
    // If your deployment target is lower than iOS 6.0 or Mac OS X 10.8
    // You need to use dispatch_retain and dispatch_release on your queue. ARC does not manage them.
    dispatch_release(queue);
#endif
    
    int (^squre_block2)(int) = [squre_block copy];// Block_copy(squre_block);

    queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0); // concurrent queue
    
    size_t count = 10;
    dispatch_apply(count, queue, ^(size_t i) {
        dispatch_async(dispatch_get_main_queue(), ^(void) {
            // [controller showAlert:[NSString stringWithFormat:@"%zu", i ]];
        });
    });

    // don't do this
    void (^blockArray[3])(void);  // an array of 3 block references
    for (int i = 0; i < 3; ++i) {
        blockArray[i] = ^{ printf("hello, %d\n", i); };
        // WRONG: The block literal scope is the "for" loop.
    }
    blockArray[0]();
    // don't do this either
    void (^block2)(void);
    int i = random();
    if (i > 1000) {
        block2 = ^{ printf("got i at: %d\n", i); };
        // WRONG: The block literal scope is the "then" clause.
    } else {
        // block2 nil
    }
    block2();
    
    [self anotherBlock];
}

/*
 1.复制的行为
 
 对block调用复制，有以下几种情况：
 
 1.对全局区的block调用copy，会返回原指针，并且这期间不处理任何东西（至少目前的内部实现是这样）；
 
 2.对栈上的block调用copy，每次会返回新复制到堆上的block的指针，同时，所有__block变量都会被复制至堆一份(多次拷贝，只会生成一份)。
 
 3.对已经位于heap上的block，再次调用copy，只会增加block的引用计数。
 
 为什么我们不讨论retian的行为？原因是并没有Block_retain()这样的函数，而且objc里面的retain消息发送给block对象后，其内部实现是什么都不做。
 
 2.objc类中的block复制
 
 objc类实例方法中的block如果被复制至heap，那么当前实例会被增加引用计数，当这个block被释放时，此实例会被减少引用计数。
 
 但如果这个block没有使用当前实例的任何成员，那么当前实例不会被增加引用计数。这也是很自然的道理，我既然没有用到这个instance的任何东西，那么我干嘛要retian它？
 
 我们要注意的一点是，我看到网上有很多人说block引起了实例与block之间的循环引用（retain-cycle），并且给出解决方案：不直接使用self而先将self赋值给一个临时变量，然后再使用这个临时变量。
 */
-(void) anotherBlock {
    __block int i = 1024; // 此时i在栈上
    int j = 1;
    void (^block)(void);
    block = ^{
        printf("i = %d, j = %d", i, j); // 此时block在栈上， 因为i声明了__block，i在栈上，j会被当做实参传入block的底层实现函数中，当block中的代码被执行时，j已经不是原来的j了
    };
    ++j;
    block();
    int (^blockHeap)(int, int) = [block copy]; // Block_copy(block); // 复制block后，blockHeap位于堆上，有__block标记的i会被复制一份到堆上
}

#pragma mark - KVO

-(void) testKVO {
    // http://www.cnblogs.com/scorpiozj/archive/2011/03/14/1983643.html
    [self addObserver:self forKeyPath:@"kvo" options:NSKeyValueObservingOptionNew | NSKeyValueObservingOptionOld context:nil];
    
    //[self setValue:@"test kvo" forKeyPath:@"kvo"];
    self.kvo = @"xxxxxxxxxx";

    [self removeObserver:self forKeyPath:@"kvo" context:nil];
}

#pragma mark - objc_msgSend

-(void) testObjcMsgSend {
    SEL sel = @selector(showAlert:);
    sel = NSSelectorFromString(@"showAlert:");
    objc_msgSend(self, sel, NSStringFromSelector(sel));
}

#pragma mark - IMP

-(void) testIMP {
    // Class class = [AdvanceObjectiveCViewController class];
    SEL testSel = @selector(showAlert:);
    IMP test_imp = [AdvanceObjectiveCViewController instanceMethodForSelector:testSel];
    // IMP test_imp2 = [self methodForSelector:testSel];
    // test_imp = [self methodForSelector:@selector(showAlert:)];
    test_imp(self, testSel, NSStringFromSelector(testSel));
}

#pragma mark - selector

-(void) testSelector {
    // [self performSelector:@selector(showAlert:) withObject:[NSString stringWithUTF8String:(const char*)(@selector(showAlert:))]];
    [self performSelector:@selector(showAlert:) withObject:NSStringFromSelector(@selector(showAlert:))];
    if ([self respondsToSelector:@selector(showAlert:message:)]) {
        [self performSelector:@selector(showAlert:message:) withObjects:@[@"selector", @"performSelector:withObjects:"]];
        [self performSelector:@selector(showAlert:message:) withParameters:@"selector", @"performSelector:withParameters:" ];
    }
}

#pragma mark - _cmd

-(NSInteger) fibonacci:(NSInteger) n {
    if (n > 2) {
        return [self fibonacci:n - 1] + [self fibonacci:n - 2];
    }
    
    return n > 0 ? 1 : 0;
}

-(NSNumber *) fibonacci_cmd:(NSNumber *) n {
    if ([n intValue] > 2) {
        int n1 = [[self performSelector:_cmd withObject:[NSNumber numberWithInt:([n intValue] - 1)]] intValue];
        int n2 = [[self performSelector:_cmd withObject:[NSNumber numberWithInt:([n intValue] - 2)]] intValue];
        return [NSNumber numberWithInt:(n1 + n2)];
    }
    
    return [NSNumber numberWithInt:([n intValue] > 0 ? 1 : 0)];

}

-(NSNumber *) fibonacci_msgSend:(NSNumber *) n {
    if ([n intValue] > 2) {
        int n1 = [objc_msgSend(self, _cmd, [NSNumber numberWithInt:([n intValue] - 1)]) intValue];
        int n2 = [objc_msgSend(self, _cmd, [NSNumber numberWithInt:([n intValue] - 2)]) intValue];
        return [NSNumber numberWithInt:(n1 + n2)];
    }
    return [NSNumber numberWithInt:([n intValue] > 0 ? 1 : 0)];
}

-(NSNumber *) fibonacci_IMP:(NSNumber *) n {
    static IMP func;
    if (!func) {
        func = [self methodForSelector:_cmd];
    }
    
     if ([n intValue] > 2) {
         int n1 = [func(self, _cmd, [NSNumber numberWithInt:([n intValue] - 1)]) intValue];
         int n2 = [func(self, _cmd, [NSNumber numberWithInt:([n intValue] - 2)]) intValue];
         
         return [NSNumber numberWithInt:(n1 + n2)];
    }
    
   return [NSNumber numberWithInt:([n intValue] > 0 ? 1 : 0)];
}

-(void) test_cmd {
    [self showAlert:[NSString stringWithFormat:@"normal = %d, cmd = %@, msg = %@, imp = %@", [self fibonacci:10], [self fibonacci_cmd:[[NSNumber alloc] initWithInt:10]], [self fibonacci_msgSend:[[NSNumber alloc] initWithInt:10]], [self fibonacci_IMP:[[NSNumber alloc] initWithInt:10]]]];
}

#pragma mark - NSUncaughtExceptionHandler

-(void) testUncaughtException {
    NSMutableArray *array = [[NSMutableArray alloc] init];
    [array addObject:nil];
}

#pragma mark - Deap Copy 

-(void) testShallowDeepCopy {
    // shallow copy deep copy
    // http://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/Collections/Articles/Copying.html
    // http://www.cnblogs.com/scorpiozj/archive/2011/01/25/1944496.html
    // 非容器类型， copy 浅拷贝，引用计数加1， mutableCopy深拷贝，分配新内存
    NSString *string = [NSString stringWithFormat:@"%s", "test" ]; // add to autorelease pool， 此时的引用计数为2
    NSString *stringCopy = [string copy]; // reference count = 3
    NSMutableString *mutableString = [string mutableCopy]; // reference count = 1
    [mutableString appendString:@"!!!"];

    NSString *string2 = [[NSString alloc] initWithCharacters:"1234" length:4]; // reference count = 1
    NSString *string2Copy = [string2 copy]; // reference count = 2
    NSMutableString *mutableString2 = [string2 mutableCopy]; // reference count = 1
    [mutableString2 appendString:@"!!!!"];
    
    // 容器类型， copy 浅拷贝，引用计数加1，容器内的对象的指针复制（引用计数不变），mutableCopy深拷贝，为容器分配新的内存，但容器内的指针复制（引用计数加1）
    // autorelease pool, array reference count = 2; string2 reference count = 3
    NSArray *array = [NSArray arrayWithObjects:@"1", @"2", string2, nil];
    NSArray *arrayCopy = [array copy]; // arrayCopy & array reference count = 3, string2 reference count = 3
    // arrayCopy = nil; // array reference count = 2; string2 reference count = 3;
    NSMutableArray *mutableArray = [array mutableCopy]; // mutableArray reference count = 1, string2 reference count = 4
    [mutableArray addObject:@"3"];
    [mutableArray removeObject:string2];
    
    // array2 reference count = 1, string2 reference count = 4
    NSArray *array2 = [[NSArray alloc] initWithObjects:@"1", @"2", string2, nil];
    NSArray *array2Copy = [array2 copy]; // array2Copy reference count = 2; string2 reference count = 4
    NSMutableArray *mutableArray2 = [array2 mutableCopy]; // mutableArray2 reference count = 1; string2 reference = 5
    [mutableArray2 addObject:@"3"];
    
    NSArray *array3 = [NSArray arrayWithObjects:[NSMutableString stringWithString:@"first"],[NSString stringWithString:@"b"],@"c",nil];
    NSArray *deepCopyArray3 = [[NSArray alloc] initWithArray: array3 copyItems: YES];
    NSArray* trueDeepCopyArray3 = [NSKeyedUnarchiver unarchiveObjectWithData:
                                  [NSKeyedArchiver archivedDataWithRootObject: array3]];
}

#pragma mark 
#pragma mark - Run Command
NSString * runCommand(NSString* c) {

    NSString* outP; FILE *read_fp;  char buffer[BUFSIZ + 1];
    int chars_read; memset(buffer, '\0', sizeof(buffer));
    read_fp = popen(c.UTF8String, "r");
    if (read_fp != NULL) {
        chars_read = fread(buffer, sizeof(char), BUFSIZ, read_fp);
        if (chars_read > 0) outP = [NSString stringWithUTF8String:buffer];
        pclose(read_fp);
    }
    return outP;
}

-(void)testRunCommand {
    NSString *temp = runCommand(@"ls -la /");
    printf([temp UTF8String]);

    temp = runCommand(@"pwd");
    printf([temp UTF8String]);
}

#pragma mark - Exchange Implemention
-(void) testSwizzling {
    // https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ObjCRuntimeRef/Reference/reference.html#jumpTo_5
    // https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html#//apple_ref/doc/uid/TP40008048-CH100
    Swizzle *swizzle = [[Swizzle alloc] init];
    
    // before exchange
    NSLog(@"before exchange");
    [swizzle instanceMethodA:10];
    [swizzle instanceMethodB:10.0];
    [Swizzle classMethodA:10];
    [Swizzle classMethodB:10.0];
    
    Method m1 = class_getInstanceMethod([swizzle class], @selector(instanceMethodA:));
    Method m2 = class_getInstanceMethod([swizzle class], @selector(instanceMethodB:));

    IMP m1Imp = method_getImplementation(m1);
    struct objc_method_description* description = method_getDescription(m1);

    method_exchangeImplementations(m1, m2);
    
    Method m3 = class_getClassMethod([swizzle class], @selector(classMethodA:));
    Method m4 = class_getClassMethod([swizzle class], @selector(classMethodB:));
    method_exchangeImplementations(m3, m4);
    
    // after exchange
    NSLog(@"after exchange");
    // 函数交换后如果这两个函数的入参类型不一致，会导致函数接收到的参数不正确
    [swizzle instanceMethodA:10.0];
    [swizzle instanceMethodB:10];
    [Swizzle classMethodA:10];
    [Swizzle classMethodB:10.0];
    
    Class cls1 = [swizzle class];
    Class cls2 = [Swizzle class];
    Class cls3 = [[swizzle class]class];
    Class cls4 = objc_getMetaClass("Swizzle");
    Class cls5 = objc_getClass("Swizzle");

    // 将类外部的方法添加到class内 Instance Method
    // int或者NSInteger可以正常传递，其他基础类型（例如：float、double则不能正常传递）需要通过NSNumber或者其他object来传递
    class_addMethod([swizzle class], @selector(externalIntMethod:), (IMP)externalIntMethod , "v@:i");
    objc_msgSend(swizzle, @selector(externalIntMethod:), 10);

    // 添加 Class Method
    NSNumber *number = [NSNumber numberWithFloat:10.0];
    BOOL b = class_addMethod(objc_getMetaClass("Swizzle"), @selector(externalFloatMethod:), (IMP)externalFloatMethod, "v@:@");
    [Swizzle performSelector:@selector(externalFloatMethod:) withObject:number];
}

#pragma mark - Runtime

+(id)invokeInstance:(id)obj method: (NSString*) methodName withParams:(id)param1, ... {
    SEL sel = sel_registerName([methodName UTF8String]);
    Class cls = object_getClass(obj);
    Method method = class_getClassMethod(self, sel);
    int numberOfArguments = method_getNumberOfArguments(method);
    NSMethodSignature *signature = [obj methodSignatureForSelector:sel];
    NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:signature];
    [invocation setTarget:obj];
    [invocation setSelector:sel];
    
    [invocation setArgument:&param1 atIndex:2];
    va_list arg_prt;
    va_start(arg_prt, param1);
    int index = 3;
    for (;index < numberOfArguments; ++index) {
        void* param = va_arg(arg_prt, void*);
        [invocation setArgument:&param atIndex:index];
    }
    va_end(arg_prt);
    
    [invocation invoke];
    if ([signature methodReturnLength]) {
        id data;
        [invocation getReturnValue:&data];
        return data;
    } else {
        return nil;
    }
}

+(id)invokeClass:(Class)cls method: (NSString*) methodName withParams:(id)param1, ... {
    SEL sel = sel_registerName([methodName UTF8String]);
    Method method = class_getClassMethod(cls, sel);
    int numberOfArguments = method_getNumberOfArguments(method);
    NSMethodSignature *signature = [cls methodSignatureForSelector:sel];
    NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:signature];
    [invocation setTarget:cls];
    [invocation setSelector:sel];
    
    [invocation setArgument:&param1 atIndex:2];
    va_list arg_prt;
    va_start(arg_prt, param1);
    int index = 3;
    for (;index < numberOfArguments; ++index) {
        void* param = va_arg(arg_prt, void*);
        [invocation setArgument:&param atIndex:index];
    }
    va_end(arg_prt);
    
    [invocation invoke];
    if ([signature methodReturnLength]) {
        id data;
        [invocation getReturnValue:&data];
        return data;
    } else {
        return nil;
    }
}

-(void) testDynamicCreate {
    // 通过Runtime来调用Instance Method和Class Method
    // objc_ class_ object_ sel_
    [[self class] invokeInstance:self method:@"showAlert:" withParams:@"xxxx invokeInstance"];
    [[self class] invokeClass:[self class] method:@"invokeInstance:method:withParams:" withParams:self, @"showAlert:", @"xxxxxx invokeClass"];
    
    // 动态创建protocol
    const char *runtimeProtocolName = "RuntimeProtocol";
    Protocol *runtimeProtocol = objc_allocateProtocol(runtimeProtocolName);
    protocol_addMethodDescription(runtimeProtocol, sel_registerName("protocolInstanceMethod:"), "v@:@", YES, YES);
    protocol_addMethodDescription(runtimeProtocol, sel_registerName("protocolClassMethod:"), "v@:@", YES, NO);
    objc_registerProtocol(runtimeProtocol);

    // 动态创建class
    const char *runtimeClassName = "RuntimeSwizzle";
    Class newCls = objc_allocateClassPair([Swizzle class], runtimeClassName, 0);
    if (!newCls) {
        newCls = objc_getClass(runtimeClassName);
    }
    class_addProtocol(newCls, runtimeProtocol);
    
    NSUInteger varSize;
    NSUInteger varAlignemnt;
    NSGetSizeAndAlignment("@", &varSize, &varAlignemnt);
    class_addIvar(newCls, "number", varSize, varAlignemnt, "@");
    objc_registerClassPair(newCls);

    class_addMethod(newCls, @selector(protocolInstanceMethod:), (IMP) protocolInstanceMethod, "v@:@");
    BOOL b = class_addMethod([newCls class], @selector(protocolClassMethod:), (IMP) protocolClassMethod, "v@:@");
    
    unsigned int count;
    Method *list = class_copyMethodList(newCls, &count);
    for (int i = 0; i < count; i++) {
        Method m = list[i];
        SEL sel = method_getName(m);
        printf("method name = %s, method sel = %s.\n", method_getName(m), sel_getName(sel));
    }
    
    id instance = [[newCls alloc] init];
    // [instance performSelector:@selector(protocolInstanceMethod:) withObject:@"xxxx invokeInstance"]; // also okay
    [[self class] invokeInstance:instance method:@"protocolInstanceMethod:" withParams:@"xxxx invokeInstance"];
    
    // TODO: why dynamic add class method failed?
    [instance performSelector:@selector(protocolClassMethod:) withObject: @"xxxx invokeClass"];
    // [[self class] invokeClass:newCls method:@"protocolClassMethod:" withParams:@"xxxx invokeClass"];
    
    // set and get runtime variable
    object_setIvar(instance, class_getInstanceVariable([instance class], "number"), @"runtime variable");
    id number = object_getIvar(instance, class_getInstanceVariable([instance class], "number"));
    
    unsigned int propertyCount = 0;
    objc_property_t *propertyArray = class_copyPropertyList([self class], &propertyCount);
    NSLog(@"property of AdvanceObjectiveCViewController:");
    for (int i = 0; i < propertyCount; i++)
    {
        objc_property_t property = propertyArray[i];
        printf("%s : %s\n",property_getName(property),property_getAttributes(property));
    }
}

#pragma mark - Dynamic Method Resolution

+ (BOOL)resolveClassMethod:(SEL)sel {
    if (sel == @selector(dynamicClassMethod:)) {
        class_addMethod(objc_getMetaClass(class_getName([self class])), sel, (IMP) dynamicClassMethod, "v@:@");
        return YES;
    }
    
    return [super resolveClassMethod:sel];
}

+ (BOOL)resolveInstanceMethod:(SEL)sel  {
    if (sel == @selector(dynamicInstanceMethod:)) {
        class_addMethod([self class], sel, (IMP) dynamicInstanceMethod, "v@:@");
        return YES;
    }
    
    return [super resolveInstanceMethod:sel];
}

-(void) testDynamicMethodResolution {
    // 当调用method时，会调用到resolveClassMethod resolveInstanceMethod进行查找，此时可以在这两个方法中进行method的动态添加
    [self performSelector:@selector(dynamicInstanceMethod:) withObject:@"dynamicInstanceMethod"];
    [[self class] performSelector:@selector(dynamicClassMethod:) withObject:@"dynamicClassMethod"];
}

#pragma mark - Message Forwarding

- (void)forwardInvocation:(NSInvocation *)anInvocation {
    if (sel_isEqual(sel_registerName("unknownMethod:"), [anInvocation selector])) {
        [anInvocation setTarget:[[Swizzle alloc] init]];
        [anInvocation invoke];
    }

    if (![self respondsToSelector:anInvocation.selector]) {
        anInvocation.selector = @selector(emptyMethod);
        [anInvocation invoke];
    }
}


- (id)forwardingTargetForSelector:(SEL)aSelector {
    id target = [super forwardingTargetForSelector:aSelector];
    if (target == nil && sel_isEqual(sel_registerName("unknownMethod:"), aSelector)) {
        target = [[Swizzle alloc] init];
    }
    if (!target) {
        target = self;
    }
    return target;
}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector {
    NSMethodSignature * signature = [super methodSignatureForSelector:aSelector];
    if (signature == nil && sel_isEqual(aSelector, sel_registerName("unknownMethod:"))) {
        signature =  [Swizzle instanceMethodSignatureForSelector:aSelector];
    }
    if (!signature) {
        signature = [self methodSignatureForSelector:@selector(emptyMethod)];
    }
    return signature;
}

-(void) testMessageForwarding {
    // 如果向该class发送未被处理的消息，首先会调用到forwardingTargetForSelector:,如果这个类返回了处理这个消息的实例，则不会接下来调用methodSignatureForSelector:和forwardInvocation:
    objc_msgSend(self, sel_registerName("unknownMethod:"), @"Message Forwarding");
    [self performSelector:sel_registerName("unknownMethod:") withObject:@"Message Forwarding"];
}

#pragma mark - Keep unRecognized Selector
-(void) testUnrecognizedSelector {
    objc_msgSend(self, sel_registerName("unknownMethod2:arg1:arg2:"), @"Message Forwarding");
    NSString *a = [self performSelector:sel_registerName("unknownMethod2:arg1:arg2:") withObject:@"Message Forwarding"];
}

@end
