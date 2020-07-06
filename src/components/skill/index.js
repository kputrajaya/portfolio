import { h } from 'preact';

const Skill = ({ title, strong }) => (
	<span class="s">
    {
      strong
        ? <strong>{title}</strong>
        : title
    }
  </span>
);

export default Skill;
