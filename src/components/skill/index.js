import { h } from 'preact';
import { useMemo } from 'preact/hooks';

const Skill = ({ title, alts, strong, query }) => {
  const relevant = useMemo(() => (
    !query ||
    title.toLowerCase().indexOf(query) >= 0 ||
    alts.some((alt) => alt.indexOf(query) >= 0)
  ), [title, alts, query]);

  return (
    <span class={`s ${relevant ? '' : 'h'}`}>
      {
        strong
          ? <strong>{title}</strong>
          : title
      }
    </span>
  );
}

export default Skill;
