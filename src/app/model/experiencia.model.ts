export class experiencia{
    id?:number;
    nombreEmpresa:String;
    esTrabajoActual:number;
    fechaInicio:Date;
    fechaFin:Date;
    descripcion:String;
    persona_id:number;
    tipo_empleo_id:number;

    constructor(nombreEmpresa:String,esTrabajoActual:number,fechaInicio:Date,fechaFin:Date,
        descripcion:String,persona_id:number,tipo_empleo_id:number){

            this.nombreEmpresa=nombreEmpresa;
            this.esTrabajoActual=esTrabajoActual;
            this.fechaInicio=fechaInicio;
            this.fechaFin=fechaFin;
            this.descripcion=descripcion;
            this.persona_id=persona_id;
            this.tipo_empleo_id=tipo_empleo_id;
        }
}