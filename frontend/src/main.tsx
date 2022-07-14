import GlobalStyles from '@mui/material/GlobalStyles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles
      styles={{
        '*': { padding: 0, margin: 0 },
      }}
    />
  </React.StrictMode>,
)
