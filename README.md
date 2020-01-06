# ADate
JavaScript的Date对象工具

## 安装和使用
ES6使用方法
```
npm install adate
```
```
import ADate from 'adate'
let date = new ADate()
```

浏览器使用方法
```
<script src="./dist/adate.module.js"></script>

<script>
let date = new ADate()
</script>
```

## 日期格式化 (format)
```
let date = new ADate()
date.format('Y-M-D H:I:S') // 2019-08-01 09:59:01
date.format('Y-m-d h:i:s') // 2019-8-1 9:59:1
date.format('Y/m/d') // 2019/8/1
date.format('H时I分S秒') // 09时59分01秒
```

### 带0前戳
- Y 年份 2019
- M 月份 08
- D 日期 01
- H 小时 09
- I 分钟 59
- S 秒数 01

### 不带0前戳
- y 年份 19
- m 月份 8
- d 日期 1
- h 小时 9
- i 分钟 59
- s 秒数 1

## 判断日期是否相等 （same）
```
let date1 = new ADate(2019, 0, 1) // 2019-01-01
let date2 = new ADate(2019, 0, 1) // 2019-01-01
let date3 = new ADate(2018, 0, 1) // 2019-01-31
// 判断是否同一天
date1.sameDate(date2) // true
// 判断是否同一年
date1.smaeYear(date3) // false
date1.smaeYear(date2) // true
// 判断同一个月
date1.sameMonth(date2) // true
```

## 日期比较（compare）
```
let date1 = new ADate(2019, 0, 1) // 2019-01-01
let date2 = new ADate(2019, 0, 2) // 2019-01-02
let date3 = new ADate(2019, 0, 1) // 2019-01-01
let date4 = new ADate(2018, 11, 0) // 2018-12-31
date1.compare(date2) // -1
date1.compare(date3) //  0
date1.compare(date4) //  1
```

## 日期计算（compute）
```
let date = new ADate(2019, 0, 1)
date.compute('d', 3).format('Y-M-D')  // 2019-01-04 三天后
date.compute('d', -3).format('Y-M-D') // 2018-12-29 三天前
date.compute('y', 1).format('Y-M-D')  // 2020-01-01 一年后
```

## 复制日期 (copy)
```
let date = new ADate()
date.copy()
```
