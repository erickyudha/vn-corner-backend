const VNDB = require('vndb-api');

const DEBUG = false;

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



async function test() {
  //let response = await vndbGetResponse('get quote basic (id>=1) {"results":1}');
  //console.log(response);
  const id = 29667;
  response = await vndbGetResponse(`get vn basic,details (id=${id})`);
  console.log(response.items[0].description);
}

if (DEBUG) {
  test();
};

module.exports = vndbGetResponse;