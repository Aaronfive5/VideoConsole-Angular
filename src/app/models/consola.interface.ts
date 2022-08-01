import { Catalogo } from './catalogo.interface';

export interface Consola {
  id: Number;
  nombre: string;
  fechaLanzamiento: string;
  foto: string;
  catalogo: Catalogo[];
}
