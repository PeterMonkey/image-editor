export const brightnes = () => {
    return{
        type: "SELECT_BRIGHTNESS",
        payload: {
            brightnes:{bg: "#6B7FD7", font: "text-slate-50"},
            saturation:{bg: "", font: "text-slate-400"},
            inversion:{bg: "", font: "text-slate-400"},
            grayscale:{bg: "", font: "text-slate-400"},
        }
    }
}

export const saturation = () => {
    return{
        type: "SELECT_SATURATION",
        payload: {
            brightnes:{bg: "", font: "text-slate-400"},
            saturation:{bg: "#6B7FD7", font: "text-slate-50"},
            inversion:{bg: "", font: "text-slate-400"},
            grayscale:{bg: "", font: "text-slate-400"},
        }
    }
}

export const inversion = () => {
    return{
        type: "SELECT_INVERSION",
        payload: {
            brightnes:{bg: "", font: "text-slate-400"},
            saturation:{bg: "", font: "text-slate-400"},
            inversion:{bg: "#6B7FD7", font: "text-slate-50"},
            grayscale:{bg: "", font: "text-slate-400"},
        }
    }
}

export const grayscale = () => {
    return{
        type: "SELECT_GRAYSCALE",
        payload: {
            brightnes:{bg: "", font: "text-slate-400"},
            saturation:{bg: "", font: "text-slate-400"},
            inversion:{bg: "", font: "text-slate-400"},
            grayscale:{bg: "#6B7FD7", font: "text-slate-50"},
        }
    }
}