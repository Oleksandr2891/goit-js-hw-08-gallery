const galleryItems = [
  {
    preview:
      'https://img5.goodfon.ru/original/320x240/e/95/vodopad-gory-waterfall-mountains.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/e/95/vodopad-gory-waterfall-mountains.jpg?d=1',
    description: 'Waterfall',
  },
  {
    preview:
      'https://img5.goodfon.ru/original/320x240/f/cc/gory-gimalai-sneg-veter.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/f/cc/gory-gimalai-sneg-veter.jpg?d=1',
    description: 'Mountains',
  },
  {
    preview:
      'https://img5.goodfon.ru/original/320x240/d/d9/lavanda-groza-zvezdy-lavender-thunderstorm-stars.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/d/d9/lavanda-groza-zvezdy-lavender-thunderstorm-stars.jpg?d=1',
    description: 'Thunderstorm',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
    {
    preview:
      'https://img5.goodfon.ru/original/320x240/e/de/leto-seascape-summer-pliazh-volny-sand-more-pesok-sea-blue-1.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/e/de/leto-seascape-summer-pliazh-volny-sand-more-pesok-sea-blue-1.jpg?d=1',
    description: 'Sand and waves',
  },
  {
    preview:
      'https://img5.goodfon.ru/original/320x240/f/f4/osen-les-listia-derevia-park-colorful-forest-landscape-pa-26.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/f/f4/osen-les-listia-derevia-park-colorful-forest-landscape-pa-26.jpg?d=1',
    description: 'Autumn forest',
  },
  {
    preview:
      'https://img5.goodfon.ru/original/320x240/0/dc/priroda-luna-noch-vetki-derevo-nebo-polnolunie.jpg?d=1',
    original:
      'https://img5.goodfon.ru/original/1280x720/0/dc/priroda-luna-noch-vetki-derevo-nebo-polnolunie.jpg?d=1',
    description: 'Moon',
  },
];

const galleryContainer = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const modalOfGallery = document.querySelector('.js-lightbox');
const imageOfModal = document.querySelector('.lightbox__image');
const modalOfOverlay = document.querySelector('.lightbox__overlay');
const buttonClose = document.querySelector('button[data-action="close-lightbox"]');
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

galleryContainer.addEventListener('click', onGalleryCardClick);
buttonClose.addEventListener('click', onButtonCloseClick);
modalOfOverlay.addEventListener('click', onButtonCloseClick);



function createGalleryCards(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
          >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
      </li>
  `;
  }).join('');
  
};

function onGalleryCardClick(e) {
  if (e.target.tagName !== 'IMG') return false;
  e.preventDefault();
  modalOfGallery.classList.add('is-open');
  imageOfModal.setAttribute('src', e.target.dataset.source);
  window.addEventListener('keydown', keystorkeAction);
};

console.log(buttonClose.tagName);

function onButtonCloseClick(e) {
  modalOfGallery.classList.remove('is-open');
  imageOfModal.setAttribute('src', '');
};
 
function keystorkeAction(e) {
  let currentImgOfCard = galleryItems.find(img => img.original === imageOfModal.getAttribute('src'));
  let previousImgOfCard = galleryItems[galleryItems.indexOf(currentImgOfCard) - 1];
  let nextImgOfCard = galleryItems[galleryItems.indexOf(currentImgOfCard) + 1];
  if (e.code === 'Escape')
    onButtonCloseClick();

  if (e.code === 'ArrowLeft' && !!previousImgOfCard) 
    imageOfModal.setAttribute('src', previousImgOfCard.original);


  if (e.code === 'ArrowRight' && !!nextImgOfCard)
    imageOfModal.setAttribute('src', nextImgOfCard.original);

}