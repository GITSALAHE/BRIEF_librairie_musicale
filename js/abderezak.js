function show(){
    var all = document.getElementById("mu-search");
    all.style.transform = 'translateY(0) scale(1)';
    console.log('Hide called');
  }
  function hide(){
    var all = document.getElementById("mu-search");
    all.style.transform = 'translateY(0px) scale(0)';
  }
  function newArt(){
    var all = document.getElementById("rwall");
    var col = document.createElement("div");
    var art = document.createElement("div");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    a1.setAttribute("href", "#");
    a2.setAttribute("href", "#")
    var imgart = document.createElement("img");
    var name = document.createElement("h1");
    var tydes = document.createElement("p");
    tydes.className = "des";
    var des = document.createElement("p");
    des.className = "tydes";
    var srcimg = document.getElementById("image").value;
    var srcname = document.getElementById("name").value;
    var srctydes = document.getElementById("tymusic").value;
    // var srcdes = document.getElementById("des").value; 
    col.className = "col-md-4";
    art.className = "art";
    imgart.setAttribute("src", srcimg);
    all.appendChild(col);
    col.appendChild(art);
    a1.appendChild(imgart);
    art.appendChild(a1);
    a2.appendChild(name);
    art.appendChild(a2);
    art.appendChild(tydes);
    art.appendChild(des);
    name.innerText = srcname;
    tydes.innerText = srctydes;
    // des.innerText = srcdes;
    hide();
    document.getElementById("image").value = '';
    document.getElementById("name").value = '';
    document.getElementById("tymusic").value = '';
    // document.getElementById("des").value = '';
  }