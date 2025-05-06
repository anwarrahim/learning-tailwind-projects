import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
    
      <div className="bg-blue-300 w-full h-full p-30">
        <div className="flex flex-wrap bg-amber-200 border-2 p-4 gap-4 border-black">
          {projectData.map((project, index) => (
            <div key={index} className="flex flex-col md:w-1/4 flex-grow border-2 bg-amber-700 border-black">
              {/* card */}
              <div className="flex flex-col md:flex-row p-0">
                <div className="p-4">
                  <h2 className="relative z-10 text-2xl bg-gray-700/50 text-white inline-block">
                    {project.projectName}
                  </h2>
                  <img className="h-80 w-full md:w-50" src={project.mainImg} alt="" />
                </div>
                <div className="w-full p-4 md:p-1 md:max-w-40">
                  <p className="text-xs justify-between pt-10">{project.description}</p>
                  <div className="pt-30 flex gap-1">
                    <Link to={project.buttonLink} className="bg-white text-2xl px-2">
                      live
                    </Link>
                    <a href={`https://github.com/your-username/${project.projectName}`} className="bg-white text-2xl px-2" target="_blank" rel="noopener noreferrer">
                      code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
  );
}

export default ProjectsPage;
