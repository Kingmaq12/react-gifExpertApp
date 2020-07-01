import React, { Fragment
    // , useState, useEffect
 } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts(category);
    

    return (
        <Fragment>
        <h3> { category } </h3>

        {
            loading && <p>Cargando</p>
        }


        <div className="card-grid">
            {
                images.map( img => 
                    <GifGridItem key={img.id} {...img} /> 
                )
            } 
        </div>
        </Fragment>
    )
}