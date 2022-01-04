
SELECT day, COUNT(assignments.id) AS total_assignments
FROM assignments
GROUP BY day
HAVING count(assignments.*) >= 10
ORDER BY day;
