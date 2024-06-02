console.log("Welcome Harish")

//import * as bootstrap from 'bootstrap'

let test=document.getElementById("root")
//console.log(test.innerHTML)


// let h2= document.createElement("h2")
// h2.innerText="Pavithra Baskar"

// test.appendChild(h2)

//var style="color: aqua;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-weight: 500"

function getListofsites(e){
    let li=document.createElement("li")

    let anchor=document.createElement("a")
    anchor.setAttribute('href',e.siteURL)
    anchor.setAttribute('target',"_Blank")
    anchor.setAttribute('class',"link")
    //anchor.setAttribute('class',"button")
    anchor.innerText=e.siteName

    li.appendChild(anchor)

    return li
}

let mysites=[
    {
        siteName:"Guvi",
        siteURL:"https://www.guvi.in/",
    },
    {
        siteName:"Google",
        siteURL:"https://www.google.com/in",
    },
    {
        siteName:"Youtube",
        siteURL:"https://www.youtube.com/",
    }

]

//test.innerText="Harish Raajaa R V"

//test.innerHTML="<h1>Harish Raajaa R V</h1>"

let ul= document.createElement("ul")

mysites.forEach((e)=>{
    let li= getListofsites(e)
    ul.appendChild(li)
})

let h2= document.createElement("h2")
h2.innerText="Top Websites are:"
test.append(h2)
test.appendChild(ul)
//test.appendChild(h2)

let elements= document.querySelectorAll("li")
console.log(elements)