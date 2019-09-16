const axios = require('axios');
const qs = require('querystring');
const nickName = '아무개';
const encdoedNickName = encodeURIComponent(nickName);
const serverName = 'ORCHIDNA';

const url = `https://archeage.xlgames.com/search?dt=characters&keyword=${encdoedNickName}&subDt=&server=${serverName}`;

axios.get(url)
  .then((resp)=>{
    const body = resp.data.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
    const regExpStr = `(?<=data-uuid=").+(?="><strong>${nickName})`;
    const regExp = new RegExp(regExpStr);
    const uuidArr = regExp.exec(body);

    if(Array.isArray(uuidArr)){
      console.log(uuidArr[0].toLowerCase());
    }else{
      console.log('일치하는 캐릭터가 없습니다.');
    }
  })
  .catch(err => {
    console.log(err)
  })
