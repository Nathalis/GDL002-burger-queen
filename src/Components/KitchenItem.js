import React from 'react'
import KitchenEachFood from './KitchenEachFood'

export default function KitchenItem(item, value) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
 
    console.log(item);
    console.log("done")

    return (
        <div>
         {item.item.map(element=>{
         return  <p>{element.description} {element.count}</p>
         })}
        </div>
    )
}
