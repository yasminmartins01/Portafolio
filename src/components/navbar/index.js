import React, { useState } from 'react'


import navStyles from '../navbar/index.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  
  
    return (
      <div className={ navStyles.contenedor }>
           <navbar>
             <button className={ navStyles.button }><a href='#sobremi' onCLick={handleClick}>Sobre mi</a></button>
             <button className={ navStyles.button }><a href='#contacto' onClick={handleClick}>Contacto</a></button>
             <button className={ navStyles.button }><a href='#proyectos' onClick={handleClick}>Proyectos</a></button>
           </navbar>
      </div>
    );
  };

export default Navbar;