import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { clear } from "@testing-library/user-event/dist/clear";
const App = () => {

  const [enrolledStudent,setEmrolledStudent] = useState([]);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [website,setWebsite] = useState("");
  const [imageLink,setImageLink] = useState("");
  const [gender,setGender] = useState("");
  const [skills,setSkils] = useState([]);

  const enrolled = () => {
    console.log("hello")
    console.log(skills)
    const stu = {
      name,email,website,imageLink,gender,skills
    }

    enrolledStudent.push(stu);
    clearValue();
  }

  const clearValue = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setImageLink("");
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="p-16">
        <div className="w-full h-full flex justify-between border-black">
          <div className="w-1/2">
            <form action="w-full">
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-slate-300 rounded w-1/2"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Email :{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-slate-300 rounded w-1/2"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Website :{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-slate-300 rounded w-1/2"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
              </div>
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Image link :{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-slate-300 rounded w-1/2"
                  onChange={(e) => setImageLink(e.target.value)}
                  value={imageLink}
                />
              </div>
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Gender :{" "}
                </label>
                <div className="w-1/2">
                  <input type="radio" name="gend" id="" className="" value={gender} onClick={(e) => setGender("Male")}/> Male
                  <br />
                  <input type="radio" name="gend" id="" className="" value={gender} onClick={(e) => setGender("Female")} /> FeMale
                </div>
              </div>
              <div className="flex justify-between my-5">
                <label htmlFor="" className="w-1/2">
                  Skills :{" "}
                </label>
                <div className="w-1/2 flex justify-between">
                  <input type="checkbox" name="" id="" onChange={(e) => {e.preventDefault() ; skills.includes("java") ? setSkils(skills.filter((er,ii) => er !== "java")) : skills.push("java")}}  />
                  <span>Java</span>
                  <input type="checkbox" name="" id=""onChange={(e) => {e.preventDefault() ; skills.includes("html") ? setSkils(skills.filter((er,ii) => er !== "html")) : skills.push("html")}}  />
                  <span>Html</span>
                  <input type="checkbox" name="" id=""onChange={(e) => {e.preventDefault() ; skills.includes("css") ? setSkils(skills.filter((er,ii) => er !== "css")) : skills.push("css")}}  />
                  <span>Css</span>
                </div>
              </div>
            </form>
            <button className="p-3 px-5 mr-4 bg-blue-400 text-white font-bold rounded" onClick={enrolled}>
              Eroll Student
            </button>
            <button className="p-3 px-5 mx-4 bg-red-400 text-white font-bold rounded" onClick={clearValue}>
              Clear
            </button>
          </div>
          {/* <div className="w-1/2 h-1 bg-slate-500">
          </div> */}
          <div className="w-1/2 p-10 flex flex-col items-center">
            <h2 className="text-center text-xl font-bold">Enrolled Student</h2>
            <div className="border-2 border-green-800 w-full">
              <div className="flex justify-between">
                <div className="flex-1 bg-green-500 border-2 border-green-800 text-white p-1 w-3/4">
                  Description
                </div>
                <div className="text-white p-1 bg-green-500 border-2 w-1/4 border-green-800">
                  Image
                </div>
              </div>
            {
              enrolledStudent.length !== 0 && enrolledStudent.map((ele,i) => {
                return <>
                
              <div key={i} className="flex justify-between items-center bg-green-500 border-2 border-green-800 text-white">
                <div className="flex-1 w-3/4 p-5">
                  <p>{ele.name}</p>
                  <p>{ele.gender}</p>
                  <p>{ele.email}</p>
                  <p>{ele.website}</p>
                  <p>
                    {
                      ele.skills.map((ed,i) => <span>{ed}</span> )
                    }
                  </p>
                </div>
                <div className="text-white p-1 bg-green-500 border-2 w-1/4 border-green-800">
                  <img
                    src={`${ele.imageLink}`}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
                </>
              })
            }



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
