sh = document.getElementById('show');

sh.addEventListener('click',function(){

   pwd = document.getElementById('show Password');

   var typ = pwd.getAttribute('type');

   if(typ == 'password')

   {

       pwd.setAttribute('type','text');

       sh.innerHTML = "hide";

   }else{

       pwd.setAttribute('type','password');

       sh.innerHTML = "show";

   }

});
   