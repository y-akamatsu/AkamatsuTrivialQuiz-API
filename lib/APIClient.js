class APIClient {
  static fetch(url) {
    return this.fetch(url)
      .then(response => {
        return response.json();
      });
  }
 
module.exports = APIClient;