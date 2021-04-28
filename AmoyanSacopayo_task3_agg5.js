//Write your own SQL statement that implements aggregate functions in any of these tables (employees, locations, and job_history)

const pool = require('./db');

pool.query('SELECT city, count(state_province) FROM public.locations GROUP BY city ORDER BY city asc', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();