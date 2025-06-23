import React, { useEffect, useState } from 'react';
import './App.css';
import data from './assets/dummty-products-data.json';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Shodai</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Customers</li>
            <li>Messages</li>
            <li className="active">Products</li>
            <li>Integrations</li>
            <li>Analytics</li>
            <li>Invoice</li>
            <li>Discount</li>
            <li>Settings</li>
            <li>Security</li>
            <li>Help</li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <div className="header">
          <h1>Products</h1>
          <button className="add-btn">+ Add Product</button>
        </div>
        <div className="filters">
          <select><option>All Categories</option></select>
          <select><option>All Status</option></select>
          <select><option>$0 - $100</option></select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Purchase Unit Price</th>
              <th>Products</th>
              <th>Views</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="product-info">
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <p className="title">{product.title}</p>
                    <p className="sku">SKU: {product.sku}</p>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
                <td>{Math.floor(Math.random() * 15000)}</td>
                <td>
                  <select className="status">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button>{'<'}</button>
          <button>1</button>
          <button>2</button>
          <button className="active">3</button>
          <button>4</button>
          <button>{'>'}</button>
        </div>
      </main>
    </div>
  );
}

export default App;
