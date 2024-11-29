const pool = require('../config/db');
const bcrypt = require('bcrypt');

const createUser = async (email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
            INSERT INTO users (email, password, role)
            VALUES($1, $2, $3)
            RETURNING id, email, role, created_at;
        `;
    const values = [email, hashedPassword, role];
    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const login = () => {};
module.exports = { createUser, login };
