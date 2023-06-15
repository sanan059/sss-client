import AppInstance from "../../Config/global.axios";

export class UserServices {
  async GetSingleUserWithDetail (id) {
    const response = await AppInstance({
      url: `/users/${id}`,
      method: "GET"
    });
    return response;
  }
}