import PropTypes from "prop-types";
import AcceptRequestCall from "./AcceptRequestCall";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function AcceptRequestModal({ request, onClose }) {
  const { user } = useAuth0();
  const [acceptedRequest, setAcceptedRequest] = useState(request);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleAcceptSuccess = (updatedRequest) => {
    setAcceptedRequest((prevRequest) => ({
      ...prevRequest,
      isAccepted: true,
      beekeeperId: user.sub,
      beefinder: {
        ...prevRequest.beefinder,
        email: updatedRequest.beefinder?.email || prevRequest.beefinder?.email,
        contactNumber:
          updatedRequest.beefinder?.contactNumber ||
          prevRequest.beefinder?.contactNumber,
      },
    }));
  };

  const isRequestPostedByUser = request?.beefinderId === user?.sub;
  const isRequestAccepted = acceptedRequest?.isAccepted;
  const isCurrentUserBeekeeper = acceptedRequest?.beekeeperId === user?.sub;

  const renderField = (label, value) => (
    <p>
      <span className="font-bold text-base mr-1">{label}:</span>
      <span className="text-sm">{value}</span>
    </p>
  );

  const renderContactFields = () => {
    if (isRequestAccepted) {
      return (
        <>
          {renderField(
            "Email",
            acceptedRequest?.beefinder?.email || "(No email provided)"
          )}
          {renderField(
            "Contact No.",
            acceptedRequest?.contactNumber || "(No contact number provided)"
          )}
        </>
      );
    } else {
      return (
        <>
          {renderField("Email", "(Upon Accept)")}
          {renderField("Contact No.", "(Upon Accept)")}
        </>
      );
    }
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="p-8 w-full max-w-lg max-h-full">
        <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">Request Details</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={onClose}>
              <span className="text-black h-6 w-6 block bg-gray-400 rounded-full">
                X
              </span>
            </button>
          </div>

          <div className="p-8 flex flex-col items-start">
            <div className="text-gray-700 text-lg mb-6 text-left">
              {renderField("Title", acceptedRequest?.title)}
              {renderField("Location", acceptedRequest?.location?.city)}

              <p>
                <span className="font-bold text-base">Description:</span>
                <span className="text-sm">
                  {isDescriptionExpanded
                    ? acceptedRequest?.description
                    : `${acceptedRequest?.description?.slice(0, 200)}
                    ${acceptedRequest?.description?.length > 200 ? "..." : ""}`}
                </span>
                {acceptedRequest?.description?.length > 200 && (
                  <button
                    onClick={toggleDescription}
                    className="text-blue-500 underline ml-2 text-xs">
                    {isDescriptionExpanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </p>

              {renderField(
                "Latitude",
                acceptedRequest?.location?.coordinates[0]
              )}
              {renderField(
                "Longitude",
                acceptedRequest?.location?.coordinates[1]
              )}

              {renderContactFields()}
            </div>

            <div className="flex justify-between w-full">
              <AcceptRequestCall
                selectedRequest={acceptedRequest}
                onSuccess={handleAcceptSuccess}
              />

              <div className="flex space-x-4">
                {isRequestPostedByUser && (
                  <button
                    className="bg-white text-gray-900 border border-[#F4743B] px-6 py-2 rounded shadow"
                    type="button"
                    onClick={() => {
                      console.log("Edit button clicked");
                    }}>
                    <i className="fas fa-edit mr-1"></i> Edit
                  </button>
                )}

                {(isRequestPostedByUser || isCurrentUserBeekeeper) &&
                  isRequestAccepted && (
                    <button
                      className="bg-white text-gray-900 border border-[#F4743B] px-6 py-2 rounded shadow"
                      type="button"
                      onClick={onClose}>
                      Cancel
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AcceptRequestModal.propTypes = {
  request: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AcceptRequestModal;
