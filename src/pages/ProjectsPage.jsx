import EmailSubs from "../components/email-subscribe/EmailSubs"
import emailImgae from '../assets/email/images/image.jpg'


    const projectData = [
        {
            projectName : 'Email Subscription',
            mainImg: {emailImgae},
            description: "Design for email subscription",
            buttonLink: '/email-subs'
        },
        {
            projectName: 'Pricing Grid',
            mainImg:{emailImgae},
            description:"Design for pricing Grid",
            buttonLink: '/pricing-grid'
        },
        {
            projectName:'Product Modal',
            mainImg: {emailImgae},
            description:'Design for product Grid',
            buttonLink:'/product-modal'
        },
        {
            projectName:'image-gallery',
            mainImg:{emailImgae},
            description:'Desing for image gallery',
            buttonLink: '/image-gallery'
        }

    ]
   
  const ProjectsPage = ()=>{


    return(
        <>
             {<EmailSubs 
        mainImage = {emailImgae}
        name = "Anwar" 
        mainHeading = "Get diet and fitness tips in your inbox "
        mainPara = "Eat better and excercise better. Sign up for the diet and Fitness"
        
        /> }
        </>
    )
  }

export default ProjectsPage
