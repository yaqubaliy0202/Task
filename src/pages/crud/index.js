import { useEffect, useState } from "react";
import "./index.css"
import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_USER } from "../../services";

const CrudPage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState({
    id: 0,
    user_type_id: 0,
    created_date: "",
    name: "",
    job: "",
  });
  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const getUsers = async () => {
    try {
      const res = await FETCH_USER();
      if (res) {
        setUsers(res);
        setLoading(false);
      }
    } catch (err) {
      console.log("getUsers err: ", err.message);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await DELETE_USER(id);
      if (res && res.status === 204) {
        setUsers([...users.filter((item) => item.id !== id)]);
      }
    } catch (err) {
      console.log("err: ", err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (value.id !== 0) {
        const res = await EDIT_USER(value);
        if (res.status === 204) {
          setUsers([
            ...users.map((item) => (item.id === value.id ? value : item)),
          ]);
        }
      } else {
        const res = await ADD_USER({
          name: value.name,
          job: value.job,
        });
        if (res.status === 204) {
          const users = await FETCH_USER();
          setUsers(users);
        }
      }

      setValue({
        id: 0,
        product_type_id: 0,
        name: "",
        job: "",
        created_date: "",
      });
    } catch (err) {
      console.log("handleSubmit err: ", err.message);
    }
    console.log("hey: ", value);
  };

  if (loading) return <h4>Loading....</h4>;
  return (
    <div className="container pt-5 mt-5">
      <div className="d-flex justify-content-center m-5">
        <form
          onSubmit={handleSubmit}
          style={{ margin: "100px 0" }}
          className="form d-flex"
        >
        <label htmlFor="name">Name:</label>
          <input
            className=" flex-1"
            id="name"
            style={{
              border: "1px solid black",
            }}
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
            placeholder="Name..."
          />
          <label htmlFor="job">Job:</label>
          <input
            className="  flex-1"
            style={{
              border: "1px solid black",
            }}
            type="text"
            name="job"
            value={value.job}
            onChange={handleChange}
            placeholder="Job..."
          />

          <div className="btn-group">
            <input
              onChange={() => handleChange()}
              type="submit"
              value={value.id ? "Edit User" : "Add User"}
              className="btn btn-success"
            />
            <input
              onClick={() =>
                setValue({
                  id: 0,
                  user_type_id: 0,
                  name: "",
                  job: "",
                  created_date: "",
                })
              }
              type="button"
              value={"Clear"}
              className="btn btn-info"
            />
          </div>
        </form>
      </div>
      <div className="row">
        {users?.map((item, index) => (
          <div key={index} className="team-item col-md-3">
            <div style={{ textAlign: "center" }}>
              <h5>{item.name}</h5>
              <h5>{item.email}</h5>
              <h5>{item.first_name}</h5>
              <h5>{item.last_name}</h5>
              <img src={item.avatar} alt="" />
              {/* <h1>{item.job}</h1>
              <h1>{item.name}</h1> */}
              <div className="btn"> 
                <button className="btn edit" onClick={() => setValue(item)}>
                  Edit
                </button>
                <button
                  className="btn delete"
                  onClick={() => deleteUser(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudPage;
