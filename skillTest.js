const request = require('request');
const charactersCode = 'a217a416-74fe-433a-958c-f672f89ad555';

request('https://archeage.xlgames.com/characters/' + charactersCode + '/actabilities', function (error, response, body) {
  const skillNameList = [
    '축산', '농사', '낚시', '벌채', '채집', '채광', '연금', '요리', '공예', '기계', '금속', '인쇄', '석공', '재봉', '가죽', '무기', '목공', '건축', '손재주', '장사', '예술', '탐험',
    '누이안어', '엘프어', '드워프어', '하리하란어', '페레어', '워본어', '서대륙 공용어', '동대륙 공용어'
  ];
  const regExpBaseStr = '[<>\\s="_/a-zA-Z0-9]+class="txt">[\\d]+';
  const regExpGetSkillValue = /(?<=\<div class="txt">)[0-9.]+/;
  body = body.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');

  const mySkill = skillNameList.map(skill_name => {
    let regExpStr = skill_name + regExpBaseStr;
    let regExp = new RegExp(regExpStr);
    const skill_value = parseInt(body.match(regExp)[0].match(regExpGetSkillValue)[0]);
      return {
        skill_name : skill_name,
        skill_value : skill_value
      }
    }
  );

  console.log(mySkill);
  
  
});



