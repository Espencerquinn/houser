const initialState = {
    propertyname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
   }
   
//action builders 

   const UPDATE_PROPERTYNAME = 'PROPERTY_NAME';
   const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
   const UPDATE_CITY = 'UPDATE_CITY';
   const UPDATE_STATE = 'UPDATE_STATE';
   const UPDATE_ZIP = 'UPDATE_ZIP';
   const UPDATE_IMG = 'UPDATE_IMG';
   const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
   const UPDATE_RENT = 'UPDATE_RENT';   

   
   
function reducer (state = initialState, action) {
    switch (action.type) {

       
    }
}

//actions are payloads of information that send data from application to store

export function updateName (name) {
    return {
        type: UPDATE_PROPERTYNAME,
        payload: name
    }
}
export function updateAddress (address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity (city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState (propertystate) {
    return {
        type: UPDATE_STATE,
        payload: propertystate
    }
}
export function updateZipcode (zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImg (img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}
export function updateMortgage (mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateRent (rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export default reducer;