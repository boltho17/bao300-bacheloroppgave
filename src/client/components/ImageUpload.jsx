import React from "react";
import ImageUploading from "react-images-uploading";


const ImageUpload = (props) => {

    // Plasserer opplastede bilder i product state objektet i AddProduct:
    const onDrop = (picture) => {
        props.setProduct(prevValue => {
            return {
                ...prevValue,
                pictures: props.product.pictures.concat(picture)
            }
        });
    }


    // Fjerner valgte, opplastede bilder fra product state objektet i AddProduct:
    const onDelete = (picture) => {
        props.setProduct(prevValue => {
            return {
                ...prevValue,
                pictures: props.product.pictures.filter(el => el.file.name !== picture.file.name)
            }
        });
    };

    return (
        <ImageUploading multiple onChange={onDrop} maxNumber={5}>
            {({imageList, onImageUpload, onImageRemoveAll}) => (
                <div className="upload__image-wrapper">
                    <h6>Bilder</h6>
                    <button onClick={onImageUpload}>Velg bilder</button>
                    &nbsp;
                    <button onClick={onImageRemoveAll}>Slett alle</button>
                    {imageList.map(image => (
                        <div key={image.key} className="image-item">
                            <img src={image.dataURL} alt="" width="100"/>
                            <div className="image-item__btn-wrapper">
                                <button
                                    onClick={() => {
                                        image.onUpdate();
                                    }}
                                >
                                    Endre
                                </button>
                                <button onClick={() => {
                                    image.onRemove();
                                    onDelete(image)
                                }}>Slett
                                </button>
                            </div>
                        </div>
                    ))}
                    {imageList.length > 0 && <button onClick={() => props.handleUpload(props.product.pictures)}>Lagre</button>}
                </div>
            )}
        </ImageUploading>
    )
}

export default ImageUpload
