import { h } from 'preact';

const Experience = ({ company, link, title, start, end, body }) => (
  <div class="experience">
    <div>
      <h3><a href={link} title={company} target="_blank" rel="noreferrer">{company}</a></h3>
      <h4 class="subtitle">{title}<span class="bull" />{start}&ndash;{end || 'now'}</h4>
    </div>
    {body}
  </div>
);

export default Experience;
