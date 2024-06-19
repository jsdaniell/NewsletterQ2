import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'newsletter',
    password: 'po8826L92',
    port: 5432,
});

export default {
    query: (text, params) => pool.query(text, params)
};