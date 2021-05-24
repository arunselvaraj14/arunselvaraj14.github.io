window.addEventListener('scroll',function(){
    const header = this.document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 0);
});
function togglemenu(){
    const checkbtn = document.querySelector('.checkbtn');
    const navigation = document.querySelector('.navigation');
    checkbtn.classList.toggle('active');
    navigation.classList.toggle('active');  
}