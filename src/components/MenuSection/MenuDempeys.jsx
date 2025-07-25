import React from "react";

const DempseysMenu = () => {
  const sectionStyle = {
    marginBottom: "40px",
  };
  const headerStyle = {
    backgroundColor: "#205f99ff",
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
      <h1 style={{ color: "#205f99ff" }}>Sam’s of Walker Menu</h1>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Classic Donuts</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Glazed Donut</span>
            <span style={priceStyle}>1.03</span>
          </li>
          <li style={itemStyle}>
            <span>Chocolate Donut</span>
            <span style={priceStyle}>1.10</span>
          </li>
          <li style={itemStyle}>
            <span>Other Donuts</span>
            <span style={priceStyle}>1.14</span>
          </li>
          <li style={itemStyle}>
            <span>
              Filled Donut (strawberry, white icing, lemon, raspberry, bavarian
              cream)
            </span>
            <span style={priceStyle}>1.14</span>
          </li>
          <li style={itemStyle}>
            <span>Donut Holes</span>
            <span style={priceStyle}>1.61</span>
          </li>
          <li style={itemStyle}>
            <span>Cake Donut (blueberry, vanilla, chocolate, red velvet)</span>
            <span style={priceStyle}>1.27</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Specialty Donuts</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Apple Fritter</span>
            <span style={priceStyle}>2.29</span>
          </li>
          <li style={itemStyle}>
            <span>Cinnamon Roll</span>
            <span style={priceStyle}>2.29</span>
          </li>
          <li style={itemStyle}>
            <span>Eclair (chocolate glaze with bavarian cream)</span>
            <span style={priceStyle}>2.29</span>
          </li>
          <li style={itemStyle}>
            <span>Cinnamon Twist</span>
            <span style={priceStyle}>1.72</span>
          </li>
          <li style={itemStyle}>
            <span>Peanut Butter Chocolate Donut</span>
            <span style={priceStyle}>1.72</span>
          </li>
          <li style={itemStyle}>
            <span>Beignet</span>
            <span style={priceStyle}>1.44</span>
          </li>
          <li style={itemStyle}>
            <span>Glazed Bowtie</span>
            <span style={priceStyle}>2.29</span>
          </li>
          <li style={itemStyle}>
            <span>Chocolate Glazed Bowtie</span>
            <span style={priceStyle}>2.48</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Kolaches & Croissants</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Kolache (sausage & cheese or jalapeño & cheese)</span>
            <span style={priceStyle}>2.87</span>
          </li>
          <li style={itemStyle}>
            <span>Ham & Cheese Croissant</span>
            <span style={priceStyle}>3.44</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Beverages</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Milk (½ pt, pt, quart)</span>
            <span style={priceStyle}>1.95</span>
          </li>
          <li style={itemStyle}>
            <span>Bottled Soda/Drinks (16.9 oz)</span>
            <span style={priceStyle}>1.95</span>
          </li>
          <li style={itemStyle}>
            <span>Frappuccino®</span>
            <span style={priceStyle}>3.10</span>
          </li>
          <li style={itemStyle}>
            <span>Red Bull (8 oz)</span>
            <span style={priceStyle}>3.45</span>
          </li>
          <li style={itemStyle}>
            <span>Monster Energy Drink (16 oz)</span>
            <span style={priceStyle}>3.45</span>
          </li>
          <li style={itemStyle}>
            <span>Orange Juice (pint)</span>
            <span style={priceStyle}>2.53</span>
          </li>
          <li style={itemStyle}>
            <span>Apple Juice (10 oz)</span>
            <span style={priceStyle}>1.95</span>
          </li>
          <li style={itemStyle}>
            <span>Coffee (12 oz Community Coffee)</span>
            <span style={priceStyle}>1.59</span>
          </li>
          <li style={itemStyle}>
            <span>Bottled Water (16.9 oz)</span>
            <span style={priceStyle}>1.59</span>
          </li>
          <li style={itemStyle}>
            <span>Yoo Hoo (12 oz)</span>
            <span style={priceStyle}>1.72</span>
          </li>
          <li style={itemStyle}>
            <span>Sweet Tea (18.5 oz Gold Peak)</span>
            <span style={priceStyle}>2.29</span>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Donut Deals</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>6 Glaze Donut Deal</span>
            <span style={priceStyle}>5.74</span>
          </li>
          <li style={itemStyle}>
            <span>6 Chocolate Donut Deal</span>
            <span style={priceStyle}>6.21</span>
          </li>
          <li style={itemStyle}>
            <span>6 Mixed Donut Deal</span>
            <span style={priceStyle}>6.43</span>
          </li>
          <li style={itemStyle}>
            <span>6 Mixed w/ Cake Donut Deal</span>
            <span style={priceStyle}>6.89</span>
          </li>
          <li style={itemStyle}>
            <span>12 Glaze Donut Deal</span>
            <span style={priceStyle}>9.78</span>
          </li>
          <li style={itemStyle}>
            <span>12 Chocolate Mix Donut Deal</span>
            <span style={priceStyle}>10.64</span>
          </li>
          <li style={itemStyle}>
            <span>12 Mixed Dozen Donuts</span>
            <span style={priceStyle}>10.93</span>
          </li>
          <li style={itemStyle}>
            <span>12 Cake Mix Donut Deal</span>
            <span style={priceStyle}>11.68</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DempseysMenu;
