import { h } from 'preact';

import SvgContactEmail from '../svgr/contact-email';
import SvgContactGitHub from '../svgr/contact-github';
import SvgContactInstagram from '../svgr/contact-instagram';
import SvgContactLinkedIn from '../svgr/contact-linkedin';
import SvgContactTwitter from '../svgr/contact-twitter';

const SVG_MAP = {
  Email: SvgContactEmail,
  GitHub: SvgContactGitHub,
  Instagram: SvgContactInstagram,
  LinkedIn: SvgContactLinkedIn,
  Twitter: SvgContactTwitter
};

const Contact = ({ title, link }) => {
  const Svg = SVG_MAP[title];
  return (
    <a class="contact" href={link} title={title} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
      <span>
        {Svg ? <Svg /> : null}
      </span>
    </a>
  );
};

export default Contact;
