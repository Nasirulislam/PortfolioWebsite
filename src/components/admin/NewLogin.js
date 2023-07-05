import React from "react";
import Typed from 'react-typed';
import './LoginUi.css';
import axios from "axios";
import { useState } from "react";
import "./Admin.css";
import base_url from "../../constants/url";
import { Spinner } from "react-bootstrap";


export default function NewLogin() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const submitLogin = async (e) => {
    e.preventDefault();
    setStatus(true);
    const body = {
      user: userName,
      password: password,
    };

    await axios.post(`${base_url}/project/login`, body).then((response) => {
      if (response.data.status === "ok") {
        localStorage.setItem("Status", JSON.stringify("ok"));
        window.location.href = 'admin-login';
      } else {
        localStorage.setItem("Status", JSON.stringify("not_ok"));
      }
      setStatus(false);
    });
  };
  return (
    <>
      <main>
        <section className=" w-full font-poppins h-[100vh]">
          <div
            className="absolute top-0 w-full h-full bg-zinc-200 bgImg"
            style={{

              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className='text-center w-1/4'>
              <p className="text-black ml-8  text-lg font-semibold mt-8 font-poppins "> </p>
              <Typed
                className='typed text-light text-black text-4xl font-bold mt-8 font-poppins ml-8 '
                strings={['David Ellis']}
                typeSpeed={120}
                backSpeed={50}
                loop
              />
              <p className="text-black ml-8  text-base font-semibold mt-2 font-poppins "> Admin CMS</p>

            </div>
          </div>
          <div className="container mx-auto my-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-gray-800  w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400  text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-gray-800 w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 accent-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className={"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full " + (status ? "align-middle" : "" )}
                          type="button"
                          style={{ transition: "all .15s ease", cursor: 'pointer' }}
                          onClick={submitLogin}
                          disabled={(userName === "" || password === "") || status ? true : false}
                        >
                          <Spinner animation="border" variant="light" className={status ? "me-2" : "d-none"} />
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
