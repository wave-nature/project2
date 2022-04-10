const initialState = {
  loading: false,
  success: false,
  successResponse: {},
  error: null,
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPOINTMENT_DETAILS_PENDING":
      return {
        ...state,
        loading: true,
        success: false,
        successResponse: {},
        error: null,
      };
    case "GET_APPOINTMENT_DETAILS_FULFILLED":
      return {
        ...state,
        loading: false,
        success: true,
        successResponse: action.payload.data,
        error: null,
      };
    case "GET_APPOINTMENT_DETAILS_REJECTED":
      return {
        ...state,
        loading: false,
        success: false,
        successResponse: {},
        error: action.payload.data,
      };

    default:
      return state;
  }
};
