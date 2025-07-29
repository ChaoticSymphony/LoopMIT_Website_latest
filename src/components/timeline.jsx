// Timeline.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/carousel'
import '../style.css'
import img1 from '../../public/imgs/GHC_images/img_1.jpg'
import img2 from '../../public/imgs/GHC_images/img_2.jpg'
import img3 from '../../public/imgs/GHC_images/img_3.jpg'
import img4 from '../../public/imgs/GHC_images/img_4.jpg'
import img5 from '../../public/imgs/GHC_images/img_5.jpg'
import img6 from '../../public/imgs/GHC_images/img_6.jpg'
import img7 from '../../public/imgs/GHC_images/img_7.jpg'
import img8 from '../../public/imgs/GHC_images/img_8.jpg'
import img9 from '../../public/imgs/GHC_images/img_9.jpeg'

import {useTheme} from '../context/ThemeContext'


const OPTIONS = { loop: true }

const timelineData = [
  {
    title: "Global Hyperloop Competition",
    period: "Awards • 2025",
    items: [
      "The Global Hyperloop Competition (GHC) is a prestigious, student-led international engineering challenge hosted by IIT Madras, India, focused on advancing research and innovation in Hyperloop technology. We emerged as the overall winners of the competition."
    ],
    images:[
    
      img3,img2,img1,img4

    ],
    badgeClass: "bg-success"
  },
  {
    title: "European Hyperloop Week",
    period: "Qualified • 2025",
    items: [
      "European Hyperloop Week (EHW) is the largest annual student‑led Hyperloop competition and innovation conference in the world, focused on advancing Hyperloop technology. We cleared all the technical and the video rounds."
    ],
    images:[
    
      img8

    ]
  },
  // Add more entries here...
];

export default function Timeline() {

  const { darkMode } = useTheme();

  return (
    <div className="container navspace" style={{ paddingTop: '6rem' }}>
      <div className="text-center mb-5">
        <h3 className="title-a">Achievements</h3>
        <p className="subtitle-a">Milestones that define our journey.</p>
        <div className="line-mf mx-auto"></div>
      </div>

      <ul className="timeline ps-0 d-grid gap-4 ">
        {timelineData.map((entry, idx) => (
          <li key={idx} className="timeline-item d-flex align-items-start" >
            
            <div className="timeline-panel card shadow-sm flex-grow-1">
              <div className="card-body">
                <h5 className="card-title">{entry.title}</h5>
                <p className="card-subtitle mb-3 ">{entry.period}</p>
                
                    <div>
                      <div>
                       <Carousel slides={entry.images} options={OPTIONS} />
                      </div>  
                      
                   
                    
                  {entry.items.map((text, i) => (
                    <div key={i} className="mb-2">
                      {text}
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
