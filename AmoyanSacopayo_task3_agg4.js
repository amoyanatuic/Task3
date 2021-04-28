//Determine the (total count, minimum, average, maximum, and standard deviation) for each job_id in the employees' table. 
//See attached image for a sample output.

const pool = require('./db');

pool.query('SELECT job_id, count(*), min(salary), avg(salary), max(salary), round(stddev(salary)) FROM public.employees GROUP BY job_id ORDER BY job_id asc', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();