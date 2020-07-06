import { h } from 'preact';

import Contact from '../../components/contact';
import Experience from '../../components/experience';
import Skill from '../../components/skill';
import SvgLogo from '../../components/svgr/logo';
import { CONTACTS, EXPERIENCES, SKILLS } from '../../components/data';
import style from './style';

const Home = () => {


  return (
    <div>
      <div class={style.section}>
        <SvgLogo />
      <h1>Kevin Putrajaya</h1>
      <h3>Software Engineer &bull; Jakarta, ID</h3>
        <p>I'm passionate about efficient <b>problem&nbsp;solving</b> using robust <b>system&nbsp;architecture</b> and agile <b>product&nbsp;development</b>.</p>
        <div>
          { CONTACTS.map((contact) => <Contact {...contact} />) }
        </div>
      </div>
      <div class={style.section}>
        <h2>Experiences</h2>
        <div>
          { EXPERIENCES.map((experience) => <Experience {...experience} />) }
        </div>
      </div>
      <div class={style.section}>
        <h2>Skills</h2>
        <div>
          { SKILLS.map((skill) => <Skill {...skill} />) }
        </div>
      </div>
    </div>
  );
};

export default Home;
