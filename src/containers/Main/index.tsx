import { Switch, Route, useLocation } from 'react-router-dom';
import React from 'react';

import { paths } from '../paths';
import SectionSelector from '../../components/SectionSelector';
import Home from '../../components/HomeSection';
import Planets from '../../components/PlanetsSection';
import Starships from '../../components/StarshipsSection';
import About from '../../components/PeopleSection';

const MainContainer: React.FC = () => {
  const location = useLocation();
  const pathName = Object.keys(paths).find(
    (pathName) => paths[pathName].href === location.pathname
  );

  const Title = () => (
    <h2 className="px-2 font-serif font-bold text-4xl">
      {pathName ? paths[pathName].name : 'Where are we...?'}
    </h2>
  );

  const images = ['1.png', '2.png', '3.png','4.png','5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png' ];


  return (
    <div className="container p-4 space-y-4">
      <SectionSelector />

      <Title />

      <Switch>
        <Route path={paths.planets.href}>
          <Planets />
        </Route>

        <Route path={paths.starships.href}>
          <Starships />
        </Route>

        <Route path={paths.about.href}>
          <About />
        </Route>

        <Route path={paths.home.href}>
          <Home images={images}/>
        </Route>
      </Switch>
    </div>
  );
};

export default MainContainer;
