import { useEffect } from 'react'
import { Route, Routes, Outlet, useLocation } from 'react-router-dom'
import { Home, Booking, InfoCollection } from './pages';
import { AssassinCreed, GodOfWar, Uncharted4, RE2, NBA, UntilDawn, AssassinValhalla, DevilMy, GTAV, Stray, Efootball, FinalFantasy, StreetFight6, ModernW2, MilesMorales, ItTakesTwo, RE3, Ghost, SpiderMan2, GOW, Tekken8, Turismo7, WatchDogs, AwayOut, CallOfDuty, EldenRing, Fifa23 } from './pages/gameDetails';
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
          <Route path="/booking" element={<Booking />} />
          <Route path="/games" element={<InfoCollection />} />
          <Route path="/games/assassins-creed-mirage" element={<AssassinCreed />} />
          <Route path="/games/god-of-war-ragnarok" element={<GodOfWar />}/>
          <Route path="/games/resident-evil-2" element={<RE2 />}/>
          <Route path="/games/resident-evil-3" element={<RE3 />}/>
          <Route path="/games/spiderman-2" element={<SpiderMan2 />}/>
          <Route path="/games/tekken8" element={<Tekken8 />}/>
          <Route path="/games/gran-turismo-7" element={<Turismo7 />}/>
          <Route path="/games/devil-my-cry-5" element={<DevilMy />}/>
          <Route path="/games/a-way-out" element={<AwayOut />}/>
          <Route path="/games/call-of-duty-modern-warfare-III" element={<CallOfDuty />}/>
          <Route path="/games/watch-dog-legion" element={<WatchDogs />}/>
          <Route path="/games/final-fantasy-VII" element={<FinalFantasy />}/>
          <Route path="/games/elden-ring" element={<EldenRing />}/>
          <Route path="/games/fifa-2023" element={<Fifa23 />}/>
          <Route path="/games/ghost-of-tsushima" element={<Ghost />}/>
          <Route path="/games/god-of-war" element={<GOW />}/>
          <Route path="/games/grand-theft-auto-v" element={<GTAV />}/>
          <Route path="/games/it-takes-two" element={<ItTakesTwo />}/>
          <Route path="/games/spiderman-miles-morales" element={<MilesMorales />}/>
          <Route path="/games/stray" element={<Stray />}/>
          <Route path="/games/call-of-duty-modern-warfare-II" element={<ModernW2 />}/>
          <Route path="/games/nba-2025" element={<NBA />}/>
          <Route path="/games/e-football-2024" element={<Efootball />}/>
          <Route path="/games/street-fighter-6" element={<StreetFight6 />}/>
          <Route path="/games/uncharted-4" element={<Uncharted4 />}/>
          <Route path="/games/until-dawn" element={<UntilDawn />}/>
          <Route path="/games/assassins-creed-valhalla" element={<AssassinValhalla />}/>
        </Route>
      </Route>
    </Routes>

  )
}

export default App