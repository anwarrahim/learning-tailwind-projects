import EmailSubs from "../components/email-subscribe/EmailSubs"
import emailImgae from '../assets/email/images/image.jpg'


    const projectData = [
        {
            projectName : 'Email Subscription',
            mainImg: emailImgae,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.",
            buttonLink: '/email-subs',
            category:'web'
        },
        {
            projectName: 'Pricing Grid',
            mainImg:emailImgae,
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.",
            buttonLink: '/pricing-grid',
            category:'web'

        },
        {
            projectName:'Product Modal',
            mainImg: emailImgae,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.',
            buttonLink:'/product-modal',
            category:'web'
        },
        {
            projectName:'image-gallery',
            mainImg:emailImgae,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.',
            buttonLink: '/image-gallery',
            category:'web'
        },
         {
            projectName:'image-gallery',
            mainImg:emailImgae,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.',
            buttonLink: '/image-gallery',
            category:'web'
        }
        ,
         {
            projectName:'image-gallery',
            mainImg:emailImgae,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sunt voluptatibus exercitationem, vero adipisci non, perferendis necessitatibus et unde itaque illum nulla asperiores quo. Illo maiores itaque vitae. Quibusdam, veritatis.',
            buttonLink: '/image-gallery',
            category:'web'
        }

    ]
   
  const ProjectsPage = ()=>{

  
    

    return(
        <>


             {/* {<EmailSubs 
        mainImage = {emailImgae}
        name = "Anwar" 
        mainHeading = "Get diet and fitness tips in your inbox "
        mainPara = "Eat better and excercise better. Sign up for the diet and Fitness"
        
        /> } */}

        <div className=" bg-blue-300 w-full h-full p-30">
        <div className="flex flex-wrap  bg-amber-200 border-2 border-black ">

        { projectData.map((project, index) =>{
            
              
          return(
            
        <div className=" w-1/3 border-2 border-black" >
                
                      {/* card*/}
                     
                        <h2 className="  relative z-10 text-2xl bg-gray-700/50 text-white inline-block px-2">{project.projectName}</h2>
                          {/* image */}
                        
                        
                   

                
              
                </div>
            
          )  
            })
        }
        
        </div>
        </div>

        </>
    )
   

  }

export default ProjectsPage
