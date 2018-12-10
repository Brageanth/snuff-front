import { Prenda } from "./prenda";
import { Colore } from "./colore";
import { Talla } from "./talla";
import { Estampado } from "./estampado";
import { Usuario } from "./usuario";

export class Compra {
    prenda: Prenda 
    color: Colore
    talla: Talla
    estampado: Estampado
    usuario: Usuario
    cantidad: number
    precio: number
    fabricada: boolean
    entregada: boolean
}
