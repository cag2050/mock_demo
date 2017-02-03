/**
 * Created by chenanguo on 17/2/3.
 */
// 使用 Mock
var Mock = require('mockjs');
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
// JSON.stringify方法

// 中间参数:可以是数组或函数,比如:
// 1.数组,['name','sex'];
// 2.函数,就是把系列化后的每一个对象（记住 是每一个）传进方法里面进行处理。
// function (key, value) {
//     if (key === "sex") {
//         return ["女", "男"][value];
//     }
//     return value;
// }

// 第3个参数,有4种情况:
// 1.数字,就是定义缩进几个字符，当然 如果大于10 ，则最大值为10。
// 2.转义字符，比如“\t”，表示回车，那么它每行一个回车。
// 3.字符串，就在每行输出值的时候把这些字符串附加上去。当然，最大长度也是10个字符。
// 4.可以省略
