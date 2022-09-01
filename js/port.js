let menu = document.querySelector('#bars');
let head = document.querySelector('header');

/**
 * for changing the font when the sidebar displays 
 */
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    head.classList.toggle('active');
}
/**
 * when on scroll the icon displays none
 */
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    head.classList.remove('active');
}

/**
 * for cursor annimations
 */
let cursor1= document.querySelector('.cursor-1');
let cursor2= document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
   
    links.onmouseenter = () =>{
         cursor1.classList.add('active');
         cursor2.classList.add('active');
    }
        
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
   }

});

var icon = document.getElementById('icon');
icon.onclick= function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
       icon.scr = 'image/moon1.jpg';
    }
    else{
        icon.src='image/moon.png';
    }
}