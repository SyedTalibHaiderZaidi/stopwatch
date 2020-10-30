
    var hr=0;
    var min=0;
    var sec=0;
    var interval;
var hour = document.getElementById('hr');
var  minute = document.getElementById('min');
var second = document.getElementById('sec');
function timer()
{
sec++
second.innerHTML='0'+sec;
if(sec>9)
{
    second.innerHTML=sec;  
}
if(sec>10)
{
sec=0;
min++
minute.innerHTML= '0'+min;
if(min>9)
{
    minute.innerHTML= min;
}
}
 if (min>10) {
    min ="0"
    hr++
    hour.innerHTML='0'+hr;  
if(hr>9)
{
    hour.innerHTML=hr;   
}
}
     



}
function ab()
{
interval = setInterval(timer,1000)
}
function bc()
{
clearInterval(interval)

}
function dc()
{
 min='0'+0;
 hr='0'+0;
sec='0'+0;
hour.innerHTML=hr;
minute.innerHTML=min;
second.innerHTML=sec;
clearInterval(interval)
}