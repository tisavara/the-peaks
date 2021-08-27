import React, { useEffect, useState } from 'react'
import '../style/Navbar.css'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState(false)
  const [valueSearch, setValueSearch] = useState()

  document.addEventListener('mousedown', (event) => {
    if (document.querySelector('.group-layout').contains(event.target) || valueSearch) {
      setSearchInput(true)
    } else {
      setSearchInput(false)
    }
  })

  useEffect(() => {
    if (valueSearch) history.push(`/search/${valueSearch}`)
    else history.push('/')
  }, [valueSearch])

  return <nav
    className="navbar"
    aria-label="main navigation">
    <div className="navbar-main">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
            <img className="logo-img" src={require('../image/Logo_White.png')} alt="The peaks icon" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="group-layout" style={{ backgroundColor: searchInput && '#354ca0' }}>
          <input
            onChange={(e) => setValueSearch(e.target.value)}
            style={{ display: !searchInput && 'none' }}
            placeholder="Search all news"
            className="input-search"
            name="search"
          />
          <button className="search-icon">
            <img className="img-book-mark-icon" src={require('../image/search-icon@2x.svg')} alt="search icon" width="15vw" />
          </button>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar
