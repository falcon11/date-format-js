/**
 * examples
 * yyyy-MM-dd hh:mm:ss fff === 2019-02-25 16:41:51 544
 * yyyy-MM-dd HH:mm:ss fff === 2019-02-25 4:41:51 547 pm
 * yyyyMMdd === 20190225
 * hh:mm:ss === 16:41:51
 * mmss === 4151
 * MM-dd === 02-25
 * MM/dd/yyyy === 02/25/2019
 * undefined ===
 * null ===
 *
 * @param {Date} date
 * @param {String} formatStr example: yyyy-MM-dd hh:mm:ss fff. hh is 24 hours, HH is 12 hours with am/pm
 * @returns
 */
function formatDate(date, formatStr) {
  if (!date || !formatStr) return '';
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateOfMoth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  var result = formatStr;
  result = result.replace('yyyy', year);
  result = result.replace('MM', ('0' + month).slice(-2));
  result = result.replace('dd', ('0' + dateOfMoth).slice(-2));
  result = result.replace('hh', ('0' + hours).slice(-2));
  result = result.replace('mm', ('0' + minutes).slice(-2));
  result = result.replace('ss', ('0' + seconds).slice(-2));
  result = result.replace('fff', ('00' + milliseconds).slice(-3));
  if (/HH/.test(result)) {
    var temp = hours % 12;
    temp = temp ? temp : 12;
    result = result.replace('HH', temp);
    result = result + ' ' + (hours >= 12 ? 'pm' : 'am');
  }
  return result;
}

module.exports = formatDate;
