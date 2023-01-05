import './App.css';
import { useRef } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import data from './resources/countryData';

function App() {

  const focusRef = useRef(null);

  const focus = function ()  {
    window && window.addEventListener('keydown', (e) => {
      if(e.key === "Escape") {
        focusRef.current.blur()
      }
    })
  }
  
  focus()

  return (
  <div>
    <ReactSearchAutocomplete
      ref={focusRef}
      items={data}
    autoFocus/>
  </div>
  )
}

export default App;
