import { h } from 'preact';
import style from './style';

const Contact = ({ title, svg, link }) => (
	<a class={style.c} href={link} title={title}>
    <span>
      {svg}
    </span>
  </a>
);

export default Contact;
