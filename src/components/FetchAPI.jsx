export default async function FetchAPI(url) {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    // console.log(data[0].image)
    return data
}