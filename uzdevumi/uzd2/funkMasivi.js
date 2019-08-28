function pievieno(){
  masivs.push(Math.ceil(Math.random()*10));
  document.getElementById('lauks').value = masivs;
}

function nonem(){
  masivs.pop();
  document.getElementById('lauks').value = masivs;
}

function pievienoAiz(){
  i = iegutVertibu();
  masivs.splice(i, 0, Math.ceil(Math.random()*10));
  document.getElementById('lauks').value = masivs;
}

function nonemPec(){
  i = iegutVertibu();
  masivs.splice(i, 1);
  document.getElementById('lauks').value = masivs;
}

function iegutVertibu(){
  return parseInt(document.getElementById('ind').value);
}
