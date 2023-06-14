import AppInstance from "../../Config/global.axios";

export class ServicesOfUserServices {
  async GetAllServicesOfAUsers () {
    const response = await AppInstance({
      url: '/services',
      method: "GET"
    });
    console.log(response);
    return response;
  }
}