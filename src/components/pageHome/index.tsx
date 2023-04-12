import Slide from '../carousel'
import AdvertisementProducts from '../advertisementProducts'
import NewArrivals from '../newArrivals'
import CollectionDetail from '../collectionDetail'
import FeaturedProducts from '../featuredProducts'
import LatestBlog from '../latestBlog'
import Clients from '../clients'
import NewsLetter from '../newsLetter'

function HomePage() {
  return (
    <div>
      <Slide />
      <AdvertisementProducts />
      <NewArrivals />
      <CollectionDetail />
      <FeaturedProducts />
      <LatestBlog />
      <Clients />
      <NewsLetter />
    </div>
  )
}

export default HomePage
