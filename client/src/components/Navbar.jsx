import React from 'react'
import avatar from "../elizeu-dias-2EGNqazbAMk-unsplash.jpg"

export const Navbar = ({ user }) => {
      const logout = () => {
            window.open("http://localhost:5000/auth/logout", "_self")

      }
      return (
            <div className='navBar'>
                  <span className='logo'><a href="/" className='link'>AXUNDA</a> </span>
                  {
                        user ? (
                              <ul className='list'>
                                    <li className='listitem'> <img src={user.photos[0].value} alt="avatar" className='avatar' /></li>
                                    <li className='listitem'>{user.displayName}</li>
                                    <li className='listitem' onClick={logout}>Logout</li>
                              </ul>

                        ) : (
                              <a href="/login" className='link'>Login</a>

                        )
                  }

            </div>
      )
}
