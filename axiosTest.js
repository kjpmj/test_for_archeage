const axios = require('axios');
const charactersCode = 'fea81bc3-6b6e-4e8d-8873-ef7924225f92';
const url = 'https://archeage.xlgames.com/auctions/list/ajax';
const qs = require('querystring');

const regExpGetMinGold = /(?<=<em class="gol_num gol">)\d+(?=<\/em> <i class="ico_gold">)/;
const regExpGetMinSilver = /(?<=<em class="gol_num">)\d+(?=<\/em> <i class="ico_silver">)/;
const regExpGetMinBronze = /(?<=<em class="gol_num">)\d+(?=<\/em> <i class="ico_bronze">)/;

let itemInfo = {
  name : '훈증시킨 약재',
  gold : 0,
  silber : 0,
  bronze : 0
}

const requestBody =  {
  sortType: 'BUYOUT_PRICE_ASC',
  searchType: 'NAME',
  serverCode: 'TOTAL',
  keywordStr: itemInfo.name,
  equalKeyword : true,
  keyword: itemInfo.name
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

axios.post(url, qs.stringify(requestBody), config)
.then(function (response) {
  const body = response.data.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
  const goldArr = regExpGetMinGold.exec(body);
  const silverArr = regExpGetMinSilver.exec(body);
  const bronzeArr = regExpGetMinBronze.exec(body);

  if(Array.isArray(goldArr)){
    itemInfo.gold = goldArr[0];
  }else{
    itemInfo.gold = 0;
  }

  if(Array.isArray(silverArr)){
    itemInfo.silver = silverArr[0];
  }else{
    itemInfo.silver = 0;
  }

  if(Array.isArray(bronzeArr)){
    itemInfo.bronze = bronzeArr[0];
  }else{
    itemInfo.bronze = 0;
  }

  console.log(`gold : ${itemInfo.gold} silver : ${itemInfo.silver} bronze : ${itemInfo.bronze}`);
  
})
.catch(function (error) {
  console.log(error);
});







