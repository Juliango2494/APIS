const pool = require('../config/dataBase');

class Usuario {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM usuariosApi');
        return rows;
    }
    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM usuariosApi WHERE id = ?', [id]);
        return rows;
    }
    static async create(usuario) {
        const {nombre, telefono, correo} = usuario;
        const [result] = await pool.query('INSERT INTO usuariosApi (nombre, telefono, correo) VALUES (?, ?, ?)',
        [nombre, telefono, correo]
        );
        return result.insertId;
    }
    static async update(id, usuario) {
        const {nombre, telefono, correo} = usuario;
        const [result] = await pool.query('UPDATE usuariosApi SET nombre = ?, telefono = ?, correo = ? WHERE id = ?',
            [nombre, telefono, correo, id]
        );
        return result.affectedRows;
    }
    static async delete(id) {
        const [result] = await pool.query('DELETE FROM usuariosApi WHERE id = ?', [id]);
        return result.affectedRows;
      }
}
module.exports = Usuario;