import React, { useEffect } from "react";
import "./RightBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getListUser } from "../../actions/userAction";
function RightBar() {
  const { getListUserResult } = useSelector((state)=> state.UserReducer)
  const [people, setPeople] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  useEffect(()=>{
    if(getListUserResult){
      setPeople(getListUserResult)
    }
  },[getListUserResult])

  
 
  return (
    
    <>
      <aside>
        <div className="">
        <div className='search-bar mx-auto'>
        <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="disabledTextInput"
                  className="mt-3"
                  placeholder="🔍 search"
                />
              </Form.Group>
      
            </fieldset>
          </Form>
          </div>
          <div className="trending container">
            <h2 className="right-bar-title">Topics</h2>
           <div className="topics-list">
            <div className="topic">
              <div className="topic-container">
              <h4>Mental Health</h4>
              <span className="text-muted">20 Tweed</span>
              </div>
            </div>
            <div className="topic">
            <div className="topic-container">
              <h4>Politics</h4>
              <span className="text-muted">20 Tweed</span>
              </div>
            </div>
            <div className="topic">
            <div className="topic-container">
              <h4>Other</h4>
              <span className="text-muted">20 Tweed</span>
              </div>
            </div>
           </div>
          </div>
          <div className="suggest container">
            <h2 className="right-bar-title">People</h2>
            <div className="topics-list">
            {
            
            people.slice(0,3)
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((person)=>{
              return(
                <div className="people">
                  <div className="people-container">
                    <img id="people-img" src={person.profile_img} alt="" />
                <h4 id="people-text">{person.username}</h4>
                
                <button id="people-btn" className="btn btn-success mt-3">details</button>
                
                </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default RightBar;
