import React from 'react';

const DempseysMenu = () => {
  const sectionStyle = {
    marginBottom: '40px'
  };
  const headerStyle = {
    backgroundColor: '#8B0000',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px'
  };
  const listStyle = {
    listStyle: 'none',
    paddingLeft: 0
  };
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 0',
    borderBottom: '1px solid #ccc'
  };
  const priceStyle = {
    fontWeight: 'bold'
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: 1.6, background: '#f8f8f8', color: '#333' }}>
      <h1 style={{ color: '#8B0000' }}>Dempsey's Poboys Menu</h1>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Appetizers</h2>
        <ul style={listStyle}>
          <li style={itemStyle}><span>Cheese Fries (S/L)</span><span style={priceStyle}>5.99 / 8.99</span></li>
          <li style={itemStyle}><span>Add Jalapeños</span><span style={priceStyle}>0.99</span></li>
          <li style={itemStyle}><span>Onion Rings (S/L)</span><span style={priceStyle}>6.99 / 9.99</span></li>
          <li style={itemStyle}><span>Hush Puppies (6/12)</span><span style={priceStyle}>3.50 / 6.50</span></li>
          <li style={itemStyle}><span>Boudin Balls (6/12)</span><span style={priceStyle}>8.50 / 14.99</span></li>
          <li style={itemStyle}><span>Messy Fries</span><span style={priceStyle}>15.99</span></li>
          <li style={itemStyle}><span>Fried Mozzarella</span><span style={priceStyle}>11.99</span></li>
          <li style={itemStyle}><span>Fried Veggies</span><span style={priceStyle}>8.99</span></li>
          <li style={itemStyle}><span>Fried Pickles</span><span style={priceStyle}>8.99</span></li>
          <li style={itemStyle}><span>Fried Mushrooms</span><span style={priceStyle}>9.99</span></li>
          <li style={itemStyle}><span>Fried Green Tomatoes</span><span style={priceStyle}>8.99</span></li>
          <li style={itemStyle}><span>Fried Okra</span><span style={priceStyle}>8.99</span></li>
          <li style={itemStyle}><span>Breadsticks</span><span style={priceStyle}>1.25/each</span></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Burgers</h2>
        <ul style={listStyle}>
          <li style={itemStyle}><span>Hamburger</span><span style={priceStyle}>8.99</span></li>
          <li style={itemStyle}><span>Cheeseburger</span><span style={priceStyle}>9.99</span></li>
          <li style={itemStyle}><span>Bacon Cheeseburger</span><span style={priceStyle}>11.99</span></li>
          <li style={itemStyle}><span>Swiss Mushroom Burger</span><span style={priceStyle}>11.99</span></li>
          <li style={itemStyle}><span>Jalapeño Cheeseburger</span><span style={priceStyle}>11.50</span></li>
          <li style={itemStyle}><span>Messy Burger</span><span style={priceStyle}>15.99</span></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Specialty Sandwiches</h2>
        <ul style={listStyle}>
          <li style={itemStyle}><span>Traditional Club</span><span style={priceStyle}>13.99</span></li>
          <li style={itemStyle}><span>Grilled Chicken Club</span><span style={priceStyle}>14.50</span></li>
          <li style={itemStyle}><span>Chicken Dijon</span><span style={priceStyle}>12.99</span></li>
          <li style={itemStyle}><span>Turkey Club</span><span style={priceStyle}>13.99</span></li>
          <li style={itemStyle}><span>Fried Green Tomato BLT</span><span style={priceStyle}>13.99</span></li>
          <li style={itemStyle}><span>Bacon, Lettuce, and Tomato</span><span style={priceStyle}>9.99</span></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Salads</h2>
        <ul style={listStyle}>
          <li style={itemStyle}><span>House</span><span style={priceStyle}>4.99 / 8.99</span></li>
          <li style={itemStyle}><span>Chicken Dijon Salad</span><span style={priceStyle}>9.99 / 13.99</span></li>
          <li style={itemStyle}><span>Boiled Shrimp Salad</span><span style={priceStyle}>11.99 / 14.99</span></li>
          <li style={itemStyle}><span>Deli Chef</span><span style={priceStyle}>8.99 / 12.99</span></li>
          <li style={itemStyle}><span>Fried Chicken, Bacon & Cheddar</span><span style={priceStyle}>11.99 / 14.99</span></li>
          <li style={itemStyle}><span>Louisiana Fried Crawfish</span><span style={priceStyle}>12.99 / 15.99</span></li>
          <li style={itemStyle}><span>Fried Shrimp</span><span style={priceStyle}>11.99 / 15.99</span></li>
          <li style={itemStyle}><span>Grilled Shrimp</span><span style={priceStyle}>11.99 / 15.99</span></li>
          <li style={itemStyle}><span>Grilled Italian Chicken Salad</span><span style={priceStyle}>9.99 / 13.99</span></li>
        </ul>
      </div>
    </div>
  );
};

export default DempseysMenu;