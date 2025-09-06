import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <Outlet/>
      </div>
  )
}

export default Home

// naviagte
// useParams
// useNavigate
// useLocation
// Outlet :thường sử dụng khi chi layoutlayout