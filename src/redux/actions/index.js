export const EditingMode = (data) => {
  return {
    type: "IMAGE/TEXT",
    payload: data,
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};

export const singleTiled = () => {
  return {
    type: "SINGLE/TILED"
  };
};

export const opacity = (data) => {
  return {
    type: "OPACITY",
    payload: data,
  };
};

export const padding = (data) => {
  return {
    type: "PADDING",
    payload: data,
  };
};

export const setTopValue = (data) => {
  return {
    type: "TOP",
    payload: data,
  };
};

export const setLeftValue = (data) => {
  return {
    type: "LEFT",
    payload: data,
  };
};

export const setValue = (data) => {
  return {
    type: "VALUE",
    payload: data,
  };
};

export const setFontSize = (data) => {
  return {
    type: "FONT-SIZE",
    payload: data,
  };
};

export const setColor = (data)=>{
  return{
    type: "COLOR",
    payload: data,
  }
}

export const setFont = (data)=>{
  return{
    type:"FONT",
    payload: data,
  }
}

export const setWidth = (data)=>{
  return{
    type:"WIDTH",
    payload: data,
  }
}

export const setHeight = (data)=>{
  return{
    type:"HEIGHT",
    payload: data,
  }
}

