import HomePage from './components/HomePage'
import Founders from './components/Founders'
import AboutAnxiety from './components/AboutAnxiety'
import LetterToFuture from './components/LetterToFuture'
import DepressionTDAH from './components/DepressionTDAH'
import SpotifyPlaylist from './components/SpotifyPlaylist'
// import TeraphyPrograms from './components/TeraphyPrograms'
import AnxietyAttack from './components/AnxietyAttack'
import CVV from './components/CVV'
import Conclusion from './components/Conclusion'

function App() {
  return (
    <div>
      <HomePage />
      <Founders />
      <AboutAnxiety />
      <LetterToFuture />
      <DepressionTDAH />
      <SpotifyPlaylist />
      {/* <TeraphyPrograms /> */}
      <AnxietyAttack />
      <CVV />
      <Conclusion />
    </div>
  )
}

export default App
