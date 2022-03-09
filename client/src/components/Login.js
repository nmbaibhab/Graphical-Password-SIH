import React from "react";
import { Form, Button } from "react-bootstrap";
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
// import { Link, useHistory } from "react-router-dom";

const LogInForm = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
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
  ];

  const shuffledArray = shuffle(array);

  return (
    <div className="mx-auto mt-5 w-50">
      <div className="text-center mt-5 mb-5 font-weight-bold fs-5">
        <strong>Login Page</strong>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Enter your Graphic Password by selecting the images
          </Form.Label>
          {/* <Form.Control type="password" placeholder="Password" /> */}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div className="my-3 ">
          {shuffledArray.map((image) => (
            <Button variant="outline-primary p-1 mx-2 my-2 ">
              <img src={image} className="p-0 m-0" />
            </Button>
          ))}
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="my-4 mx-auto w-30">
        <Link to="/register">Register Now!!</Link>
      </div>
    </div>
  );
};

export default LogInForm;
