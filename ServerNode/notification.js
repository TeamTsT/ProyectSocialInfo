/**
 * Created by Zelada_Torrez on 02-12-14.
 */
module.exports=function(){
    var Cod_not="";
    var Contenido="";
    var Tipo="";
    var User_emit="";
    var Hora_emit="";
    var Fecha_emit="";


    this.setDataNotification=function(data){
        Cod_not=data.Cod_not;
        Contenido=data.Contenido;
        Tipo=data.Tipo;
        User_emit=data.User_emit;
        Hora_emit=data.Hora_emit;
        Fecha_emit=data.Fecha_emit;
    }
}