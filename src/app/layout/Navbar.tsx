import React from "react"
import { Link as RouterLink } from "react-router-dom"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "@material-ui/core/Link"

const Navbar = () => (
  <Toolbar component="nav" variant="dense">
    <Link
      component={RouterLink}
      color="inherit"
      noWrap
      variant="body2"
      to="/timer-with-hooks"
    >
      Timer (Hooks)
    </Link>
  </Toolbar>
)

export default Navbar
