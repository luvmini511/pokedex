import { AppDispatch, RootState } from '../redux/store';

export type ThunkAPI = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: {
    errorMessage: string;
  };
};
