import Sidebar from './components/Sidebar'
import Navbar from './components/NavBar'
import RightColumn from './components/RightColumn'
import LeftColumn from './components/LeftColumn'

function App() {
  return (
    <main className=' flex'>
      <Sidebar />
      <div className=' flex flex-col flex-1 relative'>
      <Navbar />
      <div className=' grid md:grid-cols-3 grid-cols-1 w-full'>
        <div className=' col-span-2'>
          <LeftColumn />
          </div>
        <div className=' w-full'>
          <RightColumn />
          </div>
      </div>
      </div>
    </main>
  )
}

export default App
