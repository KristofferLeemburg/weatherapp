import React from 'react';
const conditions = (props) => {
   return (
       <div>
           {props.setWeathers.cod === 200 ?
               <div>
                   <p><strong>{props.setWeathers.name}</strong></p>
                   <p>It is currently {Math.round(props.setWeathers.main.temp)} degrees out with {props.setWeathers.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;