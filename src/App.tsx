import './index.css'
import './css/Global.css'
import './css/Aces.css'
import './css/Aces-Media.css'
import './css/Animate.css'
import './css/Owl.css'
import './css/Block.css'
import './css/App.css'
import './css/Mercury.css'
import './css/Media.css'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Skeleton from './layouts/skeleton'
import Terms from './pages/terms-and-conditions'
import AboutUs from './pages/about-us'
import ScrollToTop from './components/scrollToTop'
import Detail from './pages/details'
import { createContext } from 'react'
import Reviews from './pages/reviews'
import CookieConsent from "react-cookie-consent";
import ContactUs from './pages/contact-us'
import { ToastContainer } from 'react-toastify'

export const ListContext = createContext<{ id: string, title: string, website: string, imagePath: string, rating: number, address: string, review: string }[]>([]);

function App() {

  return (
    <>
      <ListContext.Provider value={[
        {
          id: "skycity-auckland",
          title: "SkyCity Auckland",
          website: "https://skycityauckland.co.nz/",
          imagePath: "/hotels/skycity-auckland.jpg",
          rating: 5,
          address: "Corner Victoria and, Federal Street, Auckland CBD, Auckland 1010, New Zealand",
          review: `SkyCity Auckland Hotel Casino stands as a beacon of refined opulence in the heart of Auckland. With its striking architecture and impeccable service, this esteemed establishment offers an extraordinary experience for guests seeking a lavish retreat.
          The hotel's design seamlessly blends modern sophistication with tasteful elegance. From the grandeur of the lobby to the contemporary furnishings, every detail exudes a sense of luxury and prestige.
          The accommodations at SkyCity Auckland Hotel Casino are a testament to refined comfort. Guests are welcomed into spacious and exquisitely appointed rooms, featuring breathtaking cityscape views. The rooms are thoughtfully designed with plush amenities and high-quality furnishings, ensuring a restful stay for every guest.
          For those seeking entertainment and excitement, the casino at SkyCity Auckland Hotel is a must-visit. The expansive gaming floor showcases an impressive variety of table games and an extensive collection of slot machines. The dedicated staff is readily available to provide assistance and enhance the gaming experience.`
        },
        {
          id: "skycity-hamilton",
          title: "SkyCity Hamilton",
          website: "https://skycityhamilton.co.nz/",
          imagePath: "/hotels/skycity-hamilton.jpg",
          rating: 5,
          address: "346 Victoria Street, Hamilton Central, Hamilton 3204, New Zealand",
          review: `SkyCity Hamilton Hotel Casino offers an exceptional experience for guests seeking a luxurious retreat in Hamilton. The hotel boasts stylish and contemporary architecture that seamlessly blends with its surroundings. With its prime location, guests can easily access the vibrant city center and nearby attractions.
          The hotel rooms at SkyCity Hamilton are thoughtfully designed, providing a comfortable and welcoming ambiance. Guests can enjoy well-appointed accommodations with modern amenities, including high-speed internet and flat-screen TVs. The rooms offer a serene escape, allowing guests to relax and unwind after a day of exploration or gaming excitement.
          Speaking of gaming, the casino at SkyCity Hamilton is a hub of entertainment. It offers a wide range of gaming options, including table games and slot machines, ensuring that every guest can find their preferred style of play. The casino floor is vibrant and lively, creating an atmosphere of excitement and anticipation.`
        },
        {
          id: "christcurch-casino",
          title: "Christcurch Casino",
          website: "https://christchurchcasino.co.nz/",
          imagePath: "/hotels/christchurch-casino.jpg",
          rating: 5,
          address: "30 Victoria Street, Christchurch Central City, Christchurch 8013, New Zealand",
          review: `Christchurch Casino, located in the heart of Christchurch, offers a captivating blend of entertainment and hospitality. The casino hotel boasts a vibrant atmosphere and an impressive array of gaming options to cater to all preferences. Visitors can enjoy a diverse range of table games and slot machines, providing endless excitement for both seasoned players and newcomers alike. 
          The casino's elegant interior, complemented by its live entertainment and inviting ambience, creates a captivating experience for guests. In addition to its gaming offerings, Christchurch Casino also features a variety of dining options, from casual eateries to upscale restaurants, ensuring that every culinary craving is satisfied. 
          While the establishment does not have an on-site hotel, there are several accommodation options conveniently located nearby, allowing guests to immerse themselves in the vibrant atmosphere of the casino while enjoying comfortable lodging in close proximity. 
          Overall, Christchurch Casino provides a memorable and enjoyable experience for anyone seeking entertainment and hospitality in Christchurch.`
        },
        {
          id: "the-grand-casino-dunedin",
          title: "The Grand Casino Dunedin",
          website: "https://grandcasino.co.nz/",
          imagePath: "/hotels/Grand-Casino.jpg",
          rating: 4.5,
          address: "118 High Street, Central Dunedin, Dunedin 9016, New Zealand",
          review: `Situated in the charming city of Dunedin, the Dunedin Casino offers an extraordinary experience that captivates visitors from all walks of life. This renowned hotel casino is a haven of entertainment, boasting a diverse range of gaming options, exquisite dining establishments, and a vibrant atmosphere.

          The architectural splendor of the Dunedin Casino immediately captures attention, with its historic Grand Hotel building providing a nostalgic backdrop for an unforgettable stay. The opulent interiors and elegant decor create an ambiance of refined elegance, transporting guests to a world of sophistication.
          
          The casino floor is a hub of excitement, featuring a wide selection of table games and an impressive array of slot machines that cater to every gaming preference. From thrilling poker tournaments to classic games like roulette and blackjack, the casino offers an immersive and exhilarating experience for both novice players and seasoned gamblers.`
        },
      ]}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Skeleton />}>
              <Route path='' element={<HomePage />} />
              <Route path='terms-and-conditions' element={<Terms />} />
              <Route path='about-us' element={<AboutUs />} />
              <Route path='detail' element={<Detail />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='contact-us' element={<ContactUs />} />
              <Route path='reviews/:id' element={<Detail />} />
            </Route>
          </Routes>
          <CookieConsent>We use cookies to enhance your browsing experience; by using our website, you consent to our use of cookies.</CookieConsent>
          <ToastContainer />
        </BrowserRouter>
      </ListContext.Provider>
    </>
  )
}

export default App
