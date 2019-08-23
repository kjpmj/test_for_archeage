const request = require('request');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';

request({
  method : 'POST',
  uri : 'https://archeage.xlgames.com/auctions/list/ajax',
  postData : {
    sortType: 'BUYOUT_PRICE_ASC',
    uuid: charactersCode,
    searchType: 'NAME',
    serverCode: 'TOTAL',
    gradeId: '',
    keywordStr: '훈증',
    keyword: '훈증',
    aCategory: '',
    bCategory: '',
    cCategory: ''
  }
}, function(error, response, body){
  console.log(response);
});