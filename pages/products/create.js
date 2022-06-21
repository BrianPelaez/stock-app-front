import { useState } from "react";

const initialState = {name: '', price: 0}

function Create(){

    const [product, setProduct] = useState(initialState);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {

        e.preventDefault();

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => {
            return res.json();
        }).then(data => {
            setProduct(initialState)
            console.log("Producto creado con éxito")
        })
        .catch( err => {
            console.log(err)
        })
    }

    return(
        <>
            <h1>Crear nuevo Producto</h1>
            <form>
                <input type="text" name="name" onChange={handleChange} value={product.name} placeholder="Nombre del producto..."></input>
                <input type="number" name="price" onChange={handleChange} value={product.price} placeholder="Precio..."></input>
                <button onClick={handleClick}>Crear Producto</button>
            </form>
            <style>{
                `
                form {
                    display: flex;
                    flex-direction: column;
                    width: 20rem;
                    margin: 0 auto;
                }

                input {
                    margin-bottom: 0.5rem;
                }

                h1 {
                    text-align: center;
                }
                `
            }</style>
        </>
    )
}

export default Create;