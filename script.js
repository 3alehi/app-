let akhbar = [
    "امروز مدارس شهر قم و کهک بدلیل بارندگی تعطیل شد",
    "قیمت اجاره خانه ها در قم از سال گذشته تا الان 1.5 برابر شده",
    "الودگی هوا از سال گذشته 10درصد افزایش یافته",
    "ترافیک در شهر قم تا افتتاح جاده پردیسان کاهش یافت",
    "ایت الله سید علی خامنه ایی در روز چهارشنبه در مصلی قم خواهد بود",
    "سالروز ورود حضرت معصومه را به تمام مسلمانان تبریک میگوییم",
    "پیاده رو برای نابینایان در قم افتتاح خواهد شد",
    "دو بوستان جدید به قم اضافه خواهد شد",
    "استاندار قم گفتند:سد های بیشتری برای ذخیره اب احداث کنید",
    
]
let indexakhbar = 0;
setInterval(function(){

    akhbarmatn.innerHTML="اخبار کوتاه:   "  +akhbar[indexakhbar]
    indexakhbar++
    if(indexakhbar == 9){
        indexakhbar=0;
    }

},3000)
let akhbarmatn = document.getElementById('akhbar')
let slider = [
    "slider.jpg" ,
    "slider1.jpg" ,
    "slider2.jpg" ,
    "slider3.jpg" ,
    "slider4.jpg" ,
    "slider5.jpg" ,
    "slider6.jpg" ,
    "slider7.jpg" ,
    "slider8.jpg" ,
    "slider9.jpg" ,
    "slider.10jpg" ,
    "slider.11jpg" ,

]
let signup = document.getElementById('signup-login')
let asli = document.getElementById('asli')
let imgslide = document.getElementById('slider-img')
let indexslide = 0;
setInterval(function(){
    imgslide.setAttribute('src' , slider[indexslide])
    indexslide++
if(indexslide == 10){
indexslide = 0;
}
},3000)
let p = document.getElementById('number-percent')
let y = 0;
let body = document.body
let main = document.getElementById('main1')
let show = document.getElementById('show')
let settime = setInterval(function(){
    y+=1
p.style.width = y+"%"
show.innerHTML=y+"%"
if(y ==100){
clearInterval(settime)

main.style.display="none"
body.style.background="white"
signup.style.display="block"
show.innerText=""
}
},0)
let vorod = document.querySelector('.vorod')
let inputname = document.getElementById('setname')
let inputpassword = document.getElementById('setpassword')

vorod.addEventListener('click' , ()=>{
    if(inputname.value == "admin" && inputpassword.value == "admin"){
        asli.style.display='block'
        signup.style.display='none'
    }
    else if (inputname.value != "admin" && inputpassword.value != "admin" || inputpassword.value == "" ||inputname.value=="" ){
        alert('اطلاعات وارد شده نا درست است')
    }
  

})
let signuplogin2 = document.getElementById('signup-login2') 
let sabtename = document.getElementById('sabtename1')
sabtename.addEventListener('click' , ()=>{
    signup.style.display="none"
    signuplogin2.style.display='block'
})
let sabtename2 = document.getElementById('sabtename2')
sabtename2.addEventListener('click' , ()=>{
    signup.style.display="block"
    signuplogin2.style.display='none'
})
let setpassword2 = document.getElementById('setpassword2')
let vorod2 = document.getElementById('vorod2')
let namesabt = document.getElementById('namesabt')
let codemelisabt = document.getElementById('codemelisabt')
let namecarbary = document.getElementById('namecarbary')
vorod2.addEventListener('click' , ()=>{
    if(setpassword2.value.length <8  ||namesabt.value==""||codemelisabt.value=="" || namecarbary.value==""|| codemelisabt.value.length<8 ){
        alert('err')
    }
    else{
        signuplogin2.style.display='none'

        asli.style.display='block'

    }

})
