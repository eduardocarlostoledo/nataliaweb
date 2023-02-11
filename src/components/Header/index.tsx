import banner from './baner.jpeg';


const Header = () => (
  <header className="flex flex-row justify-around items-center">

    <div className="items-center space-x-8">
      <img src={banner}
      alt="fotonati" />      
    </div>
    
  </header>
);

export default Header;

