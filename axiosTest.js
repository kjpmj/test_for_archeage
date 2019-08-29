const axios = require('axios');
const charactersCode = 'fea81bc3-6b6e-4e8d-8873-ef7924225f92';
const url = 'https://archeage.xlgames.com/auctions/list/ajax';
const qs = require('querystring');
const regExpGetMinValue = /(?<=\<em class="gol_num">)[0-9.]+/;

const requestBody =  {
  sortType: 'BUYOUT_PRICE_ASC',
  searchType: 'NAME',
  serverCode: 'TOTAL',
  keywordStr: '훈증시킨 약재',
  equalKeyword : true,
  keyword: '훈증시킨 약재'
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

axios.post(url, qs.stringify(requestBody), config)
.then(function (response) {
  console.log(response.data.replace(/^\s+|\s+$/gm, '').replace(/\n/g, ''));
})
.catch(function (error) {
  console.log(error);
});







