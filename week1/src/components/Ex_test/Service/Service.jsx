import React from 'react'
import "./Service.scss"
import { FiActivity } from "react-icons/fi";
import { BsBroadcast } from "react-icons/bs";
import { BsEasel } from "react-icons/bs";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";
import IndexService from './IndexService';
function Service({setAdd}) {
  return (
    <div className={`service ${setAdd ? "service--light" : "service--dark"}`}>
        <h2 className={`service__title ${setAdd ? "service__title--light" : "service__title--dark"}`}>Services</h2>
        <p className={`service__description ${setAdd ? "service__description--light" : "service__description--dark"}`}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="service__grid">
            <IndexService 
            iconService={FiActivity} 
            title="Nesciunt Mete"
            description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
            setDark={setAdd}
            />

            <IndexService 
            iconService={BsBroadcast} 
            title="Eosle Commodi"
            description="Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
            setDark={setAdd}
            />

            <IndexService 
            iconService={BsEasel} 
            title="Ledo Markt"
            description="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
            setDark={setAdd}
            />

            <IndexService 
            iconService={BsBoundingBoxCircles} 
            title="Asperiores Commodit"
            description="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
            setDark={setAdd}
            />

            <IndexService 
            iconService={BsCalendar4Week} 
            title="Velit Doloremque"
            description="Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."
            setDark={setAdd}
            />

            <IndexService 
            iconService={BsChatSquareText} 
            title="Dolori Architecto"
            description="Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
            setDark={setAdd}
            />
            
        </div>
    </div>
  )
}

export default Service