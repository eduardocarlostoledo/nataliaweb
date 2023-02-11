export interface Path {
  name: string;
  href: string;
}

export const paths: Record<string, Path> = {
  home: { name: 'Home', href: '/' },
  planets: { name: 'Cursos', href: '/planets' },
  starships: { name: 'Registro', href: '/starships' },
  about: { name: 'Acerca de Mí', href: '/about' },
};
