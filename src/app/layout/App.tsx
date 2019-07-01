import React from "react"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navbar from "./Navbar"
import Routes from "app/routes/Routes"

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <main>
          <Routes />
        </main>
      </Container>
    </>
  )
}

export default App
