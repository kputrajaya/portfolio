import { h } from 'preact';
import style from './style';

const Experience = ({ company, link, title, start, end, body }) => (
  <div class={style.e}>
    <div>
      <h4><a href={link}>{company}</a></h4>
      <h5>{title} &bull; {start}&ndash;{end || 'now'}</h5>
    </div>
    {body}
  </div>
);

export default Experience;
