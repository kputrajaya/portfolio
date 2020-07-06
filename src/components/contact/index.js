import { h } from 'preact';

const Contact = ({ title, svg, link }) => (
	<a class="c" href={link} title={title}>
    <span>
      {svg}
    </span>
  </a>
);

export default Contact;
