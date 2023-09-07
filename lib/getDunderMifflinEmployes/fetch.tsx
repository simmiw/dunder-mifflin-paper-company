export default  async function getDunderMifflinEmployesDetails() {
    
    const response = await fetch("https://fetch-data--dundermifflininc.netlify.app/.netlify/functions/team");
    const data= await response.json();
    console.log(data);

    return data;
}
