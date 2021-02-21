const getData = async (url) => {
  const data = await fetch(url).catch((err) => console.log(err));

  if (data) {
    return data.json();
  }
  return data.json();
};
export default getData;
