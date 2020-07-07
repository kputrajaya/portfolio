import { h } from 'preact';
import { useMemo, useState } from 'preact/hooks';

import Contact from './contact';
import Experience from './experience';
import Skill from './skill';
import SvgLogo from './svgr/logo';

import data from '../../data';

const App = () => {
  const [query, setQuery] = useState();
  const cleanQuery = useMemo(() => (query || '').trim().toLowerCase(), [query]);

  return (
    <div class="container">
      <div class="section">
        <div class="intro">
          <SvgLogo />
          <h1>{data.name}</h1>
          <h4 class="subtitle">{data.title}<span class="bull" />{data.location}</h4>
          {data.description}
          <div>
            {data.contacts.map((contact) => <Contact {...contact} />)}
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Experiences</h2>
        <div>
          {data.experiences.map((experience) => <Experience {...experience} />)}
        </div>
      </div>

      <div class="section">
        <h2>Skills</h2>
        <input
          class="input search"
          type="text"
          placeholder="Search..."
          value={query}
          onInput={(e) => setQuery(e.target.value)}
        />
        <div>
          {data.skills.map((skill) => <Skill {...skill} query={cleanQuery} />)}
        </div>
      </div>

      <div class="section">
        <div class="footer">
          &copy; {new Date().getFullYear()}. <a href={data.sourceUrl}>Source on GitHub</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
