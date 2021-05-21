const VNDB = require('vndb-api');

const vnLength = [
  'Very short (< 2 hours)',
  'Short (2 - 10 hours)',
  'Medium (10 - 30 hours)',
  'Long (30 - 50 hours)',
  '	Very long (> 50 hours)',
]

async function vndbQuery(vndb, query) {
  return vndb.query(query)
    .then(response => {
      return response;
    });
}

async function vndbGetResponse(query) {
  const vndb = new VNDB('vncorner-app', {
    // optionally, override any connection options you need to here, like
    minConnection: 1,
    maxConnection: 10,
  });
  const response = await vndbQuery(vndb, query);
  vndb.destroy();
  return response;
};


//-----------------------------------------------------------------------------------------
const DEBUG = false;

async function test() {
  //let response = await vndbGetResponse('get quote basic (id>=1) {"results":1}');
  //console.log(response);
  //const id = 29667;
  //response = await vndbGetResponse(`get vn basic,details (id=${id})`);
  //console.log(response.items[0].description);
  try {
    const name = 'einstein';
    const resData = await vndbGetResponse(`get quote basic (id>=1) {"results":25}`);
    console.log(resData.items);
  } catch (error) {
    console.log(error);
  }
}

if (DEBUG) {
  test();
};
//------------------------------------------------------------------------------------------

module.exports = { vndbGetResponse, vnLength };