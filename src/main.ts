import './style.css'

document.addEventListener('alpine:init', () => {
  // @ts-ignore
  Alpine.data('linktree', () => ({
    profile: {
      name: 'M. Ibrohim',
      bio: 'Fullstack Developer & UI Enthusiast',
      avatar: '/avatar.png'
    },
    links: [
      {
        id: 1,
        title: '💼 My Portfolio',
        url: 'https://github.com/makdumibrohim',
        colorClass: 'btn-white'
      },
      {
        id: 2,
        title: '📝 Read My Blog',
        url: '#',
        colorClass: 'btn-green'
      },
      {
        id: 3,
        title: '📸 Instagram',
        url: 'https://instagram.com',
        colorClass: 'btn-red'
      },
      {
        id: 4,
        title: '🎬 YouTube Channel',
        url: '#',
        colorClass: 'btn-purple'
      },
      {
        id: 5,
        title: '📧 Contact Me',
        url: 'mailto:hi@example.com',
        colorClass: 'btn-blue'
      }
    ],
    socials: [
      {
        id: 1,
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        url: 'https://github.com/makdumibrohim',
        colorClass: 'bg-white'
      },
      {
        id: 2,
        name: 'Twitter',
        icon: 'fa-brands fa-x-twitter',
        url: 'https://twitter.com',
        colorClass: 'bg-white'
      },
      {
        id: 3,
        name: 'LinkedIn',
        icon: 'fa-brands fa-linkedin-in',
        url: 'https://linkedin.com',
        colorClass: 'bg-white'
      }
    ]
  }));
});
