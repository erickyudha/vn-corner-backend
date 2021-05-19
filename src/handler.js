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
        id: data.items[0].id,
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
        title: 'I thought math was about numbers and now we get all these words and crap like sin and tan! It makes no sense!',
        quote: 'Fureraba ~Friend to Lover~',
        id: 11856,
      },
    });
    response.code(200);
    return response;
  }
};

module.exports = {
  getRandomQuote,
};


