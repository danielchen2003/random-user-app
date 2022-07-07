// Inside services/ add a rando_user.js file
// Inside rando_user.js import axios, set a base url to "https://api.randomuser.me/ (Links to an external site.)"
// Also inside rando_user.js write an async function fetchUser that fetches a random user using the above url and returns the response
// Export fetchUser from the file
import axios from "axios"

export default async function fetchUser() {
  const { data } = await axios.get("https://api.randomuser.me/")
  // console.log(a)
  return data
}

// export default fetchUser
