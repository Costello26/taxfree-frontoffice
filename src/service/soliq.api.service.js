import store from '../store';
import { authActions } from '../store/auth';

export default class ApiService {
  static baseUrl = 'https://mobile.soliq.uz/my3-api/tax-free-api/front';

  static async getQR() {
    try {
      const data = await fetch(`${ApiService.baseUrl}/user/get/qr-information`);
      const result = await data.json();
      return result;
    } catch (err) {
      return err.message;
    }
  }

  static async checkState(qrCode) {
    try {
      const data = await fetch(`${ApiService.baseUrl}/user/qr/check-state/${qrCode}`, {
        method: 'POST',
      });
      const result = await data.json();
      return result;
    } catch (err) {
      return err.message;
    }
  }

  static async findUserByPhone(phoneNumber, qrCode) {
    try {
      const data = await fetch(
        `${ApiService.baseUrl}/user/qr/find-user/by-phone?` +
          new URLSearchParams({
            phone: phoneNumber,
            qr_code: qrCode,
          })
      );
      const result = await data.json();
      return result;
    } catch (err) {
      return err.message;
    }
  }

  static async savePassportData(personalData) {
    try {
      const res = await fetch(`${ApiService.baseUrl}/passport/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personalData),
      });
      if (res.status === 200) {
        store.dispatch(authActions.setPassportSaved(true));
      }
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  static async getProductsByID(userId) {
    try {
      const data = await fetch(
        `${ApiService.baseUrl}/product/get-all-product?userId=${userId}`
      );
      const result = await data.json();
      return result;
    } catch (err) {
      return err.message;
    }
  }
}
