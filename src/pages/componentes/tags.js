const Tags = ({tags}) => {
  console.log("TAGS", tags)
  return (
      <div id className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {tags.map((tag) => 
        <a key={tag.slug} href={`/tema/${tag.slug}`}>{tag.text}</a>
        )}
      </div>
  )
}

export default Tags