import React, { useState, useEffect,lazy,Suspense } from "react";
import "./App.css";
import axios from "axios";
// import Child from "./Child";
const Child=lazy(()=>import("./Child"))

function App() {
  const [id, setId] = useState(0);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [currentCount, setCount] = useState(20);

  const timer = () => {
    for (var i = id; i < id + 5; i++) {
      if (data[i] != undefined) {
        setUser((user) => [...user, data[i]]);
        // console.log(data[i]);
      }
    }

    setId(id + 5);
    setCount(currentCount - 1);
  };

  useEffect(() => {
    console.log("running first");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("running second");
    //end condition
    if (currentCount <= 0) {
      return;
    }
    const interval = setInterval(timer, 2000);
    return () => clearInterval(interval);
  }, [currentCount]);

  return (
    <div className="app">
      <Suspense fallback={<div>Loading....</div>} >
      <Child data={user} />
        </Suspense>
    </div>
  );
}
export default App;
