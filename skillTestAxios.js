const axios = require('axios');
const qs = require('querystring');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';
const url = 'https://archeage.xlgames.com/characters/' + charactersCode + '/actabilities';

const skillNameList = [
  '축산', '농사', '낚시', '벌채', '채집', '채광', '연금', '요리', '공예', '기계', '금속', '인쇄', '석공', '재봉', '가죽', '무기', '목공', '건축', '손재주', '장사', '예술', '탐험',
  '누이안어', '엘프어', '드워프어', '하리하란어', '페레어', '워본어', '서대륙 공용어', '동대륙 공용어'
];

const getLaborDownPercent = (value) => {
  if(value < 30000){
    return 0;
  }else if(value >= 30000 && value < 40000){
    return 5;
  }else if(value >= 40000 && value < 50000){
    return 10;
  }else if(value >= 50000 && value < 70000){
    return 15;
  }else if(value >= 70000 && value < 150000){
    return 20;
  }else if(value >= 150000 && value < 180000){
    return 25;
  }else if(value >= 180000 && value < 230000){
    return 30;
  }else if(value === 230000){
    return 40;
  }
}

axios.get(url)
  .then(function(resp){
    const body = resp.data.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '').replace(/<[\s\d\w\/="_<>\-\.:'%]+>/g, '');
    console.log(body)
  });