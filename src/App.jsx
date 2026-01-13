import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{"textAlign": "center"}}>
          <header>
              <h1>AWS S3 + CloudFront 배포 성공!</h1>
              <p>HTTPS로 보안 접속되었습니다.</p>
          </header>
      </div>
  );
}

export default App
