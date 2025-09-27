
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext'
import { store } from "./redux/store";
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>
)
