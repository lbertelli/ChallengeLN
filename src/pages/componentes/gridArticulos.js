import Articulo from "./articulo"

const GridArticulos = ({articles}) => {
  console.log("articulos", articles)
  return (
    <ul className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map(article => (
        <Articulo 
        key={article._id} 
        src={article.promo_items?.basic.url} 
        alt={article.headlines.basic}
        txtNegrita={article.headlines.basic}
        txt={article.promo_items.subtitle}
        date={article.display_date}
        link={article.website_url}
         />
      ))}
    </ul>
  )
}

export default GridArticulos