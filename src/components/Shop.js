import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const {Increase,Decrease} = bindActionCreators(actionCreators,dispatch);

  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <button
          className="btn btn-outline-primary mx-2"
          type="submit"
          onClick={()=>{Decrease(10)}}
        >
          -
        </button>
        <span>Incr and Decr</span>
        <button className="btn btn-outline-primary mx-2" type="submit"
         onClick={()=>{Increase(10)}}>
          +
        </button>
        {/* <button
          className="btn btn-outline-primary mx-2"
          type="submit"
          onClick={() => {
            dispatch(actionCreators.Decrease(10))
          }}
        >
          -
        </button>
        <span>Incr and Decr</span>
        <button className="btn btn-outline-primary mx-2" type="submit"
         onClick={() => {
            dispatch(actionCreators.Increase(10))
          }}>
          +
        </button> */}
      </div>
    </>
  );
};

export default Shop;
