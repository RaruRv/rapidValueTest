import React, { useState, useEffect } from 'react'
import './style.css'
import Avatar from "react-avatar";
import { useHistory } from 'react-router-dom'

const UserPage = () => {
  const history = useHistory()
  const [userList, setUserList] = useState([]);
  
  const userData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET',
    })
    if (response.status !== 403) {
      let data = await response.json()
      setUserList(data)
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

  function showUserDetails(i) {
    console.log(i)
    history.push(`/userInfo/`+i)
  }

  return (
    <div>
      {/* <div className="user-list-h"><h4>Users</h4></div> */}
      <div className="breadcrumb">
        <div className="breadcrumb-h"><h4>Users</h4></div>
      </div>
      {userList.map((field, idx) => {
        return (
        <div className="user-list" key={idx} onClick={() => showUserDetails(idx+1)}>
          <div className="dp">
            <Avatar
              name={field.name}
              size="32"
              round={true}
              textSizeRatio={1}
            />
          </div>
          <div>
            <h4>{field.name}</h4>
            <span>{field.email}</span>
          </div>
        </div>
        )
      })}
    </div>
  )
}
export default UserPage