import React from 'react';
import homeData from '../data/home.js';


import './home.css';

const Home = () => {  
  return (
    <div>
      { homeData.map((e, i) =>
        <div className="card m-4 bg-light" id="back" key={i}>
          <div className="card-body transparency-none">
            <h2 className="card-title p-3">{e.header}</h2>
            <h6 className="card-subtitle text-muted"> {e.date} </h6>
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p className="card-text"> {e.feactures} </p>
              </div>
              <div className="col-md-6 pl-5 align-self-center" id="centrador2">
                <img src={e.img} className="img-fluid" id="imagen2"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;