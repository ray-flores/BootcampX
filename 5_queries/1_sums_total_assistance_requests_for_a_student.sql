
SELECT COUNT(*) AS total_assitances, students.name
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name
