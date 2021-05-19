const VNDB = require('vndb-api');

const DEBUG = false;

async function vndbQuery(vndb, query) {
  return vndb.query(query)
    .then(response => {
      return response;
    });
}

async function vndbGetResponse(query) {
  const vndb = new VNDB('clientname', {
    // optionally, override any connection options you need to here, like
    minConnection: 1,
    maxConnection: 10,
  });
  const response = await vndbQuery(vndb, query);
  vndb.destroy();
  return response;
};

async function testing() {
  let quoteData = await vndbGetResponse('get quote basic (id>=1) {"results":1}');
  console.log('quoteData: ', quoteData.items[0]);
};

if (DEBUG) {
  testing();
};

module.exports = vndbGetResponse;