import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../../utils";
import servicesHome from "./servicesHome";

const initialState = {
  testimonial: {},
  pageData: {},
  fontSize: 16,
  loading: false,
  error: "",
};

// 1> fetching banners
export const fetchtestimonial = createAsyncThunk(
  "sliceHome/fetchtestimonial",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchTestimonial(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);



// 4> fetching internal page data
export const fetchPageData = createAsyncThunk(
  "sliceHome/fetchPageData",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchPageData(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// 4> fetching internal page data
export const fetchNews = createAsyncThunk(
  "sliceHome/fetchNews",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchNews(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const sliceHome = createSlice({
  name: "sliceHome",
  initialState,
  reducers: {
    fontSizeIncrease: (state) => {
      state.fontSize += 1;
    },
    fontSizeDecrease: (state) => {
      state.fontSize -= 1;
    },
    fontSizeOriginal: (state) => {
      state.fontSize = 16;
    },
    resetMenuData: (state) => {
      state.pageData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchtestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchtestimonial.fulfilled, (state, action) => {
        state.testimonial = action.payload;
        state.loading = false;
      })
      .addCase(fetchtestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   

    

    builder
      .addCase(fetchPageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageData.fulfilled, (state, action) => {
        state.pageData = action.payload;
        state.loading = false;
      })
      .addCase(fetchPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   
  },
});

export const {
  fontSizeIncrease,
  fontSizeDecrease,
  fontSizeOriginal,
  resetMenuData,
} = sliceHome.actions;
export default sliceHome.reducer;
