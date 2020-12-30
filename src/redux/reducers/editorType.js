import { DATA } from "../../data";
import { DEFAULT_DATA } from "../../data";

export const editorTypeReducer = (state = DATA, action) => {
  switch (action.type) {
    case "VALUE":
      return { ...state, value: action.payload };
    case "IMAGE/TEXT":
      return { ...state, type: action.payload };
      case "OPACITY":
        return { ...state, opacity: action.payload };  
    case "CLEAR":
      return { ...DEFAULT_DATA};
      case "FONT-SIZE":
        return { ...state, fontSize: action.payload };  
        case "FONT":
          return { ...state, fontPath: action.payload };    
    case "SINGLE/TILED":
      const type = state.mode === 'tiled' : 'single' : 'tiled'
      return { ...state, mode: type };
      case "COLOR":
      return { ...state, color: action.payload };
    
      case "PADDING":
      return { ...state, padding: action.payload };
      case "WIDTH":
        return {
          ...state,
          imageCropParams: { ...state.imageCropParams, width: action.payload },
        };
        case "HEIGHT":
          return {
            ...state,
            imageCropParams: { ...state.imageCropParams, height: action.payload },
          };
    case "TOP":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, top: action.payload },
      };
    case "LEFT":
      return {
        ...state,
        imageCropParams: { ...state.imageCropParams, left: action.payload },
      };
    default:
      return state;
  }
};
