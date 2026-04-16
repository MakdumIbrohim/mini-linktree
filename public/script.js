document.addEventListener('alpine:init', () => {
  Alpine.data('linktree', () => ({
    profile: {
      name: 'Makdum Ibrohim',
      avatar: '/avatar.png'
    },
    links: [
      {
        id: 1,
        title: 'Personal Website',
        icon: 'fa-solid fa-globe',
        url: 'https://about-dum.vercel.app/',
        colorClass: 'btn-white'
      },
      {
        id: 2,
        title: 'My GitHub',
        icon: 'fa-brands fa-github',
        url: 'https://github.com/MakdumIbrohim',
        colorClass: 'btn-github'
      }
    ]
  }));
});
