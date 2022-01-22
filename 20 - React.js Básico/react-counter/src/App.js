import React, { useState } from 'react'
import Albums from "./Albums"
import Counter from "./Counter"
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  users: {
    text: 'Usuários',
    component: Users,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
}

const App = () => {

  const [page, setPage] = useState(defaultPage)

  const handleOnChangePage = page => {
    setPage(page)
  }

  /*  
      const Page = page === 'albuns'
      ? Albuns
      : Counter 
  */

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  return (
    <>
      {
        pageNames.map(page => <button onClick={() => handleOnChangePage(page)}>{pages[page].text}</button>)
      }
      

      {Page && <Page />}
    </>
  )
}

export default App
