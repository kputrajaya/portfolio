((document) => {
  // Helpers
  const stripText = text => text.toLowerCase().replace(/[\s.-]/g, '');

  // Initializations
  const findSkill = () => {
    const input = document.getElementById('findSkill');
    const tags = [].slice.call(document.querySelectorAll('.tag > li'));
    const map = tags.map(tag => stripText(`${tag.innerHTML}/${tag.dataset.alt || ''}`));
    let timeout;

    const onEvent = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const query = stripText(input.value);
        map.forEach((text, i) => {
          tags[i].className = text.indexOf(query) !== -1 ? null : 'fade';
        });
      }, 150);
    };

    input.addEventListener('change', onEvent);
    input.addEventListener('keyup', onEvent);
  };

  // Run
  findSkill();
})(document);
