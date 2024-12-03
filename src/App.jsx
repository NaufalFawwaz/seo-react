import { useEffect } from 'react'
import { Route, Routes, Outlet, useLocation } from 'react-router-dom'
import { Home, Booking, InfoCollection } from './pages';
import { AssassinCreed, GodOfWar, RE2, DevilMy, FinalFantasy, RE3, SpiderMan2, Tekken8, Turismo7, WatchDogs, AwayOut, CallOfDuty } from './pages/gameDetails';
import ContentRoutes from './Routes/ContentRoutes'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

function App() {

  return (
    <Routes>
      <Route element={<ScrollToTop />}>
        <Route element={<ContentRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/book+" element={<Booking />} />
          <Route path="/info" element={<InfoCollection />} />
          <Route path="/info/assassins-creed-mirage" element={<AssassinCreed />} />
          <Route path="/info/god-of-war-ragnarok" element={<GodOfWar />}/>
          <Route path="/info/resident-evil-2" element={<RE2 />}/>
          <Route path="/info/resident-evil-3" element={<RE3 />}/>
          <Route path="/info/spiderman-2" element={<SpiderMan2 />}/>
          <Route path="/info/tekken8" element={<Tekken8 />}/>
          <Route path="/info/gran-turismo-7" element={<Turismo7 />}/>
          <Route path="/info/devil-my-cry-5" element={<DevilMy />}/>
          <Route path="/info/a-way-out" element={<AwayOut />}/>
          <Route path="/info/call-of-duty-modern-warfare-III" element={<CallOfDuty />}/>
          <Route path="/info/watch-dog-legion" element={<WatchDogs />}/>
          <Route path="/info/final-fantasy-VII" element={<FinalFantasy />}/>
        </Route>
      </Route>
    </Routes>

  )
}

export default App