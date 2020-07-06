import { h } from 'preact';

import Contact from './contact';
import Experience from './experience';
import Skill from './skill';
import SvgLogo from './svgr/logo';
import { CONTACTS, EXPERIENCES, SKILLS } from './data';

const App = () => {
	return (
		<div id="app">
			<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&family=Tajawal:wght@500&display=swap" rel="stylesheet" />

      <div class="p">
        <SvgLogo />
      <h1>Kevin Putrajaya</h1>
      <h3>Software Engineer &bull; Jakarta, ID</h3>
        <p>I'm passionate about efficient <b>problem&nbsp;solving</b> using robust <b>system&nbsp;architecture</b> and agile <b>product&nbsp;development</b>.</p>
        <div>
          { CONTACTS.map((contact) => <Contact {...contact} />) }
        </div>
      </div>
      <div class="p">
        <h2>Experiences</h2>
        <div>
          { EXPERIENCES.map((experience) => <Experience {...experience} />) }
        </div>
      </div>
      <div class="p">
        <h2>Skills</h2>
        <div>
          { SKILLS.map((skill) => <Skill {...skill} />) }
        </div>
      </div>
		</div>
	);
}

export default App;
