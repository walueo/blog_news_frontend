import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import ArticleCard from '@/components/ArticleCard'
import Footer from '@/components/Footer'
import { Article } from '@/types'

// Sample JSON data
const articles: Article[] = [
  {
    headline: 'Article 1 Headline',
    subheadline: 'Article 1 Subheadline',
    body: 'Article 1 Body',
    category: 'Technology',
    author: 'John Doe',
    publish_date: '2023-06-10',
    tags: ['tag1', 'tag2'],
    video_urls: [],
    image_urls: ['https://via.placeholder.com/600x400'],
  },
  {
    headline: 'Article 2 Headline',
    subheadline: 'Article 2 Subheadline',
    body: 'Article 2 Body',
    category: 'Business',
    author: 'Jane Smith',
    publish_date: '2023-06-09',
    tags: ['tag3', 'tag4'],
    video_urls: [],
    image_urls: ['https://via.placeholder.com/600x400'],
  },
  // Add more articles as needed
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider articles={articles} />
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.slice(0, 2).map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}