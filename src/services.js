import axios from "axios";

const baseUrl = "https://reqres.in/api/users";

export const FETCH_USER = async () => {
  try {
    const res = await axios.get(`${baseUrl}?page=2`);
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log("fetch users err: ", err.message);
  }
};

export const DELETE_USER = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`);
    return res;
  } catch (err) {
    console.log("delete users err: ", err.message);
  }
};

export const EDIT_USER = async (user) => {
  try {
    const res = await axios.put(`${baseUrl}`, user);
    return res;
  } catch (err) {
    console.log("edit users err:", err.message);
  }
};

export const ADD_USER = async ({ email, first_name,last_name,avatar,name,job }) => {
  const date = new Date();
  try {
    const res = await axios.post(`${baseUrl}`, {
      user_type_id: 0,
      email: email,
      first_name: first_name,
      last_name: last_name,
      avatar: avatar,
			name:name,
			job:job,
      created_date: date.toISOString(),
    });
    return res;
  } catch (err) {
    console.log("add user err:", err.message);
  }
};
