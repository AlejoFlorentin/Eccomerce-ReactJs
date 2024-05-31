import Item from "./Item"

const ItemList = ({prendas}) =>{

    return (
    
        <>

        {prendas.map(produ =>(
                    <Item key={produ.id} item={produ}/>
                ))}

        </>
                
           
    )

}

export default ItemList