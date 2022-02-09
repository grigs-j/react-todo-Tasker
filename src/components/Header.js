import Button from "./Button";
import {FaTimes, FaPlus} from 'react-icons/fa'


const Header = ({title, onAdd, showAddForm}) => {
  return <header className='header'><h1>{title}</h1>
  <Button display={showAddForm ? <FaTimes /> : <FaPlus />} onClick={onAdd} />
  </header>;
};

export default Header;