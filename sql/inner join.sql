select *
from Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;
