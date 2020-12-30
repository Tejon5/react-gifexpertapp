import React from "react"

 const getGifs = async(category) =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6tmuFqBAzVVez9b7PqMRUsLYAscIAjlN`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })//esta constante se declara para tomar determinados datos dentro del objeto gif que estamos logueando mas abajo

        console.log(gifs);
      return gifs;
    }

   // getGifs();

   export default getGifs;