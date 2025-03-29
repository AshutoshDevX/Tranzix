import { BrowserRouter, Routes, Route } from 'react-router';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import { Dashboard } from './Pages/DashBoard';
import { Home } from './Pages/Home';
import { SendMoney } from './Pages/SendMoney';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<SendMoney />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
