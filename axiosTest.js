const axios = require('axios');
const charactersCode = 'fea81bc3-6b6e-4e8d-8873-ef7924225f92';

axios.get('https://archeage.xlgames.com/characters/' + charactersCode + '/actabilities')
  .then(function(response){
    console.log(response.data);
  });





