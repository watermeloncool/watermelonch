
/*
let video = document.getElementById('video-background');

video.play();

  video.addEventListener('ended', function() {
    video = document.getElementById('video-background');
    console.log('fin vidéo');
    video.currentTime = 0;
    video.play();
  });
  */


const menubtn = document.getElementById('menumobileouvrir');
const fermerbtn = document.getElementById('menumobilefermer');
const sousmenumobile = document.getElementById('sousmenumobile');

menubtn.addEventListener('click', function() {
  sousmenumobile.style.display = 'block';
  menubtn.style.display = 'none';
  fermerbtn.style.display = 'inline-block';
});

fermerbtn.addEventListener('click', function() {
  sousmenumobile.style.display = 'none';
  menubtn.style.display = 'inline-block';
  fermerbtn.style.display = 'none';
});


/* fermer sous menu mobile */
document.querySelectorAll('#sousmenumobile div').forEach(div => {
  div.addEventListener('click', () => {
    sousmenumobile.style.display = 'none';
  menubtn.style.display = 'inline-block';
  fermerbtn.style.display = 'none';
  });
});