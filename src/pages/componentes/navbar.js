/* import { useEffect } from "react"
import { getData } from "../api/hello" */


const Navbar = () => {

  /* useEffect(() => {
    const loadComponent = async () => {
      const reponse = await getData()
      console.log(reponse)
    }
    loadComponent()
  }, []) */

  return (
    <header className="header --scrollUp">  
    <div className="lay">
      <div className="row">
          <div className="col-4 header__left">
            <div className="com-hamburger">
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
            </div>
            <form className="com-search" > 
              <input type="text" classname="com-search-input" placeholder="Buscar" />
              <i className="icon-search"></i>
              <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
            </form>
          </div>
          <div className="col-4 middle">
            <a href="/" className="header_middle_logo">
              <i className="logo-la-nacion"></i>
            </a>
          </div>
          <div className="col-4 right">
            <div className="com-usuario">
              <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
              <button className="--btn --secondary">Ingresar</button>
            </div>
          </div>
      </div>
    </div>
    </header>

  )
}

export default Navbar