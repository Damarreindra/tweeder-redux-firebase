import React, { useEffect } from "react";
import "./RightBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getListUser } from "../../actions/userAction";
import { Link } from "react-router-dom";
import { logDOM } from "@testing-library/react";
function RightBar() {
  const { getListUserResult } = useSelector((state)=> state.UserReducer)
  const [people, setPeople] = useState([])
  const [threads, setThreads] = useState([])
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getListUser());
//   }, [dispatch]);

//   useEffect(()=>{
//     if(getListUserResult){
//       setPeople(getListUserResult.items)
//     }
//   },[getListUserResult])

 
//  function removeElement(arr)
//  {
//    for( var i = 0; i < arr.length; i++){ 
                                   
//         if ( arr[i] === 0) { 
//             arr.splice(i, 1); 
//             i--; 
//         }
//     }
//   }


//  const politicsLength = people.map((e)=>{
//   return(
//    e.articles.filter((x)=> x.theme === "politics").length
//   )
//   })

//   const mentalLength = people.map((e)=>{
//     return(
//       e.articles.filter((x)=> x.theme === "mental").length
//     )
//     })

//     const otherLength = people.map((e)=>{
//     return(
//      e.articles.filter((x)=> x.theme === "other").length
//     )
//     })
  
//   removeElement(politicsLength)
//   removeElement(mentalLength)
//   removeElement(otherLength)



  return (
    
    <>
      {/* <aside>
        <div className="">
         
          <div className="trending container mt-3">
            <h2 className="right-bar-title">Topics</h2>
           <div className="topics-list">
            <Link to='/home/mental' className="topic">
              <div className="topic-container">
              <h4>Mental Health</h4>
              <span className="text-muted">{mentalLength} Tweed</span>
              </div>
            </Link>
            <Link to={'/home/politics'} className="topic">
            <div className="topic-container">
              <h4>Politics</h4>
              <span className="text-muted">{politicsLength} Tweed</span>
              </div>
            </Link>
            <Link to='/home/other' className="topic">
            <div className="topic-container">
              <h4>Other</h4>
              <span className="text-muted">{otherLength} Tweed</span>
              </div>
            </Link>
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
                
                <Link to={`/profile/${person.id}`} className="people-btn-container justify-content-end">
                
                <button id="people-btn" className="btn btn-success mt-4">details</button>
                
                </Link>

                </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      </aside> */}
    </>
  );
}

export default RightBar;
