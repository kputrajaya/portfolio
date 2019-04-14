((document) => {
  // Variables
  const blogModal = document.getElementById('blogModal');

  // Helpers
  const stripText = text => text.toLowerCase().replace(/[\s.-]/g, '');
  const addClass = (el, name) => {
    const regexClass = new RegExp(`\\b${name}\\b`, 'g');
    return regexClass.test(el.className)
      ? el.className
      : `${el.className} ${name}`;
  };
  const removeClass = (el, name) => {
    const regexClass = new RegExp(`\\b${name}\\b`, 'g');
    return el.className.replace(regexClass, '');
  };

  // Initializations
  const loadPosts = async () => {
    const response = await fetch('https://blog-api.kputrajaya.com/master/posts/');
    const posts = await response.json();
    if (!posts || !posts.length) return;

    const section = document.getElementById('blog');
    const postWrapper = document.getElementById('postWrapper');
    const blogModalContent = document.getElementById('blogModalContent');
    const template = postWrapper.firstElementChild.innerHTML;
    const regexHtmlTags = /<[^>]+>/g;

    postWrapper.innerHTML = '';
    posts.forEach((post) => {
      postWrapper.innerHTML += template
        .replace('{{title}}', post.title)
        .replace('{{date}}', post.created_at)
        .replace('{{preview}}', post.content.replace(regexHtmlTags, ''))
        .replace('{{content}}', post.content);
    });
    section.className = addClass(section, 'show');

    const onClick = (event) => {
      blogModalContent.innerHTML = event.currentTarget.innerHTML;
      blogModal.className = addClass(blogModal, 'show');
    };

    postWrapper.childNodes.forEach((el) => {
      const post = el.firstElementChild;
      if (!post) return;
      post.addEventListener('click', onClick);
    });
  };
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
  const closeModal = () => {
    const blogModalBack = document.getElementById('blogModalBack');

    const onClick = () => {
      blogModal.className = removeClass(blogModal, 'show');
    };

    blogModalBack.addEventListener('click', onClick);
  };

  // Run
  loadPosts();
  findSkill();
  closeModal();
})(document);
