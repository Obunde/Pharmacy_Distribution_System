import React from "react";

const SalesSummary = ({ summary }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Total Sales</h5>
            <p className="card-text">
              Ksh {summary.totalSales.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">Units Sold</h5>
            <p className="card-text">{summary.totalUnits.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
          <div className="card-body">
            <h5 className="card-title">Number of Products</h5>
            <p className="card-text">{summary.totalProducts}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3">
          <div className="card-body">
            <h5 className="card-title">Best Seller</h5>
            <p className="card-text">{summary.bestSeller}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-secondary mb-3">
          <div className="card-body">
            <h5 className="card-title">Average Price</h5>
            <p className="card-text">
              Ksh {summary.averagePrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-dark mb-3">
          <div className="card-body">
            <h5 className="card-title">Salespeople</h5>
            <p className="card-text">{summary.totalSalespeople}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Top Salesperson</h5>
            <p className="card-text">{summary.topSalesperson}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SalesSummary;
