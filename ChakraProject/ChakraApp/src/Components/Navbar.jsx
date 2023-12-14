import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <Box display="flex" justifyContent="space-around">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/msg">Msg</Link>

    </Box>
    </>
  )
}
