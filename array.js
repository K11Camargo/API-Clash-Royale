const axios = require('axios');

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI2Nzg4YjYwLWE1MTYtNDUwZi05YTU1LWJiNGY3ZWNjMzI5YyIsImlhdCI6MTY5NzgyNDU4MCwic3ViIjoiZGV2ZWxvcGVyLzkwNTk2ODJjLTA4YTEtOWFkNS1hNWY5LTRhM2I3MTNjMzI4ZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDAuMTUzLjY5LjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.pOuQL1iTmti8itEiakI9fkS-182xq0S1A_gzQ21dObNBSC942G0A13eYzfwvc7wpV_FuG7uXqDCNRrMo0CAhTw';
const apiUrl = 'https://api.clashroyale.com/v1/cards';

const config = {
  headers: {
    'Authorization': `${apiKey}`
  }
};

axios.get(apiUrl, config)
  .then(response => {
    if (response.status === 200) {
      const cardData = response.data;
      cardData.forEach(card => {
        console.log(`Nome: ${card.name}`);
        console.log(`Tipo: ${card.id}`);
        console.log('----------------------');
      });
    } else {
      console.error(`Erro: ${response.status}`);
    }
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });