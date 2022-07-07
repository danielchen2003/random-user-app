import React, { useState, useEffect } from "react"
export default function UserSummary({ userData }) {
  const [showmore, setShowmore] = useState(false)

  if (userData !== null) {
    console.log(userData)
    const user = userData.results[0]
    const { name, cell, phone, gender, picture, location, email } = user
    // const userInfo = props.userInfo
    // console.log(userInfo)
    // console.log(props)
    // console.log(userData)

    const { title, first, last } = name
    // const element = (
    const { city, state, country } = location
    function handlerClick(showmore) {
      console.log(showmore)
      return setShowmore(!showmore)
    }

    return (
      <div>
        <h1>
          {title} {first} {last}
        </h1>
        <h2>Email:{email}</h2>(
        {showmore && (
          <div>
            <h2>Cell:{cell}</h2>
            <h2>Phone:{phone}</h2>
            <h2>Gender:{gender}</h2>
            <img src={picture} alt="picture"></img>
            <p>
              Address:{city} {state} {country}
            </p>
          </div>
        )}
        )<button onClick={() => handlerClick(showmore)}>Show More</button>
      </div>
    )
  } else {
    return "no data there"
  }
}

// {isLoggedIn
//   ? <LogoutButton onClick={this.handleLogoutClick} />
//   : <LoginButton onClick={this.handleLoginClick} />
// }
