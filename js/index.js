// AJAX -------> Async js and xml

// method type

/* 
GET ---> get data from serve

POST -----> send data from serve 

PUT ---> update data 

DELETE ---> delete data from server 

Patch ---> Update لجزء  data

*/

//  method , api -url
var links = document.querySelectorAll(".nav-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    var nameLink = e.target.innerHTML;
    getData(nameLink);
  });
}

let dataItem = [];

async function getData(meal) {
  const response = await (await fetch( `https://forkify-api.herokuapp.com/api/search?q=${meal}`)).json();


    // check 3ala 7alet el response tmam wla la =>
  // if (response.ok == true) {
  //   const finalResponse = await response.json();
    dataItem = response.recipes;

    displayData();
  // } else {
  //   alert("Error On Data");
  // }
}

getData("pizza");

function displayData() {
  var cols = ``;

  for (var i = 0; i < dataItem.length; i++) {
    cols += `
                <div class="col-md-4 ">
                <div class="card" >
                  <img src="${dataItem[i].image_url}" class="card-img-top" height="200" " alt="">
                  <h5 class="text-center">${dataItem[i].title}</h5>
                  <a target="_blank" class="btn btn-warning" href="${dataItem[i].source_url}">source</a>
                </div>
              </div>
                `;
  }

  document.getElementById("rowData").innerHTML = cols;
}
