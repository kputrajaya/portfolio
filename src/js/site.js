((document) => {

  const stripText = text => text.toLowerCase().replace(/[\s\.\-]/g, '');

  const loadBlog = async () => {
    const blogPosts = document.getElementById('blogPosts');
    const template = blogPosts.firstElementChild.innerHTML;

    const response = await fetch('https://api.typewriter.cloud/kiloev/blog/types/post/');
    const posts = await response.json();

    posts.forEach(post => {
      blogPosts.innerHTML += template
        .replace('{{title}}', post.title)
        .replace('{{date}}', post.fields[0].value)
        .replace('{{content}}', post.fields[1].value);
    });
  }
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

  loadBlog();
  findSkill();

})(document);
