import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MajorCategoryText, SearchCategory } from '../../components/pages/Home/declarations';

const initialState: SearchCategory = {
  majorCategory: '',
  smallCategory: [],
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setMajorCategory: (state, action: PayloadAction<MajorCategoryText>) => {
      state.majorCategory = action.payload;
    },
  },
});

export default slice.reducer;
export const { setMajorCategory } = slice.actions;
