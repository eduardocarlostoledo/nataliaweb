import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Climate',
    dataIndex: 'climate',
    key: 'climate',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    render: (population: string) =>
      parseInt(population)
        ? parseInt(population).toLocaleString('es-AR')
        : population,
  },
  {
    title: 'Residents count',
    dataIndex: 'residents',
    key: 'residents_count',
    render: (residents: string[]) => residents.length,
  },
];

const Planets = () => {
  const { data, error } = useSWR('/planets', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      Aca pondriamos los cursos....


      <h1>Curso de introducción al coaching en adicciones</h1>
    <p>Profesora y coach Ontológica: Ramírez Gladis Natalia</p>
    <h2>Objetivo del curso</h2>
    <ul>
      <li>Desarrollar el potencial humano para el alcance individual y grupal.</li>
      <li>Incorporar herramientas de gestión emocional para mejorar los vínculos conmigo y con mi entorno</li>
      <li>Promover la motivación como herramienta terapéutica en el abordaje de las adicciones</li>
      <li>Facilitar el cambio de observador</li>
      <li>Mejorar la comunicación interpersonal y desarrollar una escucha activa</li>
      <li>Comunicación asertiva</li>
      <li>Conocer y fortalecer la inteligencia emocional para reconocer y modificar pensamientos y creencias limitantes.</li>
    </ul>
    <p>El curso se divide en 5 módulo para ser desarrollados en tres meses o puede ser adaptado en formato de workshop y ser desarrollado en 4 clases introductorias</p>
    <h2>Módulos del curso</h2>
    <ol>
      <li>MÓDULO 1: Introducción al coaching</li>
      <li>MÓDULO 2: Rol y tipos de función del coach</li>
      <li>MODULO 3: Abordaje integral de las adicciones</li>
      <li>MÓDULO 4: Tipos de vínculos con el objeto</li>
      <li>MÓDULO 5: Factores Familiares</li>
    </ol>
    <p>Se entregará material en formato PDF</p>
    <p>Tendrá una certificación avalada</p>

    
    </div>
  );
};

export default Planets;
