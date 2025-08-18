import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import travelData from './data.js'

function App() {

  const travelsEl = travelData.map( travel => {
    return (
      <Entry
        key = {travel.id}
        {...travel}
      />
      )
  })

  return (
    <main> 
      <Header />
      {travelsEl}
    </main>
  )
}

export default App
