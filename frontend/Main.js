window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounternuno.azurewebsites.net';
const localfunctionapi = 'http://localhost:7071/api/Getresumecounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionapiurl). then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count; 
        document,getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}