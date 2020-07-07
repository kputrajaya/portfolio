import { h } from 'preact';
import { useMemo } from 'preact/hooks';

const Skill = ({ title, alts, bold, query }) => {
  const relevant = useMemo(() => (
    !query ||
    title.toLowerCase().indexOf(query) >= 0 ||
    alts.some((alt) => alt.indexOf(query) >= 0)
  ), [title, alts, query]);

  return (
    <span class={`skill ${relevant ? '' : 'hidden'}`}>
      {
        bold
          ? <b>{title}</b>
          : title
      }
    </span>
  );
}

export default Skill;
