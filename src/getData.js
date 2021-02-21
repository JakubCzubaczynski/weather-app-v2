const getData = async (url) => {
  const data = await fetch(url, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).catch((err) => console.log(err));

  if (data) {
    return data.json();
  }
  return data.json();
};
export default getData;
