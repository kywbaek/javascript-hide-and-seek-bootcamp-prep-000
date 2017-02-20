function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function deepestChild() {
  var cur = document.querySelectorAll('div#grand-node')
  cur = cur[0]
  while (cur.querySelectorAll('div') > 0) {
    cur = cur.querySelectorAll('div')[0]
  }
  return cur
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++ ) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n)
  }
}
