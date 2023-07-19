import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import Navbar from './Navbar';
import './Navbar.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import MoodLayout from './MoodLayout';
import './MoodLayout.css';
import items from './sidebar.json';


function App() {
 
  const storedImage = JSON.parse(localStorage.getItem("image"));

  const [selectedImages, setSelectedImages] = useState(storedImage);

  
  useEffect( ()=>{
    localStorage.setItem ("image", JSON.stringify(selectedImages))
    //console.log(selectedImages);
  }, [selectedImages]);

  const addElement = (imageId) => {
    //console.log(imageId);
    const clickedItem = items.find((item) =>
      item.childrens.some((child) => child.id === imageId)
    );

    if (clickedItem) {
      const clickedImage = clickedItem.childrens.find(
        (child) => child.id === imageId
      );
      const isDuplicate = selectedImages.some(
        (image) => image.id === clickedImage.id
      );
      if (!isDuplicate) {
        setSelectedImages((prev) => [...prev, clickedImage]);
      }
    } else {
      setSelectedImages([]);
    }
  };
  const reloadMood = () => {
    //console.log("i was cliked");
    setSelectedImages([]);
     };

     // html to image
     const convertDivToPng = () => {
      const divElement = document.getElementById('myCanva'); 
    
      html2canvas(divElement).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'home-office-image.png';
        link.click();
      });
    };

  return (
    <>
       <Navbar plusElement={reloadMood} dowloadElement={convertDivToPng} />
      <Sidebar addElement={addElement}   />
     
      <MoodLayout selectedImages={selectedImages} />
    </>
  )
}

export default App
