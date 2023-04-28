import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword } from '@firebase/auth';
import { useAuth } from '../Authentication/AuthContext';
// import {signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // setLoading(true);
      await login(email, password);
      // console.log(auth.currentUser.email);
      history.push('/home');
      // setError(auth.currentUser.email);
    } catch (err) {
      setError(err.message);
    }

    // setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <div className="mb-4" />
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
