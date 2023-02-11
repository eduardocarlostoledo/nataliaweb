import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';

const About = () => {
  const { data, error } = useSWR('/people', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <><div>
      <h1>Información Personal</h1>
      <ul>
        <li><strong>Fecha de Nacimiento:</strong> 14/07/1981</li>
        <li><strong>Domicilio:</strong> ITAEMBE MINÍ 7362 Posadas Misiones Argentina</li>
        <li><strong>Teléfono:</strong> 3764944932</li>
      </ul>
      <h2>Formación Académica</h2>
      <ul>
        <li>Profesora en Ciencias Políticas (ISARM)</li>
        <li>Coach Ontológica Profesional</li>
        <li>Diplomada en:</li>
        <ul>
          <li>Educación Sexual Integral (UNAM)</li>
          <li>Psicología Social en Adicciones (Educativa 21 BS AS)</li>
          <li>Coach en Adicciones (Educativa 21 BS AS)</li>
          <li>Orientación Familiar en Adicciones (Educativa 21 BS AS)</li>
          <li>Workshop de Counseling Sistémico en Salud Mental y Adicciones</li>
          <li>Prevención en Recaídas de Adicciones</li>
          <li>Operador Socioterapeuta</li>
          <li>Psicóloga Social en Curso</li>
        </ul>
      </ul>
      <h2>Ámbito Laboral</h2>
      <ul>
        <li>Agente Administrativo en Sector de Despacho Parlamentario de la Cámara de Representantes de la Provincia de Misiones.</li>
        <li>Auditora Líder de las normas ISO 9001/2015 del Área Parlamentaria.</li>
      </ul>
      <p><strong>Disponibilidad Horaria:</strong> 14 hs a 20hs</p>

    </div><img src="https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/311638682_7247907185225681_1187788044819244421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE5ts7fvG5fq5duRnjrrZpOkkJ4_5z8LPCSQnj_nPws8Gj0zzwtkNs-DQhpvDxLdarpWPQlSLU4rKyKkfyty77L&_nc_ohc=DZb82XN37YkAX-9Mi3g&_nc_ht=scontent.faep7-1.fna&oh=00_AfAAdZox8dWYjZ3-u446r6QS9WYut9_EKYGzPUqqAiIPiA&oe=63EB2E55"
      alt="Landing" /></>    
    
  );
};

export default About;
