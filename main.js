document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var hearts  = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    var size = Math.random() * 100;
    hearts.style.width = size + 'px';
    hearts.style.height = size + 'px';
    hearts.style.left = x + 'px';    
    hearts.style.top = y + 'px';
    body.appendChild(hearts);   
})