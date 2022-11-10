import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk('auth/register', async (arg) => {
    const { firstName, lastName, email, password } = arg;
    const { data } = await axios.post('http://localhost:4444/api/auth/register', { firstName, lastName, email, password });
    return data;
});

export const login = createAsyncThunk('auth/login', async (arg) => {
    const { email, password } = arg;
    const { data } = await axios.post('http://localhost:4444/api/auth/login', { email, password });
    return data;
});