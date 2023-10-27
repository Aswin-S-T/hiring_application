import React from 'react'
import PrimarySearchAppBar from './Components/Header/Header'
import OutlinedCard from './Components/Card/Card'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <header style={{backgroundColor:"yellow"}}>
        <PrimarySearchAppBar style={{backgroundColor:"yellow"}} />
      </header>
      <main>
        <div className='container-fluid mt-5'>
          <div className='row'>
            <div className='col-md-3 mt-5'>
              <Sidebar className="mt-3" />
            </div>
            <div className='col-md-6 mt-5'>
              <OutlinedCard />
            </div>
            <div className='col-md-3'>3</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App