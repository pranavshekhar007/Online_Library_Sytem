import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./utils/Store"


function App() {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default App
