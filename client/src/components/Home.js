import React, { useEffect } from 'react'
import { ListGroup, Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listAllFood } from '../actions/foodActions'
import Loader from './Loader'

const Home = () => {
    const dispatch = useDispatch()

    const foodList = useSelector(state => state.foodList)
    const { loading, food, error } = foodList

    useEffect(() => {
        dispatch(listAllFood())
    }, [dispatch])

    return (
        <Row className="justify-content-center">
            <Col md={10}>

                <ListGroup variant="flush">
                    <ListGroup.Item 
                    className="box-shadow2"
                    style={{ marginBottom: '10px', borderRadius: '10px' }}>
                        <Row >
                            <Col md={5}>Name</Col>
                            <Col md={2}>Type</Col>
                            <Col md={2}>Price</Col>
                            <Col md={2}>Amount</Col>
                        </Row>
                    </ListGroup.Item>
                    {food ? food.map(item => (
                        <ListGroup.Item className="box-shadow" style={{ marginBottom: '10px', borderRadius: '10px' }}>
                            <Row className="align-items-center">
                                <Col md={5} style={{ height: '100%', alignItems: 'center', paddingLeft: '24px' }}>
                                    <Row>
                                        {item.name}
                                    </Row>
                                </Col>
                                <Col md={2} style={{ height: '100%' }}>{item.type}</Col>
                                <Col md={2}>{item.price}</Col>
                                <Col md={2}>{item.amount}</Col>
                            </Row>
                        </ListGroup.Item>

                    )) : <h2>No item</h2>}
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Home