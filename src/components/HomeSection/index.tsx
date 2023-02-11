import imagen1 from '../../img/1.png'
import imagen2 from '../../img/2.png'
import imagen3 from '../../img/3.png'
import imagen4 from '../../img/4.png'
import imagen5 from '../../img/5.png'
import imagen6 from '../../img/6.png'
import imagen7 from '../../img/7.png'


import React from 'react';

interface Props {
  images: string[];
}

const HomeSection: React.FC<Props> = ({ images }) => {
  return (
    <div>
      <div className="items-center">
      <img src={imagen1}      
      alt="fotonati" />      
      <img src={imagen2}      
      alt="fotonati" />      
      <img src={imagen3}      
      alt="fotonati" />      
      <img src={imagen4}      
      alt="fotonati" />      
      <img src={imagen5}      
      alt="fotonati" />      
      <img src={imagen6}      
      alt="fotonati" />      
      <img src={imagen7}      
      alt="fotonati" />      
    </div>

      {images.map((image, index) => (
        <img key={index} src={`../../img/${image}`} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default HomeSection;



// const Button = ({ text, href }: { text: string; href: string }) => (
//   <a className="mx-auto" href={href} target="_blank" rel="noreferrer">
//     <div className="inline-block px-4 py-2 rounded-lg text-white bg-blue-500">
//       {text}
//     </div>
//   </a>
// );


// const HomeSection = () => (
//   <div>



        
//   </div>
// );

// export default HomeSection;
