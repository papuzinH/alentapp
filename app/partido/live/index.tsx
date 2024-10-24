import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import CronologiaContainer from "@/components/cronologia/CronologiaContainer";
import CircularProgress from "@/components/circularProgress/CircularProgress";
import { AppContext } from "@/context/alentAppContext";

const Live = () => {
  const [cronologia, setCronologia] = useState([
    {
      tiempo: "00:00",
      evento: "¡Comenzó el partido!",
    },
    {
      tiempo: "03:05",
      evento: "Salto",
    },
    {
      tiempo: "04:12",
      evento: "Aplausos",
    },
    {
      tiempo: "05:30",
      evento: "Vaivén",
    },
  ]);

  const [elapsedTime, setElapsedTime] = useState(0); // Tiempo transcurrido en segundos
  const partidoDuracion = 90 * 60; // 90 minutos en segundos
  const { matchData } = useContext(AppContext);

  useEffect(() => {
    // Calcular el tiempo transcurrido desde que empezó el partido
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const matchStartTime = new Date(matchData.dateHourMatch).getTime();
      const diff = Math.floor((now - matchStartTime) / 1000); // Diferencia en segundos

      if (diff >= 0) {
        setElapsedTime(diff); // Actualizar el tiempo transcurrido
      } else if (diff > partidoDuracion) {
        setElapsedTime(partidoDuracion); // Mantener en 90 minutos si el partido terminó
        clearInterval(interval); // Detenemos el intervalo si el partido terminó
      }
    }, 1000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ marginTop: 50 }}>
        <CircularProgress
          duration={partidoDuracion * 1000} // Duración del partido en milisegundos
          elapsedTime={elapsedTime} // Tiempo transcurrido en segundos
          max={partidoDuracion} // Máximo tiempo (90 minutos en segundos)
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 40, color: "#2699FB", fontWeight: "bold" }}>
            {Math.floor(elapsedTime / 60)} <Text style={styles.heading_primary}>MIN</Text>
          </Text>
        </View>
        <CronologiaContainer cronologia={cronologia} />
      </View>
      <Text style={[styles.heading_subtitle, { color: "#97D0FE" }]}>
        Última actualización: {Math.floor(elapsedTime / 60)}:{elapsedTime % 60 < 10 ? `0${elapsedTime % 60}` : elapsedTime % 60} min
      </Text>
    </View>
  );
};

export default Live;
