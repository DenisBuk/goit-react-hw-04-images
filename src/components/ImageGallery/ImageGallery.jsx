import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList} from './ImageGallery.syled';

const ImageGallery = ({ items, id }) => {
    return (
        <ImageGalleryList>
            <ImageGalleryItem items={ items } /> 
        </ImageGalleryList>
    );
};
    
export default ImageGallery;
