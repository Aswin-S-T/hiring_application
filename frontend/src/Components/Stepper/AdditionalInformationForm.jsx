import React from "react";

function AdditionalInformationForm() {
  return (
    <div>
      <div className="container-fluid p-5">
        <h2
          className="form-title"
          style={{ left: "28px", position: "relative" }}
        >
          Additional Informations
        </h2>
        <div className="card-lg p-4">
          <form>
            <div className="row">
              <div className="col-md-6">
                <label>
                  How many years of total work experience do you have?
                </label>
                <input type="text" className="form-control w-100" required />
              </div>
              <div className="col-md-6">
                <label>"What is your notice period?"(optional)</label>
                <input type="text" className="form-control w-100" required />
              </div>

              <div className="col-md-6">
                <label>
                  Please list 2-3 dates and time ranges that you could do an
                  interview.(optional)
                </label>
                <input type="text" className="form-control w-100" required />
              </div>
              <div className="col-md-6">
                <label>"What is your current CTC?"(optional)</label>
                <textarea className="form-control w-100" required />
              </div>

              <div className="col-md-6">
                <label>"What is your expected CTC?"(optional)</label>
                <input type="text" className="form-control w-100" required />
              </div>

              <div className="col-md-6">
                <label>
                  This is an employer-written question. You can report
                  inappropriate questions to Indeed through the "Report Job"
                  link at the bottom of the job description.
                </label>
                <textarea className="form-control w-100" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformationForm;
