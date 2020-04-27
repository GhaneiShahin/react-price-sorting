import React, { useState } from "react";

import { orderBy } from "lodash";

const App = () => {
  const [datas, setDatas] = useState([
    { id: 1, title: "chanel", price: 200 },
    { id: 2, title: "tommy", price: 100 },
    { id: 3, title: "fossil", price: 80 },
    { id: 4, title: "versace", price: 600 },
    { id: 5, title: "cat", price: 260 },
    { id: 6, title: "diesel", price: 90 },
    { id: 7, title: "zara", price: 50 },
    { id: 8, title: "rolex-gold", price: 2500 },
    { id: 9, title: "rolex", price: 1800 },
    { id: 10, title: "armani", price: 450 },
    { id: 11, title: "noName", price: 0 },
    { id: 12, title: "forSale", price: 10 }
  ]);

  const sortCoursesAsc = () => {
    setDatas(orderBy(datas, "price", "asc"));
  };

  const sortCoursesDes = () => {
    setDatas(orderBy(datas, "price", "desc"));
  };

  return (
    <section style={{ marginTop: "5em", marginRight: "2em" }}>
      <div>
        <div>
          <h3 className="alert alert-info text-center">List of Waches</h3>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">
                  Price($)
                  <span
                    className="fa fa-long-arrow-up ml-4"
                    style={{ marginRight: "0.5em" }}
                    onClick={sortCoursesDes}
                  ></span>
                  <span
                    className="fa fa-long-arrow-down"
                    style={{ marginLeft: "0.5em" }}
                    onClick={sortCoursesAsc}
                  ></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data) => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.price === 0 ? "Free" : `${data.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default App;
