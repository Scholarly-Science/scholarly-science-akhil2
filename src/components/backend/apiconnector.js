import { API } from "./index.js";

export const getAllCompanies = async (page, selectedFilter) => {
  try {
    const reqbody = { filter: selectedFilter };
    const response = await fetch(`${API}/company/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(reqbody),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCompany = async (id) => {
  try {
    const response = await fetch(`${API}/company/get`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getProfile = async (email) => {
  try {
    var tokens = JSON.parse(localStorage.getItem("student-nation.com-tokens"));
    const response = await fetch(`${API}/auth/getprofile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${tokens.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const updateProfile = async (profile) => {
  try {
    var tokens = JSON.parse(localStorage.getItem("student-nation.com-tokens"));
    const response = await fetch(`${API}/auth/updateprofile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${tokens.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ profile }),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const signUp = async (user) => {
  try {
    const response = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        password: user.password,
      }),
    });
    return response.json();
  } catch (error) {
    return JSON.stringify(error);
  }
};

export const verifyEmail = async (token) => {
  try {
    const response = await fetch(`${API}/auth/verifyaccount`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const resendEmail = async (email) => {
  try {
    const response = await fetch(`${API}/auth/resendemail`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};
