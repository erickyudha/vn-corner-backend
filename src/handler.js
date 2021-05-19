const vndbGetResponse  = require('./vndb-handler');

const getRandomQuote = async (_, h) => {
  try {
    const data = await vndbGetResponse('get quote basic (id>=1) {"results":1}');
    const response = h.response({
      status: 'success',
      message: 'get quote successfully',
      data: {
        title: data.items[0].title,
        quote: data.items[0].quote,
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log(error);
    console.log('----------------------------------------------');
    console.log('Something went wrong, fallback using default response...');
    const response = h.response({
      status: 'success',
      message: 'Something went wrong, fallback using default response...',
      data: {
        title: "I guess she values her shampoo more than my life. That's not very flattering.",
        quote: 'Kira☆Kira',
      },
    });
    response.code(200);
    return response;
  }
};

module.exports = {
  getRandomQuote,
};


