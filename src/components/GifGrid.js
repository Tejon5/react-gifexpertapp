
import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";



export const GifGrid = ({category}) =>{

  //  const[images, setImages] = useState([]);
    const {data, loading} = useFetchGifs( category );

/*    useEffect(()=>{
        getGifs(category)
        .then(imgs =>setImages(imgs))
    }, [category])
*/
//en este caso el useEffect encapsula la funcion de abajo y coloca su contenido dentro de un array
//porque resulta que al boton que pusimos, cada vez que lo oprimimos y modifica su valor tmb se descajeta lo renderizado
//funciona como un componentDidMount basicamente... guarda los cambios para no mostrarlos devuelta y solo actualiza el boton



    return( 
        <>
        <h3 className="animate__heartBeat">{category}</h3>
        {loading && <p>loading</p>}

        
        <div className="card-grid">
        <ol>
            {
                data.map(img =>(
                    <GifGridItem 
                    key={img.id}
                    {...img}/>
                ))
            }
        </ol>
        </div>
        </>
    )

}


