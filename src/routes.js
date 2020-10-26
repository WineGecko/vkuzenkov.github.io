import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './views/about/AboutMeView';
import AboutSite from './views/about/AboutSiteView';
import Education from './views/resume/EducationView';
import ProfessionalSkills from './views/resume/ProfessionalSkillsView';
import Experience from './views/resume/ExperienseView';

const routes = (
    <Switch>
        <Route path="/">
            <AboutMe />
        </Route>
        <Route path="/site">
            <AboutSite />
        </Route>
        <Route path="/education">
            <Education />
        </Route>
        <Route path="/exp">
            <Experience />
        </Route>
        <Route path="/skills">
            <ProfessionalSkills />
        </Route>
    </Switch>
);

export default routes;