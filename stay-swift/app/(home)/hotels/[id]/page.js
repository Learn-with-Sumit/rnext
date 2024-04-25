import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"

import { getHotelById } from "@/database/queries"

const HotelDetailsPage = async ({params: {id}}) => {
  const hotelInfo = await getHotelById(id);

  return (
    <>
        <Summary hotelInfo={hotelInfo }/>
        <Gallery gallery={hotelInfo?.gallery}/>
        <Overview overview={hotelInfo?.overview}/>
    </>
  )
}

export default HotelDetailsPage