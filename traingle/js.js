const input = Array.from( document.getElementsByClassName("input"))


const sum=document.getElementById("submit")
let list=[]
const pragraph=document.querySelector(".pragraph")


sum.addEventListener("click",function (){

    input.forEach(val => {
        list.push(val.value)

    });
    console.log(list)
    evaluate()
    list=[]
})
const evaluate= () =>{
    // console.log("waale wcay")
    const value=list[0]
    // console.log(list[2])

    if(value==list[1] && value==list[2]){

        pragraph.innerHTML="Equilateral Triangles";

    }else if (value==list[1] || value==list[2] || list[1]==list[2]){

        pragraph.innerHTML="Isosceles Triangles";
    }


    else if (value +list[1]>list[2] || list[2]+list[1]>value || value+list[2]>list[1]){

        pragraph.innerHTML="Scalene Triangles"

    }
        else {


            pragraph.innerHTML="Can not be form triangle"
        }


}