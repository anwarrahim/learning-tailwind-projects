import emailImgae from '../../assets/email/images/image.jpg';
import { BrowserRouter as Router, Routes ,Route, Link } from 'react-router-dom';
import Header from './Header'

const EmailSubs = (props) => {
    // Set default values for props
    const mainImage = props.mainImage || emailImgae;
    const mainHeading = props.mainHeading || "Subscribe to our newsletter";
    const mainPara = props.mainPara || "Get the latest updates directly to your inbox";

    return(
        <>
        
        {/* main container */}
        <div className='bg-zinc-200 pl-20 pt-10'>
               < Link to="/"> <Header
            homeName = "Home"
        /></Link> 
        
        
        <div className="flex items-center h-screen justify-center ">
          
        {/* card */}
        <div className=" p-2 mx-6 rounded-2xl bg-zinc-500">
            {/* flex-container */}
            <div className="flex flex-col md:flex-row">
                {/* image */}
                <img className='object-fit rounded-tl-2xl rounded-bl-2xl h-80' src={mainImage} alt="image" />
                {/* content */}
                <div className="flex items-center justify-center flex-col p-8">
                      <h3 className='text-white text-2xl'>{mainHeading}</h3>
                      <p className='text-white'>{mainPara}</p>
                      <div className='flex gap-4'>
                        <input className='border-2 border-black p-2 rounded-lg' type="email" placeholder='hello@anwarrahim.com' />
                        <button className='bg-green-400 text-black p-2 rounded-lg'>Subscribe</button>
                      </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default EmailSubs;