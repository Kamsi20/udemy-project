
export const Button = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 px-3 text-xs text-white hover:opacity-85 rounded-lg border-2 border-purple-950 bg-purple-950 font-semibold">
        {text}
    </button>
}

export const ButtonOutline = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 px-3 text-xs text-purple-950 hover:opacity-85 rounded-lg border-2 border-purple-950 font-semibold">
        {text}
    </button>
}

export const ButtonWidth = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-1 px-10 text-purple-950 hover:opacity-85 rounded-sm border-2 bg-white border-purple-950 font-semibold">
        {text}
    </button>
}

export const ButtonWidthPurple = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-1 px-10 text-white hover:opacity-85 rounded-sm border-2 bg-purple-900 border-purple-950 font-semibold">
        {text}
    </button>
}