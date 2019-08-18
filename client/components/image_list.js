import React from 'react'
import ImageDetail from './image_detail'

const IMAGES = [
    {title: 'Pen',link:'https://dummyimage.com/600x400' },
    {title: 'Pine tree', link: 'https://dummyimage.com/600x400'},
    {title: 'Mug', link:'https://dummyimage.com/600x400'}
]


const ImageList = () =>
{
    const RenderedImages = IMAGES.map(function(image)
    {
        return <ImageDetail></ImageDetail>
    });

    return(
        <ul>
            {RenderedImages}
        </ul>
    );
};

export default ImageList;