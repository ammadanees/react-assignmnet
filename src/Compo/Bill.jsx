import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Bill() {
  let recv = useLocation();
  
  // Safety check: if state is null, we provide default "No data" strings
  let state = recv.state || {};

  let name = state.a || "No data";
  let number = state.b || "No data";
  let address = state.c || "No data";
  let size = state.d || "No data";
  let flavor = state.e || "No data";
  let quant = state.f || "0";
  let total = state.g || "0";
  let tax = state.h || "0";
  let final = state.i || "0";

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: '900px', borderRadius: '20px' }}>
        <div className="card-header bg-primary text-white p-4" style={{ borderRadius: '20px 20px 0 0' }}>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">🍕 Pizza Invoice</h2>
            <Link to="/pizza" className="btn btn-outline-light btn-sm border-2 fw-bold">Back to Order</Link>
          </div>
        </div>
        
        <div className="card-body p-4">
          {!recv.state ? (
            <div className="text-center py-5">
              <div className="display-1 mb-4">🛒</div>
              <h3>No Order Found</h3>
              <p className="text-muted">It looks like you haven't placed an order yet.</p>
              <Link to="/pizza" className="btn btn-primary px-4 py-2 mt-2" style={{ borderRadius: '10px' }}>
                Order Now
              </Link>
            </div>
          ) : (
            <>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5 className="text-muted text-uppercase small fw-bold mb-3">Customer Details</h5>
                  <p className="mb-1"><strong>Name:</strong> {name}</p>
                  <p className="mb-1"><strong>Phone:</strong> {number}</p>
                  <p className="mb-1"><strong>Address:</strong> {address}</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <h5 className="text-muted text-uppercase small fw-bold mb-3">Order Details</h5>
                  <p className="mb-1"><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                  <p className="mb-1"><strong>Status:</strong> <span className="badge bg-success">Paid</span></p>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Size</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-end">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="fw-bold">{flavor} Pizza</div>
                        <span className="small text-muted text-capitalize">{size} base</span>
                      </td>
                      <td>{size}</td>
                      <td className="text-center">{quant}</td>
                      <td className="text-end">Rs. {total}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="3" className="text-end">Subtotal:</th>
                      <td className="text-end">Rs. {total}</td>
                    </tr>
                    <tr>
                      <th colSpan="3" className="text-end">Tax (GST):</th>
                      <td className="text-end text-danger">Rs. {tax}</td>
                    </tr>
                    <tr className="table-primary border-top-0">
                      <th colSpan="3" className="text-end h5 mb-0">Grand Total:</th>
                      <td className="text-end h5 mb-0 fw-bold">Rs. {final}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div className="text-center mt-5">
                <p className="text-muted small italic">Thank you for ordering with Pizza Grand! Enjoy your meal.</p>
                <button 
                  className="btn btn-secondary btn-sm mt-2 opacity-50" 
                  onClick={() => window.print()}
                >
                   Print Invoice
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
