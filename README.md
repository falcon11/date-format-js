# date-format

format Date

## example

```js
var formatDate = require('./date-format.js');

function test(date, formatStr) {
  var str = formatDate(date, formatStr);
  console.log(`${date} ${formatStr} === ${str}`);
}
test(new Date(), 'yyyy-MM-dd hh:mm:ss fff');
test(new Date(1949, 10, 1), 'yyyy-MM-dd HH:mm:ss fff');
test(new Date(), 'yyyyMMdd');
test(new Date(2019, 2, 4, 18), 'hh:mm:ss');
test(new Date(1949, 10, 1), 'MM/dd/yyyy');
test();
test(new Date());
test(null);
```

```js
/// output
Mon Feb 25 2019 17:22:12 GMT+0800 (CST) yyyy-MM-dd hh:mm:ss fff === 2019-02-25 17:22:12 462
Tue Nov 01 1949 00:00:00 GMT+0800 (CST) yyyy-MM-dd HH:mm:ss fff === 1949-11-01 12:00:00 000 am
Mon Feb 25 2019 17:22:12 GMT+0800 (CST) yyyyMMdd === 20190225
Mon Mar 04 2019 18:00:00 GMT+0800 (CST) hh:mm:ss === 18:00:00
Tue Nov 01 1949 00:00:00 GMT+0800 (CST) MM/dd/yyyy === 11/01/1949
undefined undefined ===
Mon Feb 25 2019 17:22:12 GMT+0800 (CST) undefined ===
null undefined ===
```
