import './App.css';
import Header from './components/Header.jsx';
import MainContent from './components/ManiContent.jsx';
import Navigation from './components/Navigation.jsx';
function App() {

  return (
      <div className="app">
          <Header />
          <div className='row'>
          <Navigation />
          <MainContent />
          </div>
      </div>
  )
}

export default App