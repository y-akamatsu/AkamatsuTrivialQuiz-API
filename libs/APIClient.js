class APIClient {
  static fetch(url) {
    return fetch(url)
      .then(response => {
        return response.json();
      });
  }
};

module.exports = APIClient;