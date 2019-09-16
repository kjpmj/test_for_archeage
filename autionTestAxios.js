const axios = require('axios');
const qs = require('querystring');
const _ = require('underscore');

const charactersCode = 'fea81bc3-6b6e-4e8d-8873-ef7924225f92';
const listUrl = 'https://archeage.xlgames.com/auctions/list/ajax';
const frontUrl = 'https://archeage.xlgames.com/auctions/record/'
const backUrl = '/ajax?callback=getPriceCallBack';

const regExpItemCode = /(?<=data-id=")\d+/;
const regExpItemGrade = /(?<=data-grade=")\d+/;
const regExpBronze = /\d{1,2}$/;
const regExpSilver = /\d{1,2}(?=\d{2}$)/;
const regExpGold = /\d+(?=\d{4}$)/;

let detailUrl = '';

let itemInfo = {
  code : '',
  grade : '',
  name : '훈증시킨 약재',
  gold : 0,
  silver : 0,
  bronze : 0,
  baseDate : ''
}

const reqListBody =  {
  sortType: 'BUYOUT_PRICE_ASC',
  searchType: 'NAME',
  serverCode: 'TOTAL',
  keywordStr: itemInfo.name,
  equalKeyword : true,
  keyword: itemInfo.name
}

const reqDetailBody = {
  serverCode: 'TOTAL'
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}

const getPriceCallBack = (itemPriceInfo) => {
  const todayPriceInfo = _.last(itemPriceInfo.records);
  
  itemInfo.baseDate = itemPriceInfo.baseDate;

  const bronze = Array.isArray(regExpBronze.exec(todayPriceInfo.avr)) ? itemInfo.bronze = parseInt(regExpBronze.exec(todayPriceInfo.avr)[0]) : 0;
  const silver = Array.isArray(regExpSilver.exec(todayPriceInfo.avr)) ? itemInfo.silver = parseInt(regExpSilver.exec(todayPriceInfo.avr)[0]) : 0;
  const gold = Array.isArray(regExpGold.exec(todayPriceInfo.avr)) ? itemInfo.gold = parseInt(regExpGold.exec(todayPriceInfo.avr)[0]) : 0;

  itemInfo.gold = gold;
  itemInfo.silver = silver;
  itemInfo.bronze = bronze;

  console.log(itemInfo);
}


axios.post(listUrl, qs.stringify(reqListBody), config)
.then(function (response) {
  const body = response.data.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
  const itemCodeArr = regExpItemCode.exec(body);
  const itemGradeArr = regExpItemGrade.exec(body);

  if(Array.isArray(itemCodeArr) && Array.isArray(itemGradeArr)){
    itemInfo.code = itemCodeArr[0];
    itemInfo.grade = itemGradeArr[0];
    detailUrl = `${frontUrl} ${itemCodeArr[0]}/${itemGradeArr[0]} ${backUrl}`;
    
    axios.post(detailUrl, qs.stringify(reqDetailBody), config)
    .then(function (response) {
      // let itemPriceStr = response.data
      //                     .replace('jQuery17204547714897613335_1567184367362(', '')
      //                     .replace(');', '')
      //                     .replace(/^\s+|\s+$/gm, '')
      //                     .replace(/\n/g, '')
      //                     .replace(/,summary.+(?=,baseDate)/g, '')
      //                     .replace(/records/g, '"records"')
      //                     .replace(/buyDate/g, '"buyDate"')
      //                     .replace(/maxPrice/g, '"maxPrice"')
      //                     .replace(/minPrice/g, '"minPrice"')
      //                     .replace(/open/g, '"open"')
      //                     .replace(/avr/g, '"avr"')
      //                     .replace(/count/g, '"count"')
      //                     .replace(/totalCount/, '"totalCount"')
      //                     .replace(/totalPrice/, '"totalPrice"')
      //                     .replace(/name/, '"name"')
      //                     .replace(/grade/, '"grade"')
      //                     .replace(/gradeId/, '"gradeId"')
      //                     .replace(/baseDate/, '"baseDate"')
      //                     .replace(/'/g, '"')

      // // console.log(itemPriceStr);
      // const itemPirceObj = JSON.parse(itemPriceStr);
      // console.log(itemPirceObj);

      eval(response.data);
    })
    .catch(function (error) {
      console.log('error');
      console.log(error);
    });
  }
})
.catch(function (error) {
  console.log(error);
});

