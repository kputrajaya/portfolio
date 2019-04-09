((document) => {

  const stripText = text => text.toLowerCase().replace(/[\s\.\-]/g, '');

  const findSkill = () => {
    const input = document.getElementById('findSkill');
    const tags = [].slice.call(document.querySelectorAll('.tag > li'));
    const map = tags.map(tag => stripText(`${tag.innerHTML}/${tag.dataset.alt || ''}`));
    let timeout;

    const onChange = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const query = stripText(input.value);
        map.forEach((text, i) => {
          tags[i].className = text.indexOf(query) !== -1 ? null : 'fade';
        });
      }, 125);
    };

    input.addEventListener('change', onChange);
    input.addEventListener('keyup', onChange);
  }

  findSkill();

})(document);
