class APIClient {

}

fetch('https://opentdb.com/api.php?amount=10&')
.then(function (response) {
  return response.json();
})
.then(function (json) {
  console.log('data:', json);
});

module.exports = APIClient;