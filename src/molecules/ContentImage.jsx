import coverPhoto from '../assets/img/fondo.png'

import '../assets/styles/ContentImage.css'
import Img from '../atoms/Img';

function ContentImage(){
    return (
        <div align="center" className='content'>
            <Img src={coverPhoto} className='fondo'></Img>

            <div align="center" className="divButton">

            </div>
        </div>
    );
}

export default ContentImage;