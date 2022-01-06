
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];

pool.query(`
SELECT DISTINCT cohorts.name AS cohort, teachers.name AS teacher 
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${cohortName}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`cohort: ${teacher.cohort}, teacher: ${teacher.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));