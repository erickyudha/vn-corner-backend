const VNDB = require('vndb-api');

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

module.exports = vndbGetResponse;