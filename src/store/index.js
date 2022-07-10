import { getUser } from "../service/user.js";

class useStore {
  user = [];
  constructor() {
    this.user = [];
  }

  async setUserData() {
    this.user = await getUser();
    return this.user.results;
  }

  unsetUserData() {
    this.user = [];
  }
}

export { useStore };
