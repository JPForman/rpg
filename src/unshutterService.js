export class UnshutterService {
  async getBackground() {
    try {
      let response = await fetch(`https://api.unsplash.com/search/photos?client_id=2930071a8d204fc55f2feb9753aef5dcda6ed00ef924bbfba033d8b44ff0f750&page=3&query=fantasy`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);


    }
  }
}
