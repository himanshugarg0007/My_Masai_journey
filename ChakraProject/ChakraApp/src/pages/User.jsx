import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
export default function User() {
  let [user, setUser] = useState([])
async function getdata() {
    try {
      let res = await fetch(`https://reqres.in/api/users?page=2`)
      let data = await res.json()
      setUser(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <>
    <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} gap={"20px"}>
      {user.map((e) => {
        return (
          <Box border="1px solid black" w={"fit-content"} m={"auto"} mt={"20px"} p={"10px"} key={e.id}>
            <img src={e.avatar} alt="" />
            <h1>{e.first_name} {e.last_name}</h1>
            <p>{e.email}</p>
          </Box>
        )
      })}
    </Box>
    </>
  )
}
