import React from 'react'
import '../styles/NavSearch.css'
function NavSearch() {
    return (
        < div className="navSearch">
            <div className="navSearch__logo">
                <img className="logo"
                    src="https://www.fitnessondemand247.com/wp-content/uploads/2018/03/Fitness-on-Demand-Logo.png"
                    alt="FitnessOnDemand" />
            </div>
            <div className="navSearch__search">
                <input className='search__input'></input>
                <button className='search__button'>Search</button>
                <div className='search__filters'><p>filters</p></div>
            </div>
        </div>
    )
}

export default NavSearch
