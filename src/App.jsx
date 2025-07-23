import React from "react";
import foto from "./assets/juan-carlos.jpg";

const CartaPresentacion = () => {
  return (
    <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10 border border-gray-200 font-serif">
      {/* Foto */}
      <div className="flex justify-center mb-6">
        <img
          src={foto}
          alt="Juan Carlos Romero Ochoa"
          className="rounded-full w-32 h-32 object-cover shadow-lg"
        />
      </div>

      {/* Nombre */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
        Juan Carlos Romero Ochoa
      </h1>

      {/* Datos personales */}
      <div className="mb-6 text-gray-700 text-sm text-center">
        <p>RUT: 23.697.517-7</p>
        <p>Temuco, Chile</p>
        <p>
          Correo:{" "}
          <a
            href="mailto:juancarlosjuancajr@gmail.com"
            className="text-blue-600 hover:underline"
          >
            juancarlosjuancajr@gmail.com
          </a>
        </p>
        <p>
          Telefono: +56 9 93152648
        </p>
      </div>

      {/* Fecha */}
      <p className="mb-6 text-gray-700 text-center">
        Fecha:{" "}
        {new Date().toLocaleDateString("es-CL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      {/* Cuerpo de la carta */}
      <p className="mb-6 text-gray-700 leading-relaxed">
        <strong>Estimado/a encargado/a de selección:</strong>
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Mi nombre es Juan Carlos Romero Ochoa y actualmente curso el último año de
        Ingeniería en Informática en IP Chile. Desde pequeño he sentido una
        fascinación genuina por la tecnología, impulsada por los videojuegos y la
        inteligencia artificial, como la representada en la saga Halo. Hoy, ese
        interés se ha transformado en una vocación: quiero dedicarme
        profesionalmente al desarrollo de software.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        A lo largo de mi carrera he desarrollado diversos proyectos en Node.js,
        como sistemas de gestión de horarios para empleados y plataformas para
        administrar asignaturas y calificaciones. Estas experiencias me han
        permitido entender y disfrutar ambas caras del desarrollo web: backend y
        frontend. Me siento especialmente cómodo con el ecosistema de Node y
        también tengo afinidad con Python, lenguaje que me gusta por su claridad y
        versatilidad.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Me considero una persona proactiva, con gran interés por aprender
        constantemente y con una visión positiva del impacto que la tecnología
        puede generar en la sociedad. Aspiro a integrarme a equipos que trabajen en
        soluciones modernas y significativas, capaces de transformar la forma en
        que vivimos, tal como lo han hecho empresas como Netflix, Uber o Amazon.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Estoy disponible para entrevistas o colaboraciones en proyectos donde
        pueda seguir creciendo y aportar con compromiso, energía y una perspectiva
        fresca.
      </p>

      <p className="text-gray-700 font-semibold">Atentamente,</p>
      <p className="text-gray-800 text-center">Juan Carlos Romero Ochoa</p>
    </section>
  );
};

export default CartaPresentacion;
