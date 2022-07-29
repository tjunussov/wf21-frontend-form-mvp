export default {
  message: "hello!",
  get(p) {
    console.log("param name", p);
    return p;
  },
  getCurrentUser() {
    return "User";
  }
};
