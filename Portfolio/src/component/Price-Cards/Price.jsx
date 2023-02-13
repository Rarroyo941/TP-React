import React from 'react';
import './Price.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiInfinite } from 'react-icons/bi'

const Price = () => {
    const Basico = () => {
        window.open('https://mpago.la/2pyh6Ei', '_blank');
    }
    const Estandar = () => {
        window.open('https://mpago.la/1c7FEZr', '_blank');
    }
    const Premium = () => {
        window.open('https://mpago.la/1eAUAqu', '_blank');
    }
    
    return (
        <>
        <h1 className='precios' id='precios'>Precios</h1>
        <div className="cards-container">
        <Card style={{ width: '18rem', height: '17rem'}}>
            <Card.Title className='plan'>Básico</Card.Title>
            <Card.Title className='costo'>$1.700</Card.Title>
            <div className='items'>
                <Card.Text className='item'>Duración</Card.Text>
                <Card.Text className='item'>1 hora</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item'>Cantidad Fotos</Card.Text>
            <Card.Text className='item'>20-30</Card.Text>
            </div>
            <Button variant="primary" className='btnComprar' onClick={Basico}>COMPRAR AHORA</Button>
        </Card>
        <Card style={{ width: '18rem', height: '17rem'}}>
            <Card.Title className='plan'>Estándar</Card.Title>
            <Card.Title className='costo'>$3.000</Card.Title>
            <div className='items'>
            <Card.Text className='item'>Duración</Card.Text>
            <Card.Text className='item'>2 horas</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item'>Cantidad Fotos</Card.Text>
            <Card.Text className='item'>45-60</Card.Text>
            </div>
            <Button variant="primary" className='btnComprar' onClick={Estandar}>COMPRAR AHORA</Button>
        </Card>
        <Card style={{ width: '18rem', height: '17rem'}}>
            <Card.Title className='plan'>Premium</Card.Title>
            <Card.Title className='costo'>$6.500</Card.Title>
            <div className='items'>
            <Card.Text className='item'>Duración</Card.Text>
            <Card.Text className='item'>5 horas</Card.Text>
            </div>
            <div className='items'>
            <Card.Text className='item'>Cantidad Fotos</Card.Text>
            <BiInfinite className='item icon'/>
            </div>
            <Button variant="primary" className='btnComprar' onClick={Premium}>COMPRAR AHORA</Button>
         </Card>
         </div>
    </>
    )
    }

export default Price;