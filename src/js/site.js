((document) => {
  // Helpers
  const stripText = text => text.toLowerCase().replace(/[\s.-]/g, '');

  // Initializations
  const findSkill = () => {
    const input = document.getElementById('findSkill');
    const tags = Array.from(document.querySelectorAll('.tag > li'));
    const texts = tags.map(tag => stripText(`${tag.innerHTML}/${tag.dataset.alt || ''}`));
    let timeout;

    const onEvent = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const query = stripText(input.value);
        texts.forEach((text, i) => {
          tags[i].className = text.indexOf(query) !== -1 ? null : 'fade';
        });
      }, 150);
    };

    input.onblur = onEvent;
    input.onkeyup = onEvent;
  };

  // Run
  findSkill();
})(document);
