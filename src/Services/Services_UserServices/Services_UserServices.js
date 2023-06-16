import AppInstance from "../../Config/global.axios";

export class ServicesOfUserServices {
  async GetAllServicesOfAUsers () {
    const response = await AppInstance({
      url: '/services',
      method: "GET"
    });
    return response;
  }

  async GetSingleServiceDetails (id) {
    const response = await AppInstance({
      url: `/services/${id}`,
      method: "GET"
    });
    console.log(response);
    return response;
  }

  async CreateNewService (service) {
    const response = await AppInstance({
      url: "/services/create",
      method: "POST",
      data: service
    });
    console.log(response.data);
    return response;
  }
}