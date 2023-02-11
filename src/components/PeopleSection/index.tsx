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
    <div>
      <div>Una página Sobre mí perfecta debería incluir:
        <h2>
          <ul>Foto o fotos de calidad
 <ul>Titulo impactante y con alguna keyword
</ul>
        <ul>Tu propuesta de valor (misión)
</ul>
        <ul> Elementos multimedia (vídeos) que aporten credibilidad
</ul>
        <ul>Un buen Storytelling (tu historia personal – evolución)
</ul>
        <ul>Testimonios de otros profesionales
</ul>
        <ul>Llamadas a la acción (CTA)
</ul>
        <ul> Curiosidades sobre ti
</ul>
        <ul></ul>
          </ul></h2>
      
      </div>
      
      <img src="https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/311638682_7247907185225681_1187788044819244421_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE5ts7fvG5fq5duRnjrrZpOkkJ4_5z8LPCSQnj_nPws8Gj0zzwtkNs-DQhpvDxLdarpWPQlSLU4rKyKkfyty77L&_nc_ohc=DZb82XN37YkAX-9Mi3g&_nc_ht=scontent.faep7-1.fna&oh=00_AfAAdZox8dWYjZ3-u446r6QS9WYut9_EKYGzPUqqAiIPiA&oe=63EB2E55" 
    alt="Landing" />    
    </div>
  );
};

export default About;
