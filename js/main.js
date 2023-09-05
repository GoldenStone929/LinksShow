function createBlocks() {
  const blocksContainer = document.querySelector('.blocks');

  const urls = [
    'https://www.bbc.com/news',
    'https://www.cnn.com/',
    'https://www.nytimes.com/',
    // ... (all the URLs as before) ...
  ];

  const images = [
    'image1.png',
    'image2.jpeg',
    'doc/img/image3.jpg',
    // ... (all the images as before) ...
  ];

  const explanations = [
    'BBC News',
    'CNN News',
    'The New York Times',
    // ... (all the explanations as before) ...
  ];

  for (let i = 1; i <= 30; i++) {
    const block = document.createElement('a');
    const imgElement = document.createElement('img');

    block.href = urls[i-1];
    block.className = 'block';

    imgElement.src = images[i-1];
    imgElement.alt = `Image for ${explanations[i-1]}`;
    imgElement.className = 'block-image';

    block.appendChild(imgElement);
    block.innerHTML += `<p>${explanations[i-1]}</p>`;

    blocksContainer.appendChild(block);
  }
}

document.addEventListener("DOMContentLoaded", createBlocks);
