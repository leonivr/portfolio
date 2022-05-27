export class experiencia{
    id?:number;
    nombre_empresa:string;
    fecha_inicio:String;
    fecha_fin:String;
    descripcion:String;

    constructor ( nombreEmpresa:string,fechaInicio:String,fechaFin:String,
        descripcion:String){
            this.nombre_empresa=nombreEmpresa;
            this.fecha_inicio=fechaInicio;
            this.fecha_fin=fechaFin;
            this.descripcion=descripcion;
        }
}