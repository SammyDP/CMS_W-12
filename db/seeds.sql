INSERT INTO department (name)

VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Service");


INSERT INTO role (title, salary, department_id )
VALUES
    ("Salesperson", 120001, 1),
    ("Lawyer", 100400, 4),
    ("Lead Engineer", 10010, 2),
    ("Accountant", 400070,3),
    ("Customer Service", 190300, 5),
    ("Account Manager", 78002, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id )
VALUES
    ( 001, "Gregg", "Allman", 1, null),
    ( 002, 'Duane', 'Allman', 2, null),
    ( 003, 'Dickey', 'Betts', 3, 1),
    ( 004, 'Derek', 'Trucks', 5, 2),
    ( 005, 'Butch', 'Trucks', 3, 1),
    ( 006, 'Warren', 'Haynes', 5, 2);
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status