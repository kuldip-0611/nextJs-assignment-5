
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster, ToastIcon } from 'react-hot-toast';
import { Provider } from "react-redux";
import store from '../redux/store/store';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>

    </>
  )
}
