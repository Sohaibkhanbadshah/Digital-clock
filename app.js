function value(){
  let nowdate=new Date();

    let year =nowdate.getFullYear();
    let month =nowdate.getMonth();
    let Day =nowdate.getDay();
    let Hours =nowdate.getHours();
    let Minutes =nowdate.getMinutes();
    let Seconds =nowdate.getSeconds();



    document.querySelector(".Year").innerHTML=year;
    document.querySelector(".Month").innerHTML=month;
    document.querySelector(".Day").innerHTML=Day;
    document.querySelector(".Hours").innerHTML=Hours;
    document.querySelector(".Minutes").innerHTML=Minutes;
    document.querySelector(".Seconds").innerHTML=Seconds;

}
setInterval(value,1000);