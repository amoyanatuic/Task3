// What is the average salary of an employee in the company?

const pool = require('./db');

pool.query('SELECT round(avg(salary)) FROM public.employees', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();