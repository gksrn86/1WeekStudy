select Customers.CustomerName, Orders.OrderID
from Customers
LEFT JOIN Ordes ON Customers.CustomerID = Orders.CustomerID
ORDER BYS Customers.CustomerName;
