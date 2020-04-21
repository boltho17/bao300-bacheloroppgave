import React from 'react';
import ImageUploader from 'react-images-upload';

const ImageUpload = (props) => {

    const onDrop = (picture) =>  {
        props.setProduct(prevValue => {
            return {
                ...prevValue,
                pictures: props.product.pictures.concat(picture)
            }
        });
    };

    return(
        <ImageUploader
            withIcon={true}
            buttonText='Last opp bilder'
            onChange={onDrop}
            imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            withPreview={true}
        />
    )
}


export default ImageUpload
