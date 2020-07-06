import { h } from 'preact';
import style from './style';

const Skill = ({ title, strong }) => (
	<span class={style.s}>
    {
      strong
        ? <strong>{title}</strong>
        : title
    }
  </span>
);

export default Skill;
