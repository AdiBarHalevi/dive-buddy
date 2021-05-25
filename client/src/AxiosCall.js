import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://dashboard.heroku.com/apps/dive-buddy/`
      : `http://localhost:8000/`,
});

export const genAnewUser = async (userData) => {
  try {
      const res = await axiosInstance.post(`/user`,{body:userData});
      console.log(res)
    } catch (e) {
      console.log(e);
    }
  };

export const loginUser = async (userData) => {
  try {
      const res = await axiosInstance.post(`/user/login`,{body:userData});
      console.log(res)
    } catch (e) {
      console.log(e);
    }
  };