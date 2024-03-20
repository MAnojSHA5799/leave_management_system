import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Styles from "./Holiday.module.css"
import { Container, Row, Col, Button, Form,Table } from 'react-bootstrap';
function Holiday() {
  const navigate = useNavigate();

  const logs = () => {
    navigate("/");
  };

  const logadmin = () => {
    navigate("/Userdata");
  };

  const days = (date_1, date_2) => {
    let difference = new Date(date_2).getTime() - new Date(date_1).getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)+1);
    return TotalDays;
  };

  const abcd = (value_1) =>{
    if(value_1){
    console.log("vvvvvv",value_1)
  }
  }
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, []);

  const [RESPS, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token });
    fetch("http://localhost:5000/done", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
       body: JSON.stringify({ token: token }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(
          "checks",
          resp +
            " : " +
            typeof resp +
            " : " +
            resp.data +
            " : " +
            resp.data[0].id
        );
        setData(resp.data);
      });
  }, []);
  console.warn("checked", RESPS);

  return (
    <>
      <div className={Styles.heading}>
      <img src="Logo.png" className={Styles.logo} alt="Logo Image" />
      <button className={Styles.headerbutton} onClick={logs}> Logout </button>
      <button className={Styles.headerbutton} onClick={logadmin}> Apply Leave </button>
      </div>
      <Container className={`mt-3 ${Styles.heading}`}>
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className={`p-3 rounded border ${Styles.heading}`}>
            <h3 className="text-center" style={{ color: 'white' }}>Leave Portal</h3>
            <table className={`table ${Styles.textalig}`} style={{ background: 'black' }}>
              <thead className={Styles.header} >
                <tr>
                  <th >Name</th>
                  <th>Leave type</th>
                  <th>Emp Code</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Days of Leave</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Replace RESPS with your actual data array */}
                {RESPS.map((item) => {
                  let formattedTime = moment(item.startdate).format('MM/DD/YYYY');
                  let formattedTime1 = moment(item.enddate).format('MM/DD/YYYY');
                  const diff = days(formattedTime, formattedTime1);
                  let calc = abcd(item.leavetype);

                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.leavetype}</td>
                      <td>{item.empcode}</td>
                      <td>{formattedTime}</td>
                      <td>{formattedTime1}</td>
                      <td>{diff}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Holiday;
