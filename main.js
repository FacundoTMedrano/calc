let pantalla = document.getElementById("pantalla");        
        let objeto = {
            0:()=>pantalla.value = pantalla.value+0,
            1:()=>pantalla.value = pantalla.value+1,
            2:()=>pantalla.value = pantalla.value+2,
            3:()=>pantalla.value = pantalla.value+3,
            4:()=>pantalla.value = pantalla.value+4,
            5:()=>pantalla.value = pantalla.value+5,
            6:()=>pantalla.value = pantalla.value+6,
            7:()=>pantalla.value = pantalla.value+7,
            8:()=>pantalla.value = pantalla.value+8,
            9:()=>pantalla.value = pantalla.value+9,
            "+":()=>pantalla.value = pantalla.value+"+",
            "-":()=>pantalla.value = pantalla.value+"-",
            "*":()=>pantalla.value = pantalla.value+"*",
            "/":()=>pantalla.value = pantalla.value+"/",
            "Delete":()=>pantalla.value = "",
            "Backspace":()=>pantalla.value = pantalla.value.slice(0,pantalla.value.length-1),
            ".":()=>pantalla.value = pantalla.value+".",
            "Enter":()=>pantalla.value = eval(pantalla.value),
        }

        document.addEventListener("keydown",(e)=>{
            if(objeto.hasOwnProperty(e.key)){
                objeto[e.key]()
            }
        })
        