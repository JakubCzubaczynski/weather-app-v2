const getAjax = async (url) => {
  const data = await $.ajax({
    url: url,
    success: function (response) {
      console.log(response);
      return response;
    },
    error: function () {
      console.log('Wystąpił błąd z połączeniem');
    },
  });
  return data;
};
export default getAjax;
