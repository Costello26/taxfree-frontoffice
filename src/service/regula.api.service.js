export default class RegulaApiService {
  static host = 'http://localhost:5000';

  static async hostHealthCheck() {
    try {
      const result = await fetch(`${RegulaApiService.host}/Regula.SDK.Api/signalr/hubs`);
      return result;
    } catch (err) {
      return err;
    }
  }

  static async GetTextFieldByType(fieldId) {
    try {
      const data = await fetch(
        `${RegulaApiService.host}/Regula.SDK.Api/Methods/GetTextFieldByType?AType=${fieldId}`
      );
      const result = await data.json();
      return result;
    } catch (err) {
      return err;
    }
  }
  static async GetImage(fieldId) {
    try {
      const data = await fetch(
        `${RegulaApiService.host}/Regula.SDK.Api/Methods/GetRFIDGraphicsFileImageByFieldType?AType=${fieldId}`
      );
      return await data.json();
    } catch (err) {
      return err;
    }
  }
}
