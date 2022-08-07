import React, { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import Menu from "../menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "50px",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "40px",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [seleFecha, cambiaFecha] = useState(new Date());

  const [seleCita, modiCita] = useState("0");
  const cambiaCita = (newCita) => {
    modiCita(newCita);
  };

  return (
    <>
      <Menu />
      <main role="main">
        <div className="contenedor">
          <div className="grupo">
            <label>Tipo de Cita</label>
            <select
              onChange={(event) => cambiaCita(event.target.value)}
              value={seleCita}
            >
              <option value="1">Laboral</option>
              <option value="2">Belleza</option>
              <option value="3">Médica</option>
              <option value="4">Estudio</option>
            </select>
          </div>

          <div className="grupo">
            <label>Fecha</label>
            <DatePicker value={seleFecha} onChange={cambiaFecha} />
          </div>

          <div className="grupo">
            <label>Hora</label>
            <TimePicker value={seleFecha} onChange={cambiaFecha} />
          </div>

          <div className="grupo">
            <label>Fecha y Hora</label>
            <DateTimePicker value={seleFecha} onChange={cambiaFecha} />
          </div>

          <div className={classes.btns}>
            <Button variant="contained" color="primary">
              Agendar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
