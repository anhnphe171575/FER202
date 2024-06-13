import { Button, Container, Form, Nav, Navbar, Col, Row, Image, Carousel, NavDropdown, InputGroup } from 'react-bootstrap'
import './Header.css';

export default function Headerhomepage() {
    return (
        <Container>
            <Row>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#"><Image  style={{width:'20%', marginRight:'5px'}}  src="./image/icondavid.png"></Image>David Music</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-2"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className="me-3">Home</Nav.Link>
                                <Nav.Link href="#action2" className="me-3">BXH</Nav.Link>
                                <Nav.Link href="#action3" className="me-3">PlayList</Nav.Link>
                                <Nav.Link href="#action4" className="me-3">Album</Nav.Link>
                            </Nav>
                            <Form className="d-flex me-2">
                                <InputGroup>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="bi bi-search"></i>
                                    </InputGroup.Text>
                                </InputGroup>

                            </Form>
                            < Button variant="outline-success" className="me-2">Đăng nhập</Button>
                            <Button variant="success">Đăng ký</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Carousel>
                    <Carousel.Item>
                    <Image src="./image/image1.jpg" className='carousel-image'></Image>
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src="./image/image2.jpg" className='carousel-image'></Image>
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src="./image/image3.jpg" className='carousel-image'></Image>
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}