import emailImgae from '../../assets/email/images/image.jpg'

const EmailSubs = (props)=>{

    return(
        <>
        {/* main container */}
        <div className="flex items-center h-screen justify-center bg-zinc-200">
        {/* card */}
        <div className=" p-2 mx-6 rounded-2xl bg-zinc-500">
            {/* flex-container */}
            <div className="flex flex-col md:flex-row">
                {/* image */}
                <img className='object-fit rounded-tl-2xl rounded-bl-2xl h-80' src={emailImgae} alt="image" />
                {/* content */}
                <div className="flex items-center justify-center flex-col p-8">
                      <h3 className='text-white text-2xl'>Get diet and fitness tips in your inbox</h3>
                      <p className='text-white'>Eat better and excercise better. Sign up for the diet and Fitness</p>
                      <div className='flex gap-4'>

                        <input className='border-2 border-black p-2 rounded-lg' type="email" placeholder='hello@anwarrahim.com' />
                        <button className='bg-green-400 text-black p-2 rounded-lg'>Subscribe</button>
                      </div>
                </div>
              
            </div>

        </div>
        </div>
            
        </>
    )
}


export default EmailSubs