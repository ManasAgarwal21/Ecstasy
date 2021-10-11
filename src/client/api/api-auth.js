const signin = async (data) => {
  try {
    let response = await fetch("/auth/signin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const signout = async (signal) => {
  try {
    let response = await fetch("/auth/signout/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout };
