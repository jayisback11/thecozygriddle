import React from "react";
import data from "../../data.json";

const MenuList = () => {
  const sectionStyle = {
    marginBottom: "40px",
  };
  const headerStyle = {
    backgroundColor: data.theme.color,
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  };
  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
  };
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 0",
    borderBottom: "1px solid #ccc",
  };
  const priceStyle = {
    fontWeight: "bold",
  };

  return (
    <div
  style={{
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    lineHeight: 1.6,
    background: "#f8f8f8",
    color: "#333",
  }}
>
  <h1 style={{ color: data.theme.color }}>
    {data.welcome.businessname} Menu
  </h1>

  {/* Cozy Classics */}
  <div style={sectionStyle}>
    <h2 style={headerStyle}>Cozy Classics</h2>
    <ul style={listStyle}>
      <li style={itemStyle}><span>Cozy Breakfast</span><span style={priceStyle}>9.95</span></li>
      <li style={itemStyle}><span>Steak & Eggs</span><span style={priceStyle}>12.95</span></li>
      <li style={itemStyle}><span>The Cozy Benny</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>The Southern Bird</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>The Big Boy</span><span style={priceStyle}>11.95</span></li>
      <li style={itemStyle}><span>Griddle Toast</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>Griddle Cakes</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>French Toast</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>Griddle Stacks</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>Biscuits & Gravy</span><span style={priceStyle}>9.95</span></li>
      <li style={itemStyle}><span>Sausage Biscuits & Gravy</span><span style={priceStyle}>11.95</span></li>
    </ul>
  </div>

  {/* Omelettes */}
  <div style={sectionStyle}>
    <h2 style={headerStyle}>Omelettes</h2>
    <ul style={listStyle}>
      <li style={itemStyle}><span>B.Y.O. Omelette</span><span style={priceStyle}>9.95</span></li>
      <li style={itemStyle}><span>The Southern Bird</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>The Big Boy</span><span style={priceStyle}>11.95</span></li>
      <li style={itemStyle}><span>The Garden Patch</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>The Golden Hen</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>The Italian Stallion</span><span style={priceStyle}>12.95</span></li>
      <li style={itemStyle}><span>Carnivore's Dream</span><span style={priceStyle}>12.95</span></li>
      <li style={itemStyle}><span>Gulf Coast Sunrise</span><span style={priceStyle}>11.95</span></li>
    </ul>
  </div>

  {/* Beautiful Bowls */}
  <div style={sectionStyle}>
    <h2 style={headerStyle}>Beautiful Bowls</h2>
    <ul style={listStyle}>
      <li style={itemStyle}><span>Avocado Toast</span><span style={priceStyle}>9.95</span></li>
      <li style={itemStyle}><span>Seasonal Cinnamon Roll</span><span style={priceStyle}>5.95</span></li>
      <li style={itemStyle}><span>Southern Grits w/ Market Veggies</span><span style={priceStyle}>11.95</span></li>
      <li style={itemStyle}><span>Biscuit Brunch Bowl</span><span style={priceStyle}>10.95</span></li>
      <li style={itemStyle}><span>Garden Bowl</span><span style={priceStyle}>9.95</span></li>
      <li style={itemStyle}><span>The Iron Classic</span><span style={priceStyle}>10.95</span></li>
    </ul>
  </div>

  {/* Sides */}
  <div style={sectionStyle}>
    <h2 style={headerStyle}>Sides</h2>
    <ul style={listStyle}>
      <li style={itemStyle}><span>Bacon (3)</span><span style={priceStyle}>3.75</span></li>
      <li style={itemStyle}><span>Sausage Patty (2)</span><span style={priceStyle}>3.00</span></li>
      <li style={itemStyle}><span>Turkey Bacon</span><span style={priceStyle}>3.00</span></li>
      <li style={itemStyle}><span>Fried Chicken Tenders</span><span style={priceStyle}>5.95</span></li>
      <li style={itemStyle}><span>Hash Browns</span><span style={priceStyle}>3.15</span></li>
      <li style={itemStyle}><span>Grits</span><span style={priceStyle}>3.15</span></li>
      <li style={itemStyle}><span>Fresh Fruit Cup</span><span style={priceStyle}>4.95</span></li>
    </ul>
  </div>

  {/* Beverages */}
  <div style={sectionStyle}>
    <h2 style={headerStyle}>Beverages</h2>
    <ul style={listStyle}>
      <li style={itemStyle}><span>Regular Coffee</span><span style={priceStyle}>2.95</span></li>
      <li style={itemStyle}><span>Hot Chocolate (with marshmallows)</span><span style={priceStyle}>4.95</span></li>
      <li style={itemStyle}><span>Juice (Orange, Apple, Cranberry)</span><span style={priceStyle}>3.00</span></li>
      <li style={itemStyle}><span>Chocolate Milk</span><span style={priceStyle}>3.00</span></li>
      <li style={itemStyle}><span>Sweet/Unsweet Tea</span><span style={priceStyle}>2.95</span></li>
      <li style={itemStyle}><span>Bottled Water</span><span style={priceStyle}>2.00</span></li>
      <li style={itemStyle}><span>Soda (Coke products)</span><span style={priceStyle}>3.49</span></li>
    </ul>
  </div>
</div>

  );
};

export default MenuList;
