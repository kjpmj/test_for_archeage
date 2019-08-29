const axios = require('axios');
const charactersCode = 'fea81bc3-6b6e-4e8d-8873-ef7924225f92';
const url = 'https://archeage.xlgames.com/auctions/list/ajax';

// axios.post(url, {
//   sortType: 'BUYOUT_PRICE_ASC',
//   searchType: 'NAME',
//   serverCode: 'TOTAL',
//   keywordStr: '훈증시킨 약재',
//   equalKeyword : true,
//   keyword: '훈증시킨 약재'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// Send a POST request
axios({
  method: 'post',
  url: url,
  responseType: 'html',
  headers: { 
    'Content-Encoding': 'gzip',
    'Content-Language': 'ko-KR',
    'Content-Type': 'text/html;charset=UTF-8',
    'Expires': 0,
    'Pragma': 'no-cache',
    'Server': 'nginx',
    'Transfer-Encoding': 'chunked',
  },
  data: {
    sortType: 'BUYOUT_PRICE_ASC',
    searchType: 'NAME',
    serverCode: 'TOTAL',
    keywordStr: '',
    equalKeyword : true,
    keyword: ''
  }
})
.then(function (response) {
  console.log(response)
});





