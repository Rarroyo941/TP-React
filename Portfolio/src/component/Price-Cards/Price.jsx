import React from 'react';
import './Price.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiInfinite } from 'react-icons/bi'

const Price = () => {
    return (
        <>
        <h1 className='precios' id='precios'>Precios</h1>
        <div className="cards-container">
        <Card style={{ width: '18rem', height: '18rem'}}>
            <Card.Title className='plan'>Básico</Card.Title>
            <Card.Title className='costo'>$1.700</Card.Title>
            <div className='items'>
                <Card.Text className='item'>Duración</Card.Text>
                <Card.Text className='item'>1 hour</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item-izq'>Cantidad Fotos</Card.Text>
            <Card.Text className='item-der'>20-30</Card.Text>
            </div>
            <Button variant="primary" className='btnComprar'>COMPRAR AHORA</Button>
        </Card>
        <Card style={{ width: '18rem', height: '18rem'}}>
            <Card.Title className='plan'>Estándar</Card.Title>
            <Card.Title className='costo'>$3.000</Card.Title>
            <div className='items'>
            <Card.Text className='item'>Duración</Card.Text>
            <Card.Text className='item'>2 hour</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item'>Cantidad Fotos</Card.Text>
            <Card.Text className='item'>45-60</Card.Text>
            </div>
            <Button variant="primary" className='btnComprar'>COMPRAR AHORA</Button>
        </Card>
        <Card style={{ width: '18rem', height: '18rem'}}>
            <Card.Title className='plan'>Premium</Card.Title>
            <Card.Title className='costo'>$6.500</Card.Title>
            <div className='items'>
            <Card.Text className='item'>Duración</Card.Text>
            <Card.Text className='item'>5 hour</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item'>Cantidad Fotos</Card.Text>
            <BiInfinite className='item'/>
            </div>
            <Button variant="primary" className='btnComprar'>COMPRAR AHORA</Button>
         </Card>
         </div>
    </>
    )
    }

export default Price;