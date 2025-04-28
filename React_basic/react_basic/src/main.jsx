import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// index.js에서 root가 id인 요소를 react의 root로 변환 , 그 안에 App을 render하겠다.
createRoot(document.getElementById('root')).render(
  <App />
);
