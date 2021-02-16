const getData = async (url) => {
console.log('getdata!');
    const data = await fetch(url).catch((err)=>console.log(err))

    if (data) {
    return data.json();
    }
    return data;

}
export default getData;