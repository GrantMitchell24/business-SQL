USE work_db;

INSERT INTO department(name)
VALUES ("HR"), ("IT"), ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 75000, 2),
("HR Rep", 50,000, 1),
("Manager", 90000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Grant", "Mitchell", 1, 3),
("Jane", "Doe", 2, 3),
("Ron", "Burgundy", 3, null);
