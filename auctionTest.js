const request = require('request');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';

request({
  method : 'POST',
  uri : 'https://archeage.xlgames.com/auctions/list/ajax',
  postData : {
    sortType: 'BUYOUT_PRICE_ASC',
    // uuid: charactersCode,
    searchType: 'NAME',
    serverCode: 'TOTAL',
    gradeId: '',
    keywordStr: '철 주괴',
    keyword: '철 주괴',
    aCategory: '',
    bCategory: '',
    cCategory: ''
  }
}, function(error, response, body){
  // console.log(error);
  // console.log(response);
  body = body.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
  console.log(body);
});
