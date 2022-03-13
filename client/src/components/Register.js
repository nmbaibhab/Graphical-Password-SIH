import { React, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import A from "../images/1.jpg";
import B from "../images/2.jpg";
import C from "../images/3.jpg";
import D from "../images/4.jpg";
import E from "../images/5.jpg";
import F from "../images/6.jpg";
import G from "../images/7.jpg";
import H from "../images/8.jpg";
import I from "../images/9.jpg";
import J from "../images/10.jpg";
import K from "../images/11.jpg";
import L from "../images/12.jpg";
import M from "../images/13.jpg";
import N from "../images/14.jpg";
import O from "../images/15.jpg";
import P from "../images/16.jpg";
import Q from "../images/17.jpg";
import R from "../images/18.jpg";
import S from "../images/19.jpg";
import T from "../images/20.jpg";
import U from "../images/21.jpg";
import V from "../images/22.jpg";
import W from "../images/23.jpg";
import X from "../images/24.jpg";
import Y from "../images/25.jpg";
import Z from "../images/26.jpg";
import N1 from "../images/27.jpg";
import N2 from "../images/28.jpg";
import N3 from "../images/29.jpg";
import N4 from "../images/30.jpg";
import N5 from "../images/31.jpg";
import N6 from "../images/32.jpg";
import N7 from "../images/33.jpg";
import N8 from "../images/34.jpg";
import N9 from "../images/35.jpg";

var flag = 0;
let shuffledArray;
let grammar;
setInterval(() => {
  window.location.reload();
}, 900000);

const RegisterForm = () => {
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const url = "http://localhost:5000/register";
  const grammarUrl = "http://localhost:5000/grammar";
  useEffect(() => {
    // ⬇ This calls my get request from the server
    axios
      .get(grammarUrl)
      .then((res) => {
        grammar = res.data;
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // console.log(array[currentIndex].key);
      // console.log(array[randomIndex].key);
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const array = [
    { key: "A", value: A },
    { key: "B", value: B },
    { key: "C", value: C },
    { key: "D", value: D },
    { key: "E", value: E },
    { key: "F", value: F },
    { key: "G", value: G },
    { key: "H", value: H },
    { key: "I", value: I },
    { key: "J", value: J },
    { key: "K", value: K },
    { key: "L", value: L },
    { key: "M", value: M },
    { key: "N", value: N },
    { key: "O", value: O },
    { key: "P", value: P },
    { key: "Q", value: Q },
    { key: "R", value: R },
    { key: "S", value: S },
    { key: "T", value: T },
    { key: "U", value: U },
    { key: "V", value: V },
    { key: "W", value: W },
    { key: "X", value: X },
    { key: "Y", value: Y },
    { key: "Z", value: Z },
    { key: "1", value: N1 },
    { key: "2", value: N2 },
    { key: "3", value: N3 },
    { key: "4", value: N4 },
    { key: "5", value: N5 },
    { key: "6", value: N6 },
    { key: "7", value: N7 },
    { key: "8", value: N8 },
    { key: "9", value: N9 },
  ];

  if (flag === 0) {
    shuffledArray = shuffle(array);
    flag = 1;
  }

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (category.length < 4) {
      alert("Please select aleast 4 patterns");
    } else {
      const userData = {
        username: values.username,
        email: values.email,
        password: category.join(grammar["timestamp"]),
      };
      // console.log(userData);
      axios
        .post(url, userData)
        .then((res) => {
          alert("Registered Successfully. Please login!");
          history.push("/login");
        })
        .catch((error) => {
          alert("Unable to register. Please try again");
          console.log(error);
        });
    }
    // console.log(userData);
  };

  const [category, setCategory] = useState([]);

  function categoryClick(button) {
    if (category.includes(button)) {
      setCategory(category.filter((el) => el !== button));
    } else {
      let temp = [...category, button];
      setCategory(temp);
    }
  }
  // console.log(category);
  if (!userInfo) {
    return (
      <div className="mx-auto mt-5 w-3/5">
        <p className="my-4 text-center text-4xl font-bold">Register Page</p>
        <div className="block text-center ">
          <p className="inline">Already registered.</p>
          <Link to="/login" className="text-blue-600">
            {" "}
            Login Now!!
          </Link>
        </div>
        <form onSubmit={submitHandler}>
          <div className="my-6 ">
            <p className="text-lg  font-semibold text-blue-500">Username</p>
            <input
              className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 block "
              aria-label="username"
              value={values.username}
              onChange={handleChange("username")}
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div className="my-6 ">
            <p className="text-lg  font-semibold text-blue-500">Email</p>
            <input
              className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 block "
              type="email"
              placeholder="Enter email"
              aria-label="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="my-6 ">
            <p className="text-lg  font-semibold text-blue-500">
              Create your Graphical password by selecting the images
            </p>
            <p>*Your selected images will hide for security reasons</p>
          </div>

          <div className="my-2 w-full mx-auto">
            {shuffledArray &&
              shuffledArray.map((image) => (
                <button
                  type="button"
                  key={image.key}
                  // onclick={setPassword(id["image"])}
                  className=" mx-2 my-2  bg-blue-400 border-blue-700 border-2 rounded-md"
                  onClick={() =>
                    categoryClick(`${grammar && grammar["data"][image.key]}`)
                  }
                >
                  <img
                    alt="alphabet"
                    src={image.value}
                    className={`p-0 m-0 rounded-md ${
                      grammar && category.includes(grammar["data"][image.key])
                        ? " opacity-0 "
                        : "border-blue-500"
                    }`}
                  />
                </button>
              ))}
          </div>
          <button
            type="submit"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-400 py-4 w-1/4 my-8 block mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return <Redirect to="/profile" />;
  }
};

export default RegisterForm;
