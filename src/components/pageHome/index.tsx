import Slide from '../carousel'
import AdvertisementProducts from '../advertisementProducts'
import NewArrivals from '../newArrivals'
import CollectionDetail from '../collectionDetail'
import FeaturedProducts from '../featuredProducts'
import LatestBlog from '../latestBlog'
import Clients from '../clients'

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
    </div>
  )
}

export default HomePage
