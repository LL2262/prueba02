export interface Puesto {
    PuestoID?: string,
    nombre?: string
}

export interface Empleado {
    EmpleadoID?: string,
    Dni?: number,
    nombre?: string,
    apellido?: string,
    fechaNac?: string,
    email?: string,
    idPuesto?: number

}