
    const posts = [
      {
        title: 'My favorite programming language is JavaScript',
        author: 'u/javascript_lover',
      },
      {
        title: 'Why I think Python is the best language for beginners',
        author: 'u/python_fan',
      },
      {
        title: 'The benefits of learning C++',
        author: 'u/cpp_enthusiast',
      },
    ];

    function renderPosts(posts) {
      const postsContainer = document.getElementById('posts');
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('div');
        titleElement.classList.add('post-title');
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const authorElement = document.createElement('div');
        authorElement.classList.add('post-author');
        authorElement.textContent = post.author;
        postElement.appendChild(authorElement);

        postsContainer.appendChild(postElement);
      });
    }

    renderPosts(posts);