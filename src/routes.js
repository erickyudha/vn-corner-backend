const { getRandomQuote, getVnDataById, searchVnByName } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/quote',
    handler: getRandomQuote,
  },
  {
    method: 'GET',
    path: '/vn/{id}',
    handler : getVnDataById,
  },
  {
    method: 'GET',
    path: '/vn/search/{name}',
    handler: searchVnByName,
  },
  {
    method: 'GET',
    path: '/test',
    handler: (request, h) => {
      const response = h.response({
        status: 'success',
        message: 'Test Success',
        data: {
          message: 'HALOOOOOO',
        },
      });
      response.code(200);
      return response;
    },
  },
]

module.exports = routes;