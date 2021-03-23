import React from "react";
import "./child.css";
function Child({ data }) {
  // console.log(data);
  return (
    <div className="container pf">
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-3">
            <div className="card">
              <img
                src="https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png"
                alt="John"
                style={{ width: "100%" }}
              />
              <h1>{item.title}</h1>
              {/* <p class="title">Education-{item.education}</p> */}
              <p>{item.body}</p>
              <div style={{ margin: "24px 0" }}>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <p>
                <button>{item.id}</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Child;
