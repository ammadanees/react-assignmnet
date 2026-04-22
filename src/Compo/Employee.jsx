import React, { useState } from 'react';

export default function Employee() {
  let [formData, setFormData] = useState({
    empName: '',
    deptName: '',
    workingDays: ''
  });

  let [result, setResult] = useState(null);

  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  let calculateSalary = (e) => {
    e.preventDefault();
    let workingDays = parseFloat(formData.workingDays);
    let perDay = 1500;

    let basicSalary = perDay * workingDays;
    let houseAllowance = basicSalary * 0.08;
    let fuel = basicSalary * 0.11;
    let medical = basicSalary * 0.15;
    let gross = basicSalary + houseAllowance + fuel + medical;
    let tax = gross * 0.16;
    let netSalary = gross - tax;

    setResult({
      empName: formData.empName,
      deptName: formData.deptName,
      basicSalary,
      houseAllowance,
      fuel,
      medical,
      gross,
      tax,
      netSalary
    });
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-sm mb-4" style={{ borderRadius: '15px', border: 'none' }}>
            <div className="card-body p-4">
              <h2 className="card-title h4 mb-4 text-primary">Salary Calculator</h2>
              <form onSubmit={calculateSalary}>
                <div className="mb-3">
                  <label className="form-label">Employee Name</label>
                  <input
                    type="text"
                    name="empName"
                    className="form-control"
                    placeholder="Enter full name"
                    value={formData.empName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department Name</label>
                  <input
                    type="text"
                    name="deptName"
                    className="form-control"
                    placeholder="Enter department"
                    value={formData.deptName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Working Days</label>
                  <input
                    type="number"
                    name="workingDays"
                    className="form-control"
                    placeholder="Enter number of days"
                    value={formData.workingDays}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 mt-2" style={{ borderRadius: '10px' }}>
                  Generate Salary Slip
                </button>
              </form>
            </div>
          </div>
        </div>

        {result && (
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 bg-white" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 text-dark">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h5 mb-0">Salary Summary</h3>
                  <span className="badge bg-success">Slip Generated</span>
                </div>
                
                <div className="mb-4 pb-2 border-bottom">
                  <div className="row mb-2">
                    <div className="col-6 text-muted">Employee:</div>
                    <div className="col-6 text-end fw-bold">{result.empName}</div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-muted">Department:</div>
                    <div className="col-6 text-end fw-bold">{result.deptName}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Basic Salary:</span>
                    <span className="fw-semibold">Rs. {result.basicSalary.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-muted small">
                    <span>House Allowance (8%):</span>
                    <span>+ Rs. {result.houseAllowance.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-muted small">
                    <span>Fuel Allowance (11%):</span>
                    <span>+ Rs. {result.fuel.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 text-muted small">
                    <span>Medical Allowance (15%):</span>
                    <span>+ Rs. {result.medical.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-light p-3 rounded mb-3">
                  <div className="d-flex justify-content-between mb-2 text-primary fw-bold">
                    <span>Gross Salary:</span>
                    <span>Rs. {result.gross.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-0 text-danger small">
                    <span>Tax Deduction (16%):</span>
                    <span>- Rs. {result.tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                  <h4 className="h5 mb-0 text-success fw-bold">Net Salary:</h4>
                  <h4 className="h5 mb-0 text-success fw-bold">Rs. {result.netSalary.toLocaleString()}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
