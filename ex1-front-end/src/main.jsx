import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import { ProviderWrapper } from './services/Contexte'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderWrapper>
    <App />
  </ProviderWrapper>,
)
