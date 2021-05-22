// React
import React, { useState } from "react";

// Third party
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";

// Components
import Table from "../../components/Table";

// Local
import IllustImg from "../../asset/images/wall.svg";
import "../../styles/home.scss";

function Home() {
  const [theme, setTheme] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [source, setSource] = useState("");
  const [destiny, setDestiny] = useState("");
  const [plan, setPlan] = useState("");
  const [minute, setMinute] = useState("");

  const [noPlanResult, setNoPlanResult] = useState(0);
  const [withPlanResult, setWithPlanResult] = useState(0);

  const tabela = [
    { ddd: "011" },
    { ddd: "016" },
    { ddd: "017" },
    { ddd: "018" },
  ];

  const planos = [
    { plano: "FaleMais30 (30 minutos)", value: 30 },
    { plano: "FaleMais60 (60 minutos)", value: 60 },
    { plano: "FaleMais120 (120 minutos)", value: 120 },
  ];

  const valores = [
    { source: "011", destiny: "016", price: 1.9 },
    { source: "016", destiny: "011", price: 2.9 },
    { source: "011", destiny: "017", price: 1.7 },
    { source: "017", destiny: "011", price: 2.7 },
    { source: "011", destiny: "018", price: 0.9 },
    { source: "018", destiny: "011", price: 1.9 },
  ];

  function handleTheme() {
    setTheme(theme ? false : true);
  }

  function onClickConsult() {
    if (!source && !destiny && !minute) {
      alert("Preecha todos os campos");
    }

    let price = null;

    valores.forEach((item) => {
      if (
        item.source === tabela[parseInt(source)].ddd &&
        item.destiny === tabela[parseInt(destiny)].ddd
      )
        price = item.price;
    });

    let noPlanResultFinal = parseInt(minute) * price;
    setNoPlanResult(noPlanResultFinal);

    if (plan) {
      let planValue = planos[parseInt(plan)].value;
      let withPlanResultFinal = parseInt(minute) - planValue;

      if (withPlanResultFinal > 0) {
        withPlanResultFinal *= price;
        withPlanResultFinal += withPlanResultFinal * 0.1;
        setWithPlanResult(withPlanResultFinal);
      } else {
        setWithPlanResult(0);
      }
    }
  }

  return (
    <div
      className="container_main_screen"
      style={{ background: `${theme === true ? "#fff" : "#333"}` }}
    >
      <div className="container_main_left">
        <div className="main_left_title">
          <h1 style={{ color: `${theme === true ? "#757575" : "#fff"}` }}>
            Sign up for a plan and speak free to any area code, you only pay for
            the excess minutes.
          </h1>
        </div>
        <div className="main_left_image">
          <img src={IllustImg} alt="call wall" />
        </div>
        <div className="table">{showTable && <Table values={valores} />}</div>
        <div className="main_left_button">
          {showTable === true ? (
            <button className="close_table" onClick={() => setShowTable(false)}>
              close table
            </button>
          ) : (
            <button className="see_table" onClick={() => setShowTable(true)}>
              see table
            </button>
          )}
        </div>
      </div>

      <div className="container_main_right">
        <div className="content_theme">
          <div className="content_theme_container">
            <FiSun size={25} color={theme === false ? "#999" : "#00b0ff"} />

            {theme === true ? (
              <BsToggleOff
                size={30}
                style={{ cursor: "pointer" }}
                color="#0f8bff"
                onClick={handleTheme}
              />
            ) : (
              <BsToggleOn
                size={30}
                style={{ cursor: "pointer" }}
                color="#0f8bff"
                onClick={handleTheme}
              />
            )}

            <FiMoon size={25} color={theme === true ? "#999" : "#00b0ff"} />
          </div>
        </div>

        <div className="content_main_right">
          <div className="container_inpu_inf">
            <div className="con_inp_usr">
              <div className="inpIN">
                <label
                  className="title_inp"
                  style={{ color: `${theme === true ? "#757575" : "#fff"}` }}
                >
                  Source *
                </label>
                <select
                  className="in_user"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                  onChange={(event) => {
                    setSource(event.target.value);
                  }}
                >
                  <option value="">Select the source</option>
                  {tabela.map((item, index) => (
                    <option key={index} value={index}>
                      {item.ddd}
                    </option>
                  ))}
                </select>
              </div>

              <div className="inpIN">
                <label
                  className="title_inp"
                  style={{ color: `${theme === true ? "#757575" : "#fff"}` }}
                >
                  Destiny *
                </label>
                <select
                  className="in_user"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                  onChange={(event) => {
                    setDestiny(event.target.value);
                  }}
                >
                  <option value="">Select the destination</option>
                  {tabela.map((item, index) => (
                    <option key={index} value={index}>
                      {item.ddd}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="con_inp_usr">
              <div className="inpIN_plan">
                <label
                  className="title_inp_plan"
                  style={{ color: `${theme === true ? "#757575" : "#fff"}` }}
                >
                  Plans TalkMore *
                </label>
                <select
                  className="in_user_plan"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                  onChange={(event) => {
                    setPlan(event.target.value);
                  }}
                >
                  <option value="">Select the plan</option>
                  {planos.map((item, index) => (
                    <option key={index} value={index}>
                      {item.plano}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="con_inp_usr">
              <div className="inpIN_minu">
                <label
                  className="title_inp_minu"
                  style={{ color: `${theme === true ? "#757575" : "#fff"}` }}
                >
                  Minutes *
                </label>
                <input
                  type="text"
                  className="in_user_minu"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                  onChange={(event) => {
                    setMinute(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="con_inp_usr">
              <div className="con_w_p">
                <label className="title_plan_w">with plan</label>
                <span
                  className="sc_w_p"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                >
                 {`R$${withPlanResult}`}
                </span>
              </div>

              <div className="con_w_p">
                <label
                  className="title_plan_w"
                  style={{ color: `${theme === true ? "#757575" : "#fff"}` }}
                >
                  without plan
                </label>
                <span
                  className="sc_w_p"
                  style={{ color: `${theme === true ? "#757575" : "#2B3DFA"}` }}
                >
                  {`R$${noPlanResult}`}
                </span>
              </div>
            </div>
            <button className="btn_consult" onClick={onClickConsult}>
              Consultar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
