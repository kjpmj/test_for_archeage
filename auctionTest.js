const request = require('request');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';
const regExpGetMinValue = /(?<=\<em class="gol_num">)[0-9.]+/;
const url = 'https://archeage.xlgames.com/auctions/list/ajax';

// request({
//   method : 'POST',
//   uri : 'https://archeage.xlgames.com/auctions/list/ajax',
//   postData : {
//     sortType: 'BUYOUT_PRICE_ASC',
//     // uuid: charactersCode,
//     searchType: 'NAME',
//     serverCode: 'TOTAL',
//     keywordStr: '훈증시킨 약재',
//     equalKeyword : true,
//     keyword: '훈증시킨 약재'
//   }
// }, function(error, response, body){
//   // console.log(error);
//   // console.log(response);
//   body = body.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
//   // console.log(body);
//   console.log(body.match(regExpGetMinValue))
// });

const callback = function(err, resp, body){
  console.log(err)
  console.log(resp)
  body = body.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '')
  console.log(body)
}

const params = {
  sortType: 'BUYOUT_PRICE_ASC',
  // uuid: charactersCode,
  searchType: 'NAME',
  serverCode: 'TOTAL',
  keywordStr: '훈증시킨 약재',
  equalKeyword : true,
  keyword: '훈증시킨 약재'
}

request.post({url: url, form: params}, callback)