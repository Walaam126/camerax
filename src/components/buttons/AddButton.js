import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";


const AddButton = () => {
      return(
        <>
       <Link to="/productform">
                  <BiPlusCircle />
         </Link>
        </>
      )
    };
    
    export default  AddButton;