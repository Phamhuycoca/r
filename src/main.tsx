import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global/_index.scss'
import { StyleProvider} from '@ant-design/cssinjs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <StyleProvider hashPriority="high" >
        <App /> 
     </StyleProvider>
  </StrictMode>,
)
