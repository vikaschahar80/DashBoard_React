
import React, { useEffect, useState } from 'react';
import './App.css';
import data from './assets/dummty-products-data.json';
import categoriesData from './assets/categories.json';

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setProducts(data.products);
    setFiltered(data.products);
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (category) {
      temp = temp.filter(p => p.category === category);
    }

    if (status) {
      if (status === 'out') {
        temp = temp.filter(p => p.stock === 0);
      } else {
        temp = temp.filter(p => p.availabilityStatus.toLowerCase().includes(status));
      }
    }

    if (price) {
      const [min, max] = price.split('-').map(Number);
      temp = temp.filter(p => p.price >= min && p.price <= max);
    }

    setFiltered(temp);
  }, [search, category, status, price, products]);

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
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select onChange={e => setCategory(e.target.value)} value={category}>
            <option value="">All Categories</option>
            {categoriesData.map(c => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
          <select onChange={e => setStatus(e.target.value)} value={status}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="out">Out of Stock</option>
          </select>
          <select onChange={e => setPrice(e.target.value)} value={price}>
            <option value="">All Prices</option>
            <option value="0-20">$0 - $20</option>
            <option value="21-50">$21 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-1000">$101+</option>
          </select>
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
            {filtered.map((product) => (
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
