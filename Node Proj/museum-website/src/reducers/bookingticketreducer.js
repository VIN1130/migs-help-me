// contactusreducer.js
export const initialFormData = {
  bookings: [{ firstName: '', middleName: '', lastName: '', phone: '', email: '', date: '' }],
  modalShow: false,
};

const bookingTicketReducer = (state, action) => {
  switch (action.type) {
      case 'UPDATE_BOOKING':
          const updatedBookings = state.bookings.map((booking, index) =>
              index === action.payload.index
                  ? { ...booking, [action.payload.name]: action.payload.value }
                  : booking
          );
          return { ...state, bookings: updatedBookings };
      case 'ADD_PERSON':
          return {
              ...state,
              bookings: [
                  ...state.bookings,
                  { firstName: '', middleName: '', lastName: '', phone: '', email: '', date: '' }
              ]
          };
      case 'REMOVE_PERSON':
          return {
              ...state,
              bookings: state.bookings.filter((_, index) => index !== action.index)
          };
      case 'SHOW_MODAL':
          return { ...state, modalShow: true };
      case 'HIDE_MODAL':
          return { ...state, modalShow: false };
      default:
          return state;
  }
};

export default bookingTicketReducer;
