import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to="/account">Account</Link>
      <Link to="/login">Login</Link>
      <Link to="/login">Register</Link>
      <Link to="/cart">Cart</Link>
      <Link to="blog">Blog</Link>
    <Routes>
        <Route index path="/"></Route>
        <Route path="/account" element={"account"}></Route>
        <Route path="/login" element={"Login"}></Route>
        <Route path="/register" element={"Register"}></Route>
        <Route path="/cart" element={"Cart"}></Route>
        <Route path="/blog" element={"Blog"}></Route>
        <Route path="/privacy-policy" element={"Privacy Policy"}></Route>
      </Routes>
    </>
  )
}
