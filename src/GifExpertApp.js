import React from "react";
import {useState} from "react"
import AddCategory from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () =>{

  //  const categories = ["One Punch ", "Samurai X ","Dragon Ball "];
    const [categories, setCategories] = useState(["One Punch "]);

/*
const handleAdd = (e) =>{
    setCategories([... categories, "HunterXHunter"]);
// se modifica el estado, se toma el estado anterior y se le agrega dentro del array categories el nuevo valor de 
// HunterXHunter
}*/


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((category)=>{
                       return  <GifGrid 
                        key={category}
                        category = {category}></GifGrid>
                    })
                }
            </ol>

        </>
    )

}

export default GifExpertApp;