// import React from "react";
// import { dataImages } from "../data";


// export default function Main() {
//     const [currentImage, setCurrentImage] = React.useState("");
  
//   const handleNextImage = () => {
//     setCurrentImage((currentImage + 1) % dataImages.length);
//   };
  
//   const handlePrevImage = () => {
//     setCurrentImage((currentImage + dataImages.length - 1) % dataImages.length);
//   };
    
    
//     const imagesArray = dataImages.map(item => {
//         return <img src={`../images/${item}`} alt="muie-mie"  />
//     })


//     return (
//         <div>
//             {imagesArray}
//             <button onClick={handlePrevImage}>Prev</button>
//             <button onClick={handleNextImage}>Next</button>
//         </div>
//       );
// }

// import React from "react";

// export default function Main() {
//     const [currentImage, setCurrentImage] = React.useState(0);
  
//     const images = [
//         "hannover-zoo.jpg",
//         "Hannover1.png",
//         "HannoverPlatz.jpg"
//   ];
  
//   const handleNextImage = () => {
//         setCurrentImage((currentImage + 1) % images.length);
//       };
      
//       const handlePrevImage = () => {
//         setCurrentImage((currentImage + images.length - 1) % images.length);
//       };
        
        
//         const imagesArray = images.map(item => {
//             return <img src={`../images/${item}`} alt="muie-mie"  />
//         })
    
    
//         return (
//             <div>
//                 {imagesArray}
//                 <button onClick={handlePrevImage}>Prev</button>
//                 <button onClick={handleNextImage}>Next</button>
//             </div>
//   );
// }
