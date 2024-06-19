import { Row, Col, Container ,Image} from 'react-bootstrap'
import '../Register/Register.css';
export default function Login() {
    return (
        <Container className='container'>
        <Row>
            <Col xs={12} md={6} className="left-panel">
                <div className="logo">
                    <Image src="./image/icondavid.png"></Image>
                </div>
            </Col>
            <Col xs={12} md={6} className="right-panel">
                <div className="form-container">
                    <h2>Login</h2>
                    <form style={{textAlign:"left"}}>
                        <input type="text" placeholder="UserName" />
                        <input type="password" placeholder="Password" />
                        <label className="checkbox-label">
                        <input type="checkbox" /> Remember me
                        </label>
                        <button type="button" className="create-account-btn">Login</button>
                    </form>
                    <div className="login-link"> <a href="#"><u>Forgot password?</u></a></div>
                    <hr/>
                    <div className="login-link" >Do not have an account? <a href="#"><u>Register</u></a></div>
                </div>
            </Col>
        </Row>
    </Container>
    );
}
