function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li');
  for(const el of list){
    el.innerHTML = parseInt(el.innerHTML) + n;
  };
  return list;
};

function deepestChild(){
  let div = document.querySelector('div#grand-node');
  while (div.children.length > 0) {
    div = div.children[0];
  };
  return div;
};
