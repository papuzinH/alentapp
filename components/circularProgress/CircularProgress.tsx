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
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 200,
  strokeWidth = 10,
  duration = 60000, // 1 minuto por defecto
  max = 60,         // 60 segundos
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [elapsedTime, setElapsedTime] = useState(0);

  // Función para formatear el tiempo en MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Animar el círculo desde 0 hasta 100%
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration, // Duración de la animación
      useNativeDriver: true,
    }).start();

    // Actualizar el tiempo transcurrido
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [animatedValue, duration]);

  // Calcular la longitud de trazo a medida que avanza la animación
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

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
