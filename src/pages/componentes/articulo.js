
const Articulo = ({src, alt, txtNegrita, txt, date, link}) => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
    <section id className="cont-figure">
      <a href={link} className="figure">
        <picture id className="content-pic picture">
          <img src={src} alt={alt} className="content-img"/>
        </picture>
      </a>
    </section>
    <div className="mod-caja-nota__descrip">
      <h2 className="com-title-acu">
        <a href={link}>
          <b>{txtNegrita}</b>
          {txt}
        </a>  
      </h2>
      <h4 className="com-date">{date}</h4>
    </div>
  </article>
  )
  
}

export default Articulo