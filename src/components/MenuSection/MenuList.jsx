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

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Cold Appetizers</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Hummus</span>
            <span style={priceStyle}>6.60</span>
          </li>
          <li style={itemStyle}>
            <span>Babaganush</span>
            <span style={priceStyle}>6.60</span>
          </li>
          <li style={itemStyle}>
            <span>Ezme</span>
            <span style={priceStyle}>6.60</span>
          </li>
          <li style={itemStyle}>
            <span>Fried Eggplant</span>
            <span style={priceStyle}>6.60</span>
          </li>
          <li style={itemStyle}>
            <span>Carrot Salad</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Potato Salad</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Tabouli</span>
            <span style={priceStyle}>6.60</span>
          </li>
          <li style={itemStyle}>
            <span>Haydari</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Dolma (stuffed grape leaves)</span>
            <span style={priceStyle}>7.14</span>
          </li>
          <li style={itemStyle}>
            <span>Maza Platter</span>
            <span style={priceStyle}>11.99</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Hot Appetizers</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Spanakopita</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Sigara Rolls (Cheese)</span>
            <span style={priceStyle}>6.00</span>
          </li>
          <li style={itemStyle}>
            <span>Sigara Rolls (Beef)</span>
            <span style={priceStyle}>6.00</span>
          </li>
          <li style={itemStyle}>
            <span>Mozzarella Sticks</span>
            <span style={priceStyle}>7.20</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Tenders</span>
            <span style={priceStyle}>9.00</span>
          </li>
          <li style={itemStyle}>
            <span>Falafel (3 pieces)</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Grilled Chicken Wings</span>
            <span style={priceStyle}>9.00</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Soups & Salads</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Lentil Soup</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Orzo Soup</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>Greek Salad</span>
            <span style={priceStyle}>9.60</span>
          </li>
          <li style={itemStyle}>
            <span>Shepherd Salad</span>
            <span style={priceStyle}>9.60</span>
          </li>
          <li style={itemStyle}>
            <span>Caesar Salad</span>
            <span style={priceStyle}>9.60</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Sides</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>White Rice</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>Bulgur (Cracked Wheat)</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>French Fries</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>Side Greek Salad</span>
            <span style={priceStyle}>5.99</span>
          </li>
          <li style={itemStyle}>
            <span>Side Shepherd Salad</span>
            <span style={priceStyle}>5.99</span>
          </li>
          <li style={itemStyle}>
            <span>Side Caesar Salad</span>
            <span style={priceStyle}>5.99</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Entrees</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Our Signature Adana Kebab</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Adana Kebab</span>
            <span style={priceStyle}>15.59</span>
          </li>
          <li style={itemStyle}>
            <span>Kofte Kebab</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Shish Kebab</span>
            <span style={priceStyle}>15.59</span>
          </li>
          <li style={itemStyle}>
            <span>Lamb Shish Kebab</span>
            <span style={priceStyle}>19.19</span>
          </li>
          <li style={itemStyle}>
            <span>Ribeye Shish Kebab</span>
            <span style={priceStyle}>19.19</span>
          </li>
          <li style={itemStyle}>
            <span>Veggie Kebab</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Lamb & Beef Shawarma Plate</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Shawarma Plate</span>
            <span style={priceStyle}>15.59</span>
          </li>
          <li style={itemStyle}>
            <span>Shrimp Plate</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Mixed Shawarma Plate</span>
            <span style={priceStyle}>17.99</span>
          </li>
          <li style={itemStyle}>
            <span>T&amp;G Mixed Grill</span>
            <span style={priceStyle}>29.99</span>
          </li>
          <li style={itemStyle}>
            <span>Salmon Plate</span>
            <span style={priceStyle}>17.99</span>
          </li>
          <li style={itemStyle}>
            <span>Lamb Shank</span>
            <span style={priceStyle}>19.19</span>
          </li>
          <li style={itemStyle}>
            <span>Falafel Plate</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Turkish Moussaka</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Izmir Kofte</span>
            <span style={priceStyle}>16.79</span>
          </li>
          <li style={itemStyle}>
            <span>Spinach Alfredo Pasta</span>
            <span style={priceStyle}>10.20</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Sandwiches & Wraps</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Adana Kebab (wrap)</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Adana Kebab (wrap)</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Kofte Kebab (wrap)</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Beef & Lamb Shawarma (Gyro)</span>
            <span style={priceStyle}>14.39</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Shawarma (Gyro)</span>
            <span style={priceStyle}>13.19</span>
          </li>
          <li style={itemStyle}>
            <span>Mix Shawarma (Gyro)</span>
            <span style={priceStyle}>15.59</span>
          </li>
          <li style={itemStyle}>
            <span>Mediterranean Burger</span>
            <span style={priceStyle}>13.19</span>
          </li>
          <li style={itemStyle}>
            <span>Fish Wrap</span>
            <span style={priceStyle}>13.19</span>
          </li>
          <li style={itemStyle}>
            <span>Falafel Wrap</span>
            <span style={priceStyle}>13.19</span>
          </li>
          <li style={itemStyle}>
            <span>Veggie Wrap</span>
            <span style={priceStyle}>13.19</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Desserts</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Baklava</span>
            <span style={priceStyle}>3.48</span>
          </li>
          <li style={itemStyle}>
            <span>Ladyfingers</span>
            <span style={priceStyle}>3.00</span>
          </li>
          <li style={itemStyle}>
            <span>Kunefe</span>
            <span style={priceStyle}>5.94</span>
          </li>
          <li style={itemStyle}>
            <span>Chocolate Cake</span>
            <span style={priceStyle}>7.20</span>
          </li>
          <li style={itemStyle}>
            <span>Cheesecake</span>
            <span style={priceStyle}>4.20</span>
          </li>
          <li style={itemStyle}>
            <span>Coconut Cake</span>
            <span style={priceStyle}>7.20</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Beverages</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Soft Drinks</span>
            <span style={priceStyle}>2.70</span>
          </li>
          <li style={itemStyle}>
            <span>Ayran Yogurt Drink</span>
            <span style={priceStyle}>3.00</span>
          </li>
          <li style={itemStyle}>
            <span>Turkish Coffee</span>
            <span style={priceStyle}>3.59</span>
          </li>
          <li style={itemStyle}>
            <span>Pot of Hot Turkish Tea</span>
            <span style={priceStyle}>4.79</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
