const cat = document.querySelector('#cat');
const divs = document.querySelectorAll('.card');

const get_random_color = () => {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

for (let i = 0; i < divs.length; i++) {
  const div = divs[i];
  div.addEventListener('dragover', e => {
    e.preventDefault();
  });
  div.addEventListener('dragenter', e => {
    e.preventDefault();
  });
  div.addEventListener('drop', () => {
    div.append(cat);
    div.style.backgroundColor = get_random_color();
  })
}