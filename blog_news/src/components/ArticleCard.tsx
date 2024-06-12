import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={article.image_urls[0]}
        alt={article.headline}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{article.headline}</h3>
        <p className="text-gray-700 mb-4">{article.subheadline}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{article.author}</span>
          <span className="text-gray-600">{article.publish_date}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard