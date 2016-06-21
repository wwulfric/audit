var AV = require('leanengine');
/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('somestrangestringforthisrequest', function(request, response) {
  response.success('hello world!');
});
module.exports = AV.Cloud;
