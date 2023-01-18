import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <> 

     
        <section className='main-card--cointainer'>
       { menuData.map((curElem)=>{
            return (
                <>
               
                <div className='card-container' key={curElem.id}>
                    <div className='card'>
                        <div className='card-body'>
                        <span className='card-number card-circle subtle'>{curElem.id}</span>
                        <span className='card-author subtle' style={{color:'black'}}>{curElem.category}  </span>
                        <h4 className='card-title'>{curElem.name}</h4>
                        <img src={curElem.image} alt="images" className='card-media' /> 
                        <span className='card-description subtle'>
                        {curElem.description}
            
                        </span>
                        <div className='card-price' style={{color:'red'}}>{curElem.price}</div>
                        <div className='card-read'>Read</div>
                        
                        </div>
                         
                        <span classname='card-tag subtle '> Order Now</span>
                    </div>
                </div>
                </>
            )
        })
       
        
       }
       </section>
  
    </>
  )
}

export default MenuCard;