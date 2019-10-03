function start() {

  let parent = document.geElementsByTagName('body');
  let script = document.createElement('script');
  script.setAttribute("src", "modal.js");
  parent.appendChild(script);
  let script2 =document.createElement('script');
  script2.setAttribute("src", "character.js");
  parent.appendChild(script2);
  let script3 =document.createElement('script');
  script3.setAttribute("src", "classBomb.js");
  parent.appendChild(script3);
  let script4 =document.createElement('script');
  script4.setAttribute("src", "classMonster.js");
  parent.appendChild(script4);
  let script5 =document.createElement('script');
  script5.setAttribute("src", "script.js");
  parent.appendChild(script5);
  
}
