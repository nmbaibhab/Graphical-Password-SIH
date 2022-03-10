import { React, useState } from "react";
import { Link } from "react-router-dom";
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
const RegisterForm = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const array = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    N1,
    N2,
    N3,
    N4,
    N5,
    N6,
    N7,
    N8,
    N9,
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
    console.log(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    console.log(data);
  };

  const [category, setCategory] = useState({});

  function categoryClick(cat) {
    if (category === cat) setCategory();
    else {
      setCategory(cat);
      console.log(cat);
    }
  }
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
          <lable className="text-lg  font-semibold text-blue-500">
            Username
          </lable>
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
          <lable className="text-lg  font-semibold text-blue-500">Email</lable>
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
          <lable className="text-lg  font-semibold text-blue-500">
            Create your Graphical password by selecting the images
          </lable>
        </div>

        <div className="my-2 w-full mx-auto">
          {shuffledArray.map((image) => (
            <button
              key={image}
              // onclick={setPassword(id["image"])}
              className={` mx-2 my-2 border-green-700 ${
                category === `${image}`
                  ? "bg-blue-200 transform scale-50"
                  : "bg-blue-50 border-2"
              }`}
              onClick={() => categoryClick(`${image}`)}
            >
              <img alt="alphabet" src={image} className="p-0 m-0" />
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-1/4 my-8 block mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
