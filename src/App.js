// import logo from "./logo.svg"
import "./App.css"
// import Tick from "./compo/refreshUser"
import fetchUser from "./service/rando_user"
import React, { useState, useEffect } from "react"
import UserSummary from "./compo/UserSummary"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [userInfo, setUserInfo] = useState([])

  const refreshUser = async () => {
    let user = await fetchUser()
    const { results } = user
    // console.log(results)
    setUserInfo([...userInfo, user])
    console.log(userInfo)
    return user
  }

  useEffect(() => {
    async function request() {
      await refreshUser()
    }
    request()
  }, [])

  // const showMoreUser = async () => {
  //   let res = await fetchUser()
  //   const { results } = res
  //   setUserInfo([res, ...userInfo])
  //   console.log(userInfo)
  // }

  const mappedListOfUsers = userInfo.map((user) => {
    return <UserSummary key={uuidv4()} userData={user} />
  })

  return (
    <div className="App">
      <button onClick={refreshUser}>RefreshUser</button>
      <div>{mappedListOfUsers}</div>

      {/* <button onClick={showMoreUser}>Showmoreperson</button> */}
    </div>
  )
}

export default App
