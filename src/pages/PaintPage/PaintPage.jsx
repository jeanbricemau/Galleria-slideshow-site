import React, { useEffect, useState }   from"react";
import { Link,  useParams } from "react-router-dom";
import data from '../../../src/data.json'
import Preview from "../Preview/Preview";
import './style.scss'


const PaintPage = () => {
  const [preview ,SetPreview] = useState(0)
  const id = useParams().name
  const [info , setInfo] = useState(data[data.findIndex((num) => num.name === id)])
  const num = data.findIndex((num) => num.name === id)
  let currentBarWidth = 100 / data.length * num + '%'

  useEffect(() => {
   setInfo(data[data.findIndex((num) => num.name === id)])
  }, [id])
  




  return (
    <div className="PaintPage">
      <section>

      <div className="thumbnail">
        {
        document.getElementById('root').clientWidth < 705 &&  <img  className='paintImg'  src={info.images.hero.small} alt={info.name} />       
        }
        {
          document.getElementById('root').clientWidth > 705 && <img className='paintImg' src={info.images.hero.large} alt={info.name} />
        }
       
        <div className="previewBTN" onClick={()=>SetPreview(1)}>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
          <p>VIEW IMAGE</p>
        </div>

      </div>
      

        <div className="info">
           <div className="name">
        <h1>{info.name}</h1>
        <h2>{info.artist.name}</h2>
      </div>
      <img className="artistImg" src={info.artist.image} alt="" />
        </div>
     


      <article>
        <span>{info.year}</span>
        <p>{info.description}</p>
        <a className="goToSource" href={info.source} >GO TO SOURCE </a>

      </article>


      </section>


      <div className="progressionBar" style={{ backgroundColor: '#E5E5E5' }}>
        <div className="currentBar" style={{ width: currentBarWidth }} > </div>
      </div>

      <footer>


        <div className="footerName">
          <h1>{info.name}</h1>
          <h2>{info.artist.name}</h2>
        </div>

        <div className="buttons">
          {
            num !== 0 && <Link relative="path" to={'../' + data[num - 1].name} key={data[0]} >
              < svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2" /><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" /></g></svg>
            </Link>
          }

          {
            num !== 14 && <Link relative="path" to={'../' + data[num + 1].name} key={data[0]}  >
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2" /><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" /></g></svg>
            </Link>
          }
        </div>

      </footer>

            {
              preview === 1  && <Preview img={info.images.gallery}  preview={preview}  SetPreview={SetPreview}/> 
            }



    </div>


  )

}

export default PaintPage




// info = 
// {
//   "name": "Starry Night",
//   "year": 1889,
//   "description": "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. \"Through the iron-barred window,\" he wrote to his brother, Theo, around 23 May 1889, \"I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.\"",
//   "source": "https://en.wikipedia.org/wiki/The_Starry_Night",
//   "artist": {
//     "image": "./assets/starry-night/artist.jpg",
//     "name": "Vincent Van Gogh"
//   },
//   "images": {
//     "thumbnail": "./assets/starry-night/thumbnail.jpg",
//     "hero": {
//       "small": "./assets/starry-night/hero-small.jpg",
//       "large": "./assets/starry-night/hero-large.jpg"
//     },
//     "gallery": "./assets/starry-night/gallery.jpg"
//   }
// }