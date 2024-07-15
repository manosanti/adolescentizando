import './App.css'
import AboutAnxiety from './components/AboutAnxiety'
import DepressionTDAH from './components/DepressionTDAH'
import Founders from './components/Founders'
import LetterToFuture from './components/letterToFuture'
import SpotifyPlaylist from './components/spotifyPlaylist'

function App() {
  return (
    <div>
      <Founders />
      <AboutAnxiety />
      <LetterToFuture />
      <DepressionTDAH />
      <SpotifyPlaylist />
    </div>
  )
}

export default App
