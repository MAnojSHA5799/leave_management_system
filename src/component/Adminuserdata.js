import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Adminuserdata() {
  const navigate = useNavigate();
  const [Status, SetStatus] = useState("Approved");
  const [Deny, SetDeny] = useState("Deny");

  const saveUser = (id, status) => {
    window.location.reload();
    console.warn({ Status });
    console.log("log: " + { Status });
    let data = { "Status": status, id };

    fetch(`http://localhost:5000/approved`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("resulting", result);
      if (result.status === 200) {
        alert("Response Sent");
      } else {
        alert("Please enter valid details");
      }
    })
  }

  const logs = () => {
    localStorage.removeItem('token')
    navigate('/');
  }

  const days = (date_1, date_2) => {
    let difference = new Date(date_2).getTime() - new Date(date_1).getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24) + 1);
    return TotalDays;
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, []);

  const [RESPS, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log({ token });
    fetch(`http://localhost:5000/admindone`, {
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
        console.log("status", resp.status)
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
  console.log("status", RESPS.Status);

  return (
    <>
      <div>
        <Button variant="danger" onClick={logs}> Logout </Button>
        <div>
          
<h3 className="text-center">Admin Login</h3>

          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Leave type</th>
                <th>Emplcode</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Days of Leave</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {RESPS.map((item) => {
                let formattedTime = moment(item.startdate).format("MM/DD/YYYY");
                let formattedTime1 = moment(item.enddate).format("MM/DD/YYYY");
                const diff = days(formattedTime, formattedTime1);

                return (
                  <tr key={item.id}>
                    <td> {item.name} </td>
                    <td> {item.leavetype} </td>
                    <td> {item.empcode} </td>
                    <td> {formattedTime} </td>
                    <td> {formattedTime1} </td>
                    <td> {diff} </td>
                    <td> {item.Status} </td>
                    <td>
                      <Button
                        variant="danger"
                        disabled={item.Status}
                        onClick={() => saveUser(item.id, "Approved")}
                      >
                        Approved
                      </Button>
                      <Button
                       style={{ marginLeft: '10px' }}
                        variant="success"
                        disabled={item.Status}
                        onClick={() => saveUser(item.id, "Deny")}
                      >
                        Deny
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Adminuserdata;
