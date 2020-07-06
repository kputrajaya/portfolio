import { h } from 'preact';

const Experience = ({ company, link, title, start, end, body }) => (
  <div class="e">
    <div>
      <h3><a href={link}>{company}</a></h3>
      <h4>{title} &bull; {start}&ndash;{end || 'now'}</h4>
    </div>
    {body}
  </div>
);

export default Experience;
