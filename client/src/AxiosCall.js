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

export const findLocationAPI = async (adress)=>{
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoiYWRpYmFyMTQxIiwiYSI6ImNrbmZ4dTZkYTJ6dWcycHA5amliejJ6ZmoifQ.bYYgGmzzRfwr2D9REQmfzA&limit=1`
  try{
    const ans = await axiosInstance.get(url)
    return ans
  }catch(e){console.log(e)}
}
