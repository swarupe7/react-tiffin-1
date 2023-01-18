import React from 'react'

const NavBar = ({filterItem,menuList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>

        {
            menuList.map((curElem)=>{
                return (  
                    <div classname='btn-group__item' style={{color:'blue'}} onClick={()=>filterItem(`${curElem}`)}>{curElem}</div>
                )
            })
            
            

        }
       
      </div>
     </nav>
    </>
  )
}

export default NavBar;