import React, { useState } from 'react'
import { NoImage } from '../../Utility/Sources';
import ImageModal from './ImageModal';

const Image = ({src, className}) => {

    const [show_modal, setShowModal] = useState(false)
    const [img, setSelectedImg] = useState(null)
    const showImage = (e) => {
        setShowModal(true)
        console.log(e.target.src);
        setSelectedImg(e.target.src);
    }

    return (
        <>
            <img 
                onClick={showImage}
                className={className}
                src={src}
                alt="Attachment" 
                onError={(e)=>{e.target.onerror = null; e.target.src=NoImage}}
            />
            <ImageModal show_modal={show_modal} setShowModal={setShowModal} img={img}/>
        </>
    )
}

export default Image