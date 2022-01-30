INSERT INTO departments (dept_name)
VALUES
('Executive'),
('Investment'),
('Marketing'),
('Sales'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('CEO', 250000, 1),
('CFO', 230000, 1),
('COO', 220000, 1),
('Senior Accountant', 85000, 2),
('Staff Accountant', 65000, 2),
('Advisor', 40000, 2),
('Operations', 40000, 2),
('Marketing Manager', 140000, 3),
('Marketing Specialist', 90000, 3),
('Marketing Associate', 65000, 3),
('Head of Sales', 180000, 4),
('Area Manager', 150000, 4),
('Sales Associate', 95000, 4),
('IT Manager', 180000, 5),
('Senior Web Developer', 110000, 5),
('Junior Web Developer', 75000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Elderderry', 1, NULL),
('Vera', 'Valerie', 2, 1),
('Brian', 'Johnston', 3, 1),
('Betsy', 'Calhoon', 4, 1),
('Jemima', 'Buckingham', 5, 4),
('Louise', 'Reynolds', 6, 3),
('RuPaul', 'Jones', 7, 3),
('Irma', 'Davids', 8, 3),
('Elenka', 'Ravetz', 9, 8),
('Audrey', 'Hepburn', 10, 8),
('Melanie', 'Cunningham', 11, 3),
('Antoinette', 'Stewart', 12, 11),
('Ellen', 'King', 13, 11),
('Bobby', 'Diaz', 14, 3),
('Naomi', 'Hayes', 15, 14),
('Jenna', 'Norman', 16, 14)
