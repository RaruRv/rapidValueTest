import React, { useState, useEffect } from 'react'
import './style.css'
import { useParams, useHistory } from "react-router-dom";
const UserInfo = (props) => {
  let { id } = useParams();
  const history = useHistory()
  const [userDetails, setUserData] = useState([]);
  const userData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/`+id, {
      method: 'GET',
    })
    if (response.status !== 403) {
      let data = await response.json()
     setUserData(data)
    } else {
      await userData()
    }
  }
  const loadData = async () => {
    await userData()
  }

  useEffect(() => {
    loadData()
  }, [])

  function goBackBtn() {
    history.push(`/users`)
  }
  return (
    <div>
      <div className="breadcrumb">
        <div className="breadcrumb-h"><h4>User Information</h4></div>
        <div className="go-back-btn"><button type="button" className="btn btn-primary " onClick={() => goBackBtn()}>Go Back</button></div>
      </div>
      <div className="user-info">
        <div><span>Name :</span><span>{userDetails.name}</span></div>
        {/* <div><span>Address :</span><span>{userDetails.address.street}, {userDetails.address.city},{userDetails.address.suite}, {userDetails.address.zipcode}</span></div> */}
        <div><span>Phone :</span><span>{userDetails.phone}</span></div>
        <div><span>Email :</span><span>{userDetails.email}</span></div>
        <div><span>Website :</span><span>{userDetails.website}</span></div>
        {/* <div><span>Company Name :</span><span>{userDetails.company.name}</span></div> */}
      </div>
    </div>
  )
}
export default UserInfo