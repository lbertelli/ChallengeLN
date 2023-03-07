/* import '../styles/styles.css' */

import GridArticulos from "./componentes/gridArticulos";
import Tags from "./componentes/tags";

export async function getServerSideProps() {
  const reponse = await fetch("https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/")
  const data = await reponse.json()

  const articles = data.articles.filter(article => article.subtype === "7")
  .slice(0, 30)
  .map(article => ({
    ...article, 
    display_date: new Date(article.display_date).toLocaleDateString("es-Ar", {
      year: 'numeric', 
      month: 'long', 
      day:'numeric'
    })
  }))

  const tagMap = articles.reduce((map, article) => {
    for(let tag of article.taxonomy.tags) {
      if(!map[tag.slug]){
        map[tag.slug] = {
          ...tag, 
          count: 1
        }
      }
      
      map[tag.slug].count++
    }
    
    return map
  }, {})
  
  const sortedTags = Object.values(tagMap).sort((a,b) =>(b.count - a.count)).slice(0, 10)

  return {
    props:{
      articles,
      tags: sortedTags  
    } 
  }
}

export default function HomePage({articles, tags}) {

  return (
    <html lang="es">
      <body>
        <div id="wrap">
          <div className="banner w-100 --bg-banner">
            <div className="banner --top --desktop"></div>
            <div className="banner --top --tablet"></div>
            <div className="banner --top --mobile"></div>
          </div>
          <div className="lay-sidebar">
            <div className="sidebar_main">
              <div className="row">
                <div className="com-titleWithfollow hlp-marginBottom-15">
                  <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
                </div>
              </div>
              <div className="row">
                <Tags tags={tags} />
              </div>
              <GridArticulos articles={articles} />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
