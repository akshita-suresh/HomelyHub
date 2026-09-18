//managing booking
//store all booking
//store individual booking details
//track api loading status
//add new bookings when booking is created
//update booking data when we receive it from the backend

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: [],
    bookingDetails: {},
    loading: false
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBookingRequest(state) {
            state.loading = true;
        },
        // Stores the array of all user bookings received from the api
        setBookings(state, action) {
            state.bookings = action.payload;
            state.loading = false;
        },
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        // Corrected to assign the direct object data payload for a single booking item
        setBookingDetails: (state, action) => {
            state.bookingDetails = action.payload;
            state.loading = false; // Turn off loading when the details arrive
        }
    }
});

export const { setBookingRequest, setBookings, addBooking, setBookingDetails } = bookingSlice.actions;
export default bookingSlice;