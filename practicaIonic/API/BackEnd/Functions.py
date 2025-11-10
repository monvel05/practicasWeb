from bson import ObjectId, json_util as j
from flask import jsonify
from pymongo import MongoClient
import BackEnd.GlobalInfo.ResponseMessages as respuestas
import BackEnd.GlobalInfo.Keys as Colabskey

if Colabskey.dbconn == None:
    mongoConnect = MongoClient(Colabskey.strConnection)
    Colabskey.dbconn = mongoConnect[Colabskey.strDBConnection]
    dbProfesores = Colabskey.dbconn["profesores"]
    dbAlumnos = Colabskey.dbconn["alumnos"]
    dbAdministrativos = Colabskey.dbconn["administrativos"]
    dbUsuarios = Colabskey.dbconn["usuarios"]


def fnGetAllProfesores():
    try:
        arrFinalColab = []
        objQuery = dbProfesores.find({})
        listProfesores = list(objQuery)
        if len(listProfesores) != 0:
            for objProfesor in listProfesores:
                objFormateado = {
                    "id": objProfesor["_id"],
                    "nombre": objProfesor["strNombreCompleto"],
                }
                arrFinalColab.append(objFormateado)
        objResponse = respuestas.succ200.copy()
        objResponse["Respuesta"] = arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        objResponse = respuestas.err500.copy()
        objResponse['Error'] = str(e)
        return jsonify(objResponse)


def fnGetAllAdministrativos():
    try:
        arrFinalColab = []
        objQuery = dbAdministrativos.find({})
        listAdministrativos = list(objQuery)
        if len(listAdministrativos) != 0:
            for objAdministrativo in listAdministrativos:
                objFormateado = {
                    "id": objAdministrativo["_id"],
                    "nombre": objAdministrativo["strNombreCompleto"],
                }
                arrFinalColab.append(objFormateado)
        objResponse = respuestas.succ200.copy()
        objResponse["Respuesta"] = arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        objResponse = respuestas.err500.copy()
        objResponse['Error'] = str(e)
        return jsonify(objResponse)
    
def fnGetAllAlumnos():
    try:
        arrFinalColab = []
        objQuery = dbAlumnos.find({})
        listAlumnos = list(objQuery)
        if len(listAlumnos) != 0:
            for objAlumno in listAlumnos:
                objFormateado = {
                    "id": objAlumno["_id"],
                    "nombre": objAlumno["strNombreCompleto"]
                }
                arrFinalColab.append(objFormateado)
        objResponse = respuestas.succ200.copy()
        objResponse["Respuesta"] = arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        objResponse = respuestas.err500.copy()
        objResponse['Error'] = str(e)
        return jsonify(objResponse)

def fnGetAllUsuarios():
    try:
        arrFinalColab = []
        objQuery = dbUsuarios.find({})
        listUsuarios = list(objQuery)
        if len(listUsuarios) != 0:
            for objUsuario in listUsuarios:
                objFormateado = {
                    "correo": objUsuario["strCorreo"],
                    "contrasena": objUsuario["strContrasena"],
                    "rol": objUsuario["strRol"]
                }
                arrFinalColab.append(objFormateado)
        objResponse = respuestas.succ200.copy()
        objResponse["Respuesta"] = arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        objResponse = respuestas.err500.copy()
        objResponse['Error'] = str(e)
        return jsonify(objResponse)