const request = require('request');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';
const skillNameList = [
  '축산', '농사', '낚시', '벌채', '채집', '채광', '연금', '요리', '공예', '기계', '금속', '인쇄', '석공', '재봉', '가죽', '무기', '목공', '건축', '손재주', '장사', '예술', '탐험',
  '누이안어', '엘프어', '드워프어', '하리하란어', '페레어', '워본어', '서대륙 공용어', '동대륙 공용어'
];

const regExpBaseStr = '[<>\\s="_/a-zA-Z0-9]+class="txt">[\\d]+';
const regExpGetSkillValue = /(?<=\<div class="txt">)[0-9.]+/;

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

request('https://archeage.xlgames.com/characters/' + charactersCode + '/actabilities', function (error, response, body) {
  body = body.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');

  const mySkill = skillNameList.map(skill_name => {
    const regExpStr = skill_name + regExpBaseStr;
    const regExp = new RegExp(regExpStr);
    const skill_value = parseInt(body.match(regExp)[0].match(regExpGetSkillValue)[0]);
    const labor_down_percent = getLaborDownPercent(skill_value);
      return {
        skill_name : skill_name,
        skill_value : skill_value,
        labor_down_percent : labor_down_percent
      }
    }
  );

  console.log(mySkill);
  
  
});



