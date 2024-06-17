import { Row, Col, Container ,Image} from 'react-bootstrap'
import './Register.css';

export default function Register() {
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
                    <h2>Create Account</h2>
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <label className="checkbox-label">
                            <input type="checkbox" /> <span>I have read and agreed to the Terms of Service and Privacy Policy</span>
                        </label>
                        <button type="button" className="create-account-btn">Create Account</button>
                    </form>
                    <div className="or">Or</div>
                    <button type="button" className="google-signup">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" />
                        Signup with Google
                    </button>
                    <div className="login-link">Already have an account? <a href="#">Log In</a></div>
                </div>
            </Col>
        </Row>
    </Container>
    );
}
