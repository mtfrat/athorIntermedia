// Editar este
import { Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getFetch } from "../../services/getFetch"
import Button from "@restart/ui/esm/Button"

//Muestro el item

const ItemDetail = ({items}) => {

    const [item, setItem] = useState([])
    const [loading,setLoading] = useState(true)
    const {detalleID} = useParams()

    useEffect(() =>{
        // Reviso si categoria tiene un valor o si no esta definido
        if(detalleID){
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItem(res.filter(prod => prod.id === detalleID))
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItem(res)
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[detalleID]) //Agrego dependencia que detecte el cambio y dispare el useEffect

    console.log(item[0])

    return (
        <>
        {item.length > 0 &&
            <Card key={item[0].id} style={{
                width: '30rem',
                display:'block',
                marginTop:'100px',
                marginRight:'auto',
                marginBottom:'0px',
                marginLeft:'auto'}}>
                <Card.Img variant="top" src={item[0].imagen} />
                <Card.Body>
                    <Card.Title>{item[0].marca} {item[0].modelo}</Card.Title>
                    <Card.Text>
                    {item[0].año}
                    </Card.Text>
                    <Card.Text>
                    {item[0].precio}
                    </Card.Text>
                    <Button className="btn btn-dark" variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        }
        </>
    )
}

export default ItemDetail