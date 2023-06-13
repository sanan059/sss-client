import AppInstance from "../../Config/global.axios";

export class AuthServices {

  // SIGN IN USER
  async SignIn (user) {
    const response = await AppInstance({
      url: '/auth/sign-in',
      method: 'POST',
      data: user
    });
    return response;
  }

}