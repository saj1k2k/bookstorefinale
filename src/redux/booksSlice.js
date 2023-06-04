import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNewBooks = createAsyncThunk(
    'newBooks/fetchNewBooks',
    async function() {
      const response = await fetch('https://api.itbook.store/1.0/new');
      const data = await response.json()
      return data
    }
)

const initialState = {
    isLoading: true,
    books: [],
    error: null

  };

const booksSlice = createSlice({
  name: 'newBooks',
  initialState,
  reducers: {    
  },
  extraReducers: {
      [fetchNewBooks.pending]: (state)  => {
          state.isLoading = false
          state.error = null
      },
      [fetchNewBooks.fulfilled]: (state, {payload})  => {
          state.isLoading = false
          state.books = payload.books
      },
      [fetchNewBooks.rejected]: (state, {payload})  => {

      },
  }
})


export default booksSlice.reducer;
