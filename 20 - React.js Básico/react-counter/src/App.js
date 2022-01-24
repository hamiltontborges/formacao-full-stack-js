import React, { useState } from 'react'

import Albums from "./pages/Albums"
import Counter from "./pages/Counter"
import Template from './templates/Template'
import Users from './pages/Users'

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


  return (

    <Template pages={pages} activePage={page} onChangePage={handleOnChangePage}>
      {Page && <Page />}
    </Template>
  )
}

export default App
