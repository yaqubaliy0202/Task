import React, { Fragment, useEffect, useState } from "react";
import "./usersPage.css";
import Nav from "../nav/nav"
import axios from "axios";
const baseUrl1 = "https://reqres.in/api/users/";

function UsersPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
   const FETCH_PRODUCT = async () => {
    try {
      const res = await axios.get(baseUrl1);
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      console.log("fetch products err: ", err.message);
    }
  };

  
  const getProducts = async () => {
    try {
      const res = await FETCH_PRODUCT();
      if (res) {
        setProducts(res);
        setLoading(false);
      }
    } catch (err) {
      console.log("getProducts err: ", err.message);
      setLoading(false);
    }
  };

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <>
    <Nav/>
  <div className="container">
      <h1 className="title">Our Users</h1>
      <div className="row">
        {products?.map((user) => {
            return (
              <div key={user.id} className="flex col-3">
                <img className="avatar" src={user.avatar} alt={user.avatar} />
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                {/* <button className="btn  btn-success">Edit</button>
                <button className="btn  btn-danger">Delete</button> */}
              </div>
            );
          })}
      </div>
    </div>
    </>
  
  );
}

export default UsersPage;
