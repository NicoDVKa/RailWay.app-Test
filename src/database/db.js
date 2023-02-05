import Sequelize from 'sequelize'

import {DB_HOST,DB_NAME,DB_PASS,DB_USER,DB_PORT} from '../config.js';

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

export default sequelize;