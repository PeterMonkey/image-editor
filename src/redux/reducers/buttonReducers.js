const buttonState = {
  brightnes: { bg: "", font: "text-slate-400" },
  saturation: { bg: "", font: "text-slate-400" },
  inversion: { bg: "", font: "text-slate-400" },
  grayscale: { bg: "", font: "text-slate-400" },
};

export default (state = buttonState, action) => {
  switch (action.type) {
    case "SELECT_BRIGHTNESS":
      return {
        ...state,
        brightnes: action.payload.brightnes,
      };
      
    case "SELECT_SATURATION":
      return {
        ...state,
        saturation: action.payload.saturation,
      };
      
    case "SELECT_INVERSION":
      return {
        ...state,
        inversion: action.payload.inversion,
      };
      
    case "SELECT_GRAYSCALE":
      return {
        ...state,
        grayscale: action.payload.grayscale,
      };
      

    default:
        return state
      
  }
};
