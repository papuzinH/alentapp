import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

interface CronologiaItemProps {
  tiempo: string;
  evento: string;
  inicio: string; // Hora de inicio
  fin: string; // Hora de fin
}

const CronologiaItem: FC<CronologiaItemProps> = ({ tiempo, evento, inicio, fin }) => {
  
  // Función para calcular la duración
  const calcularDuracion = (inicio: string, fin: string) => {
    const inicioDate = new Date(inicio);
    const finDate = new Date(fin);
    const diffInSeconds = Math.floor((finDate.getTime() - inicioDate.getTime()) / 1000);

    const mins = Math.floor(diffInSeconds / 60);
    const secs = diffInSeconds % 60;

    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const duracion = calcularDuracion(inicio, fin); // Cálculo de la duración

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
        {tiempo} {/* Hora de inicio */}
      </Text>
      <Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
        {evento} {/* Nombre del evento */}
      </Text>
      <Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
        {duracion} {/* Duración */}
      </Text>
    </View>
  );
};

export default CronologiaItem;
