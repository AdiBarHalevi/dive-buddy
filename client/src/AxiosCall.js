import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://dashboard.heroku.com/apps/dive-buddy/`
      : `http://localhost:8000/`,
});

export const genAnewUser = async (userData) => {
  try {
    const res = await axiosInstance.post(`/user/signin`, { body: userData });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axiosInstance.post(`/user/login`, { body: userData });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getEvents = async () => {
  try {
    const res = await axiosInstance.get(`/events`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const PostEvent = async (body) => {
  try {
    const res = await axiosInstance.post(`/events`, { body });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
