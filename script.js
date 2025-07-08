const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

const images = [
  {
    thumb: 'https://picsum.photos/id/1011/300/200',
    hd: 'https://picsum.photos/id/1011/1000/600',
    caption: 'Mountain and lake'
  },
  {
    thumb: 'https://picsum.photos/id/1025/300/200',
    hd: 'https://picsum.photos/id/1025/1000/600',
    caption: 'Cute dog'
  },
  {
    thumb: 'https://picsum.photos/id/1035/300/200',
    hd: 'https://picsum.photos/id/1035/1000/600',
    caption: 'River through the trees'
  },
  {
    thumb: 'https://picsum.photos/id/1043/300/200',
    hd: 'https://picsum.photos/id/1043/1000/600',
    caption: 'Mountain road'
  },
  {
    thumb: 'https://picsum.photos/id/1062/300/200',
    hd: 'https://picsum.photos/id/1062/1000/600',
    caption: 'Camping in the woods'
  },
  {
    thumb: 'https://picsum.photos/id/1069/300/200',
    hd: 'https://picsum.photos/id/1069/1000/600',
    caption: 'Calm ocean'
  },
  {
    thumb: 'https://picsum.photos/id/1074/300/200',
    hd: 'https://picsum.photos/id/1074/1000/600',
    caption: 'Sunny forest trail'
  },
  {
    thumb: 'https://picsum.photos/id/1080/300/200',
    hd: 'https://picsum.photos/id/1080/1000/600',
    caption: 'Foggy field'
  },
  {
    thumb: 'https://picsum.photos/id/1084/300/200',
    hd: 'https://picsum.photos/id/1084/1000/600',
    caption: 'Desert rocks'
  },
  {
    thumb: 'https://picsum.photos/id/1081/300/200',
    hd: 'https://picsum.photos/id/1081/1000/600',
    caption: 'River canyon'
  },
  {
    thumb: 'https://picsum.photos/id/1082/300/200',
    hd: 'https://picsum.photos/id/1082/1000/600',
    caption: 'Snowy pine trees'
  },
  {
    thumb: 'https://picsum.photos/id/1083/300/200',
    hd: 'https://picsum.photos/id/1083/1000/600',
    caption: 'Bridge at sunset'
  }
];

images.forEach(image => {
  const img = document.createElement('img');
  img.src = image.thumb;
  img.alt = image.caption;
  img.dataset.hd = image.hd;
  img.dataset.caption = image.caption;
  gallery.appendChild(img);
});

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    lightboxImg.src = e.target.dataset.hd;
    lightboxCaption.textContent = e.target.dataset.caption;
    lightbox.classList.remove('hidden');
  }
});

lightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  lightboxCaption.textContent = '';
});
