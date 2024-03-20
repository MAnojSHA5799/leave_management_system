import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Styles from './Userdata.module.css';
import { useLocation } from 'react-router-dom';
import '../index.css'
import { useHistory } from 'react-router-dom';
function Userdata() {
  const location = useLocation();
  const userData = location.state.userData[0];
  console.log(userData)
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState('');
  const [leavetype, setLeavetype] = useState('');
  const [name, setName] = useState('');

  const [empcode, setEmpcode] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  const logs = () => {
    navigate('/');
  };

  const logadmin = () => {
    navigate('/Holiday');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/Login');

      if (userData) {
        setName(userData.firstname + ' ' + userData.lastname);
        setEmail(userData.email);
      }
    }
  }, [userData, navigate]);

  function saveUser() {
    setValidationError('');
    if (!leavetype || !name || !empcode || !startdate || !enddate || !email || !notes) {
      setValidationError('Please fill in all required fields.');
      return;
    }
    console.warn({ leavetype, name, empcode, startdate, enddate, email, notes });
    console.log('log: ', { leavetype, name, empcode, startdate, enddate, email, notes });
    let data = { leavetype, name, empcode, startdate, enddate, email, notes };

    fetch('https://leave-management-backend-yeyj.onrender.com/mark', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn('result', result);
      //   alert("Data Inserted")
      if (result.status === 200) {
        // navigate('/');
        alert('Leave Applied');
        navigate('/Holiday');
      } else {
        alert('Please enter valid details');
      }
    });
  }

  return (
    <>
      <div className={Styles.heading}>
        <img src="Logo.png" className={Styles.logo} alt="Logo Image" />
        <Button className="headerbutton" style={{ backgroundColor: '#E55A1B' , border: 'none'}} onClick={logs}>
          Logout
        </Button>
        <Button className='headerbutton' style={{ backgroundColor: '#E55A1B', border: 'none'}} onClick={logadmin}>
          Leave Portal
        </Button>
      </div>

      <div className="p-5 " >
        <Container className={Styles.main}>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className={Styles.textarea}>
            <div className="p-3 rounded border">
              <h3 className={Styles.text}>Apply for Leave</h3>
              {validationError && <p className="text-danger">{validationError}</p>}
              <Form>
                <Form.Group controlId="leavetype">
                  <Form.Label>Type of Leave:</Form.Label>
                  <Form.Control as="select" value={leavetype} onChange={(e) => setLeavetype(e.target.value)}>
                    <option value="Type of leave">Type of leave</option>
                    <option value="Full day Leave">Full day Leave</option>
                    <option value="Half day leave">Half day leave</option>
                    <option value="Vaction Leave">Vaction Leave</option>
                    <option value="Plan Leave">Plan Leave</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Label>Employee Name:</Form.Label>
                  <Form.Control type="text" value={name} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
                  {/* <Form.Control type="text" value={userData.firstname + ' ' + userData.lastname || ''} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} /> */}
                  {/* {console.log(name)} */}
                </Form.Group>

                <Form.Group controlId="empcode">
                  <Form.Label>Employee Code:</Form.Label>
                  <Form.Control type="text" value={empcode} placeholder="Employee Code" onChange={(e) => setEmpcode(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="startdate">
                  <Form.Label>Start date:</Form.Label>
                  <Form.Control type="date" min={disablePastDate()} value={startdate} onChange={(e) => setStartdate(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="enddate">
                  <Form.Label>End date:</Form.Label>
                  <Form.Control type="date" min={disablePastDate()} value={enddate} onChange={(e) => setEnddate(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="notes">
                  <Form.Label>Notes:</Form.Label>
                  <Form.Control type="text" value={notes} placeholder="Leave application notes" onChange={(e) => setNotes(e.target.value)} />
                </Form.Group>

               
                <Button type="button" onClick={saveUser} className="w-10 mx-auto d-block mt-3" style={{ backgroundColor: '#E55A1B' , border: 'none'}}>
                  Submit Leave Application
                </Button>
              </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Userdata;
