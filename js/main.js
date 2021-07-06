'use strict'
{
  const menu =document.querySelector('.menu');
  const mask =document.querySelector('.mask');

  menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
     mask.classList.toggle('active');
 
  })
}