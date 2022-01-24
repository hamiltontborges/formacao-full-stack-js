import React from 'react'

const Nav = ({ onChangePage, pages }) => {

    const pageNames = Object.keys(pages)

    return (
        <nav>
            {
                pageNames.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
            }
        </nav>
    )
}

export default Nav