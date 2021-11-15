import Item from "./Item"

const ItemList = ({items}) => {

    //Listo los items

    return (
        <>
            {
            items.map(producto =>  <Item producto={producto}/>)
            }
        </>
    )
}

export default ItemList
