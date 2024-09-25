import PropTypes from "prop-types";

const Button = ({ className, onClick, children }) => (
  <button
    className={`font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 ${className}`}
    type="button"
    onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

function AcceptRequestModal({ request, onClose }) {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="relative p-8 w-full max-w-lg max-h-full">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
            <p className="text-gray-700 text-lg mb-6 text-left">
              Title: {request?.title} <br />
              Location: {request?.location?.city}, {request?.location?.country}
              <br />
              Latitude: {request?.location?.coordinates} <br />
              Longitude: {request?.location?.coordinates} <br />
              Email: (Upon Accept) <br />
              Contact No.: (Upon Accept)
            </p>

            <div className="flex justify-between w-full">
              <div>
                <Button className="bg-[#F4743B] text-white" onClick={onClose}>
                  Accept
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-white text-gray-900 border border-[#F4743B]">
                  <i className="fas fa-edit mr-1"></i> Edit
                </Button>

                <Button
                  className="bg-white text-gray-900 border border-[#F4743B]"
                  onClick={onClose}>
                  Cancel
                </Button>
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
