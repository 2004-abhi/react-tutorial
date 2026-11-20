
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)



// createRoot()--- it create the connection between your HTML and REACT application
// createROOT()--- present inside react-dom library so we have to import it .
// and it is named module so we are using {}

// step1:--- we are getting the div element
// document.getElementById('root')

// step2:--- inside the div element we are inserting App component