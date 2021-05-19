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

const getVnDataById = async (request, h) => {
  try {
    const { id } = request.params;
    const resData = await vndbGetResponse(`get vn basic,details (id=${id})`);
    const data = resData.items[0];

    const newData = {
      id: data.id,
      title: data.title,
      original: data.original,
      released: data.released,
      image: data.image,
      description: data.description,
    }

    const response = h.response({
      status: 'success',
      message: `sucessfully get vn by id: ${id}`,
      data: newData,
    });
    response.code(200);
    return response;

  } catch (error) {
    const { id } = request.params;
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: `get vn by id: ${id} failed (not found), please check the id again`,
    });
    response.code(404);
    return response;
  }
};

module.exports = {
  getRandomQuote,
  getVnDataById,
};


