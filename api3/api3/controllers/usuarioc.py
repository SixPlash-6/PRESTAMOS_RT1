from flask import jsonify, request, make_response
from models.usuario import *
from models.perfil import *

class Usuarioc():

    def consultar_usuarios(self):
        if request.method == 'GET':
            usuarios = db.session.query(Usuario.userId, Usuario.usuario, Usuario.nombre, Usuario.apellido, 
                                        Usuario.identificacion, Usuario.correo, Perfil.nombre.label('perfil'), 
                                        Usuario.password).join(Perfil, Usuario.perfilId == Perfil.perfilId).all()
            if not usuarios:
                return jsonify({'message': 'No hay usuarios'})
            else:
                toUsuarios = []
                for usuario in usuarios:
                    usuarioDict = {}
                    usuarioDict['userId'] = usuario[0]
                    usuarioDict['usuario'] = usuario[1]
                    usuarioDict['nombre'] = usuario[2]
                    usuarioDict['apellido'] = usuario[3]
                    usuarioDict['identificacion'] = usuario[4]
                    usuarioDict['correo'] = usuario[5]
                    usuarioDict['perfil'] = usuario[6]
                    usuarioDict['password'] = usuario[7]
                    toUsuarios.append(usuarioDict)
                return jsonify(toUsuarios)

    def insertar_usuario(self):
        usuario = request.json["usuario"]
        nombre = request.json["nombre"]
        apellido = request.json["apellido"]
        identificacion = request.json["identificacion"]
        correo = request.json["correo"]
        perfilId = request.json["perfilId"]
        password = request.json["password"]
        new_usuario = Usuario(None,usuario,nombre,apellido,identificacion,correo,perfilId,password)
        db.session.add(new_usuario)
        db.session.commit()
        return jsonify({
                'message':'Usuario registrado con exito',
                'status':'ok'
                }) 
    
    def consultar_usuario_pass(self):
        usuario = request.json['usuario']
        password = request.json['password']
        c_usuario = Usuario.query.filter_by(usuario=usuario).first()
        if c_usuario and c_usuario.password == password:
         return jsonify(c_usuario.getDatos())
        else:
            response = make_response(jsonify({'error': 'Credenciales incorrectas'}), 300)
            return response


    def editar_usuario(self):
        userId = request.json["userId"]
        c_usuario = Usuario.query.get(userId)
        if not c_usuario:
            return jsonify({'message': 'Usuario no encontrado'})
        else:
            c_usuario.usuario = request.json["usuario"]
            c_usuario.nombre = request.json["nombre"]
            c_usuario.apellido = request.json["apellido"]
            c_usuario.identifiacion = request.json["identifiacion"]
            c_usuario.correo = request.json["correo"]
            c_usuario.perfilId = request.json["perfilId"]
            c_usuario.password = request.json["password"]
            db.session.commit()
            return jsonify({'message': 'Usuario actualizado con exito'})


    def eliminar_usuario(self):
        userId = request.json["userId"]
        c_usuario = Usuario.query.get(userId)
        if not c_usuario:
            return jsonify({'message': 'Usuario no encontrado'})
        else:
            db.session.delete(c_usuario)
            db.session.commit()
            return jsonify({'message': 'Usuario eliminado con exito'})