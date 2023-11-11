import React from "react";

function JobAppliedMessage() {
  return (
    <div>
      <div class="screen un">
        <div class="border-top"></div>

        <img
          src="data:image/png;base64,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"
          className="w-25 mt-5"
        />

        <h3>SUCCESS!</h3>

        <p>You have successfully applied for this job.</p>
        <p className="mt-5" style={{ fontWeight: "bold", color: "#7575e4" }}>
          Back to Home
        </p>
      </div>
    </div>
  );
}

export default JobAppliedMessage;
