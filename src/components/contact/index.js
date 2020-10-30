import { h } from 'preact';

import SvgContactEmail from '../svgr/contact-email';
import SvgContactGitHub from '../svgr/contact-github';
import SvgContactLinkedIn from '../svgr/contact-linkedin';

const SVG_MAP = {
  Email: SvgContactEmail,
  GitHub: SvgContactGitHub,
  LinkedIn: SvgContactLinkedIn,
};

const Contact = ({ title, link }) => {
  const Svg = SVG_MAP[title];
  return (
    <a class="contact" href={link} title={title} target={link.startsWith('mailto:') ? '_self' : '_blank'} rel="noreferrer">
      <span>
        {Svg ? <Svg /> : null}
      </span>
    </a>
  );
};

export default Contact;
