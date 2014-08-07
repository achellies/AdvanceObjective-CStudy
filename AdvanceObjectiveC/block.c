//
//  block.c
//  AdvanceObjectiveC
//
//  Created by achellies on 14-7-16.
//  Copyright (c) 2014年 achellies. All rights reserved.
//

#include <stdio.h>

// 执行这句命令就能把oc的代码转成c的代码
// clang -rewrite-objc block.c

int func()
{
    ^{ printf("Hello, World!\n"); } ();
    return 0;
}