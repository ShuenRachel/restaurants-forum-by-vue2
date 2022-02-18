import { apiHelper } from "../utils/helpers";

const getToken = () => localStorage.getItem("token");


export default {
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${}`)
  }
}