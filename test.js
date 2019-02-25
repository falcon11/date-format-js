var formatDate = require('./date-format.js');

function test(date, formatStr) {
  var str = formatDate(date, formatStr);
  console.log(`${date} ${formatStr} === ${str}`);
}

/******************** test case ********************/
test(new Date(), 'yyyy-MM-dd hh:mm:ss fff');
test(new Date(1949, 10, 1), 'yyyy-MM-dd HH:mm:ss fff');
test(new Date(), 'yyyyMMdd');
test(new Date(2019, 2, 4, 18), 'hh:mm:ss');
test(new Date(1949, 10, 1), 'MM/dd/yyyy');
test();
test(new Date());
test(null);
