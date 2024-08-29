# Etapa de compilación con Maven y Java 17
FROM maven:3.8.4-openjdk-17 as build
WORKDIR /app

# Copiar solo los archivos POM y descargar las dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el código fuente del proyecto
COPY src /app/src

# Compilar el proyecto, omitiendo las pruebas
RUN mvn package -DskipTests

# Etapa de ejecución usando JDK 17
FROM openjdk:17-slim
WORKDIR /app

# Copiar el JAR compilado desde la etapa de compilación
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto en el que corre la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "app.jar"]
