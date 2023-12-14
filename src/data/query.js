/**
 * Pre defined sets of query.
*/
const query = [ 
    "SELECT * FROM 'territories' WHERE 'territoryDescription' = 'Wilton';",
    "SELECT * FROM 'orders' WHERE 'shipVia' = 3;",
    "SELECT * FROM 'products' WHERE 'unitsInStock' = 0;",
    "SELECT * FROM 'orders' WHERE 'shipName' = 'Wartian Herkku';",
    "SELECT * FROM 'shippers' WHERE 'companyName' = 'Federal Shipping';"
];
export {query};