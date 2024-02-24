const yesBtn  = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    alert ('❤️❤️❤️❤️Sabia que dirias que si. Te Amo, prometo que ya no va a pasar ❤️❤️❤️❤️')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mousedown', function() {
  const randomX = Math.random() * 50;
  const randomY = Math.random() * 50;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
