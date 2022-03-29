import styled from "styled-components";
import { Content } from "./Components/Content";
import { Header } from "./Components/Styles/Header";
import { Container } from "./Components/Styles/MainContainer";
import "./Scss/app.scss";

function App() {
  const servicesRequested = new Set();
  const serviceCost = new Set();
  const AddWash = () => {
    let task = "Wash Car";
    let washCarAmount = "$10";
    servicesRequested.add(task);
    serviceCost.add(washCarAmount);
    let finalTasks = "";
    let finalAmount = "";
    servicesRequested.forEach(function (value) {
      finalTasks += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;

    serviceCost.forEach(function (value) {
      finalAmount += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;
    document.getElementById("amount").innerHTML = finalAmount;
  };

  const AddMowing = () => {
    let task = "Mow Lawn";
    let mowLawnAmount = "$20";
    servicesRequested.add(task);
    serviceCost.add(mowLawnAmount);
    let finalTasks = "";
    let finalAmount = "";
    servicesRequested.forEach(function (value) {
      finalTasks += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;

    serviceCost.forEach(function (value) {
      finalAmount += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;
    document.getElementById("amount").innerHTML = finalAmount;
  };

  const AddPulling = () => {
    let task = "Pull Weeds";
    let pullWeedsAmount = "$30";
    servicesRequested.add(task);
    serviceCost.add(pullWeedsAmount);
    let finalTasks = "";
    let finalAmount = "";
    servicesRequested.forEach(function (value) {
      finalTasks += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;

    serviceCost.forEach(function (value) {
      finalAmount += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = finalTasks;
    document.getElementById("amount").innerHTML = finalAmount;
  };

  return (
    <Div>
      <Container>
        <Header>
          <h1>Invoice creator</h1>
          <p>Thanks for choosing MawushieCorp, LLC!</p>
        </Header>

        <Content>
          <ButtonDiv>
            <Button onClick={AddWash} id="washCar">
              Wash Car: $10
            </Button>
            <Button id="mowLawn" onClick={AddMowing}>
              Mow Lawn: $20
            </Button>
            <Button id="pullWeeds" onClick={AddPulling}>
              Pull Weeds: $30
            </Button>
          </ButtonDiv>

          <ButtonDiv>
            <div>
              <p>TASK</p>
              <div id="task"></div>
            </div>
            <div>
              <p>TOTAL</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div id="amount"></div>
              </div>
            </div>
          </ButtonDiv>

          <Divider></Divider>

          <ButtonDiv>
            <div>
              <p>NOTES</p>
              <p id="notes">Notes here</p>
            </div>
            <div>
              <p>TOTAL AMOUNT</p>
              <p id="totalAmount">$20</p>
            </div>
          </ButtonDiv>

          <SendButton>
            <img src="email.svg" style={{ marginRight: 10 }} />
            Send Invoice
          </SendButton>
        </Content>
      </Container>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: space-between;
  color: #d5d4d8;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 13px;
  background: #d1d4f4;
  border-radius: 7px;
  border: transparent;
  color: #4a4e74;
`;

const Divider = styled.hr`
  border: 1px solid #d5d4d8;
  padding: 0px 48px;
`;

const SendButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 17px 9px 15px;
  /* width: 473px; */
  height: 44px;
  background: #3a69d2;
  border: transparent;
  border-radius: 7px;
  color: white;
`;
export default App;
