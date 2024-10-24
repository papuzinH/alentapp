// CircularProgress.tsx
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  size?: number;      // Tamaño del círculo
  strokeWidth?: number; // Ancho del borde
  duration?: number;  // Duración de la animación en milisegundos
  max?: number;       // Máximo del "progreso" (por ejemplo, 60 para 60 segundos)
  elapsedTime: number; // Tiempo transcurrido en segundos
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 200,
  strokeWidth = 10,
  duration = 60000, // 1 minuto por defecto
  elapsedTime = 0,  // Tiempo transcurrido en segundos
  max = 5400,       // 90 minutos (5400 segundos)
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  
  // Limitar el tiempo transcurrido a 90 minutos (5400 segundos) para que el círculo no siga llenándose
  const limitedElapsedTime = elapsedTime > max ? max : elapsedTime;
  
  // Calcular el porcentaje del círculo completado
  const progress = limitedElapsedTime / max; // Progreso del partido (0 a 1)

  const strokeDashoffset = circumference - (circumference * progress);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Círculo de fondo */}
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Círculo animado */}
        <AnimatedCircle
          stroke="#3498db"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
      {/* Mostrar el tiempo transcurrido en formato MM:SS */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{formatTime(elapsedTime)}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db",
  },
});

export default CircularProgress;
