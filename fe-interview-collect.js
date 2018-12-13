// 插播的面试题
for (var i=0; i<2; i++) {
  console.log(i)
}
// 0
// 1

for (var i=0; i<2; i++) {
  setTimeout(() => console.log(i))
}
// 一个 i
// 2
// 2

for (let i=0; i<2; i++) {
  setTimeout(() => console.log(i))
}
// 很多个 i let i = _i 里面的 i 不会 ++， ++ 的是外面的 i
// 0
// 1

a = 1, 2 // 2 (表达式的值) 等价于
// a = 1
a = (1, 2)

// 2333 毫秒之后打出来的值是多少
// 0
for (
  let i = (setTimeout(() => console.log(i), 2333),0);
  i < 2;
  i++
) {
  console.log(i)
}

// https://www.youtube.com/watch?v=Nzokr6Boeaw
var User = {
  count: 1,
  action: {
    getCount: function () {
      return this.count
    }
  }
}
var getCount = User.action.getCount

setTimeout(() => {
  console.log(User.action.getCount())
})

console.log(getCount())

// 如何使用正则实现函数 numSplit 把任意数字转成千位分隔符形式
function numFormat(num){
  var res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
       return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
          return $1+",";
        });
  })
  return res;
}

var a=1234567894532;
var b=673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"

// 使用 css 实现九宫格

// 跨域

// 配置 webpack

// 实现数组去重 并实现sort

// Js 实现一个观察者模式

// 微信面试题 lazyman