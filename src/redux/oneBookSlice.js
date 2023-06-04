import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOneBook = createAsyncThunk(
    'oneBook/fetchOneBook',
    async function(isbn13) {
      const response = await fetch(`https://api.itbook.store/1.0/${isbn13}`);
      const data = await response.json()
      return data
    }
)

const initialState = {
    isLoading: true,
    info: [],
    error: null
  };

const oneBookSlice = createSlice({
  name: 'oneBook',
  initialState,
  reducers: {    
  },
  extraReducers: {
      [fetchOneBook.pending]: (state)  => {
          state.isLoading = false
          state.error = null
      },
      [fetchOneBook.fulfilled]: (state, {payload})  => {
          state.isLoading = false
          state.info = payload.info
      },
      [fetchOneBook.rejected]: (state, {payload})  => {

      },
  }
})


export default oneBookSlice.reducer;
