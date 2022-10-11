import ImgAndText from '../molecules/ImgAndText';

import '../assets/styles/InformationContent.css'
import Button from '../atoms/Button';


const ImageAndTextContent = [
]

function InformationContent () {
    return (
    <div className='mainInformation'>
                <h2>Universidad Politécnica de Chiapas</h2>

        <div className='line'></div>

        <div className='imagesAndTextes'> 
        <br></br>
        

            {ImageAndTextContent.map((content)=>{
                return ( <ImgAndText src={content.src} text={content.text}></ImgAndText> )
                
            })}
            <div>
                            <h2>Username:</h2>
                            <br></br>
                            <input id="entrada" type="text"></input>
                            <h2>Password:</h2> 
                            <br></br>
                            <input id="entrada" type="text"></input>
                            <br></br>
                            <Button  content='Iniciar sesión'></Button>
            </div>
        </div>

    </div>
    
    )
}

export default InformationContent