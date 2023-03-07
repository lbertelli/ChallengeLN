/* import '../styles/styles.css' */

import Navbar from "./componentes/navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <footer>...</footer>
    </>
  )
  
}
