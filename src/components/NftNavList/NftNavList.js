import React from 'react'
import './UserMenu.css'
function NftNavList() {
  return (
    <section className='user-menu-section'>
        <div className='container'>
            <div className='user-menu'>
                <ul>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>All Creations</a></li>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>Lists</a></li>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>Likes</a></li>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>Bookmarks</a></li>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>Public</a></li>
                    <li><a href="/" className='nav-user-link nav-user-link-active'>Private</a></li>
                </ul>
                
            </div>

        </div>
    </section>
  )
}

export default NftNavList