export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    fechaNacimiento: Date;
    telefono: string;
    direccion: string;
    ciudad: string;
    pais: string;
    fechaRegistro: Date;
    activo: boolean;
}