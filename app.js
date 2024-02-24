// Progression 1: create a function and fetch the api using axios
axios
  .get(
    'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=9b4bd3e1e6d8c81c39f026f1a19aa164'
           
  )
  .then((response) => {
    console.log('Success data fetch', response.data.articles);
    let dataSpread = [...response.data.articles];
    display(dataSpread);
  })
  .catch((error) => {
    console.log('error1', error);
  });

function display(data) {
  let container = document.getElementById('container');
  data.forEach(function (element, index) {
    container.innerHTML += `
        <div >
          <h1>${element.title}</h1>
          <img src='${element.image}' alt='${element.image}'/>
          <p>${element.content}<p>
        </div>
    `;
  });
}
