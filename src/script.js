document.addEventListener('alpine:init', () => {
  Alpine.data('linktree', () => ({
    profile: {
      name: 'M. Ibrohim',
      bio: 'Fullstack Developer & UI Enthusiast',
      avatar: './avatar.png'
    },
    links: [
      {
        id: 1,
        title: 'Personal Website',
        icon: 'fa-solid fa-globe',
        url: 'https://makdumibrohim.id',
        colorClass: 'btn-white'
      },
      {
        id: 2,
        title: 'My GitHub',
        icon: 'fa-brands fa-github',
        url: 'https://github.com/makdumibrohim',
        colorClass: 'btn-github'
      },
      {
        id: 3,
        title: 'Instagram',
        icon: 'fa-brands fa-instagram',
        url: 'https://instagram.com',
        colorClass: 'btn-instagram'
      },
      {
        id: 4,
        title: 'YouTube Channel',
        icon: 'fa-brands fa-youtube',
        url: '#',
        colorClass: 'btn-youtube'
      },
      {
        id: 5,
        title: 'Contact Me',
        icon: 'fa-solid fa-envelope',
        url: 'mailto:hi@example.com',
        colorClass: 'btn-blue'
      }
    ]
  }));
});
