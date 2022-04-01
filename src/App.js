import styled from "styled-components";
import { Content } from "./Components/Content";
import { Header } from "./Components/Styles/Header";
import { Container } from "./Components/Styles/MainContainer";
import "./Scss/app.scss";

function App() {
  const servicesRequested = new Set();
  const serviceCost = new Set();
  const Add = () => {
    let serviceCostArray = [...serviceCost];
    let totalAmount = 0;
    for (let i = 0; i < serviceCostArray.length; i++) {
      totalAmount += serviceCostArray[i];
    }
    document.getElementById("totalAmount").innerHTML = `$${totalAmount}`;
  };

  const invoiceCalculator = (e) => {
    let btnId = e.target.id;
    if (btnId === "washCar") {
      let task = "Wash Car";
      servicesRequested.add(task);
      serviceCost.add(10);
    }

    if (btnId === "mowLawn") {
      let task = "Mow Lawn";
      servicesRequested.add(task);
      serviceCost.add(20);
    }

    if (btnId === "pullWeeds") {
      let task = "Pull Weeds";
      servicesRequested.add(task);
      serviceCost.add(30);
    }

    let tasks = "";
    let amount = "";
    servicesRequested.forEach(function (value) {
      tasks += `<p>${value} </p>`;
    });
    document.getElementById("task").innerHTML = tasks;

    serviceCost.forEach(function (value) {
      amount += `<p>$${value} </p>`;
    });
    document.getElementById("task").innerHTML = tasks;
    document.getElementById("amount").innerHTML = amount;

    Add();
  };

  const sendInvoice = () => {
    document.getElementById("task").innerHTML = "";
    document.getElementById("amount").innerHTML = "";
    document.getElementById("totalAmount").innerHTML = "";
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
            <Button onClick={invoiceCalculator} id="washCar">
              Wash Car: $10
            </Button>
            <Button id="mowLawn" onClick={invoiceCalculator}>
              Mow Lawn: $20
            </Button>
            <Button id="pullWeeds" onClick={invoiceCalculator}>
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
              <div>
                <div id="amount" style={{ float: "right" }}></div>
              </div>
            </div>
          </ButtonDiv>

          <Divider></Divider>

          <ButtonDiv>
            <div>
              <p>NOTES</p>
              <p id="notes">We accept cash, credit card, or PayPal</p>
            </div>
            <div>
              <p>TOTAL AMOUNT</p>
              <p id="totalAmount" style={{ float: "right", fontSize: 32 }}>
                $0
              </p>
            </div>
          </ButtonDiv>

          <SendButton onClick={sendInvoice}>
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
