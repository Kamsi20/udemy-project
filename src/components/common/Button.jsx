
export const Button = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 px-3 text-xs text-white hover:opacity-85 rounded-lg border-2 border-purple-800 bg-purple-800 font-semibold ">
        {text}
    </button>
}

export const ButtonOutline = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 px-3 text-xs text-purple-950 hover:opacity-85 rounded-lg border-1 border-purple-950  font-semibold">
        {text}
    </button>
}

export const ButtonWidth = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-1 px-10 text-purple-950 hover:opacity-85 rounded-lg border-2 bg-white border-purple-950 font-semibold">
        {text}
    </button>
}

export const ButtonWidthPurple = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-1 px-10 text-white hover:opacity-85 rounded-sm border-2 bg-purple-900 border-purple-950 font-semibold">
        {text}
    </button>
}


export const ButtonGray = ({text, onclick}) =>{
    return <button onClick={onclick} className="  bg-gray-900 hover:opacity-65 border-gray-900 text-white rounded-sm border-2  font-semibold  ">
        {text}
    </button>
}


export const ButtonWidthPurples = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-3 w-110 text-white hover:opacity-85 rounded-md border-2 bg-purple-700 border-purple-700 font-semibold  ">
        {text}
    </button>
}

export const ButtonBlue =({text, onclick}) =>{
    return <button onClick={onclick} className="  h-6 p-1  bg-green-200  rounded-md text-sm px-3 font-semibold  ">
        {text}
    </button>
}


export const ButtonWidthPurp = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 w-70 h-12 text-white hover:opacity-85 rounded-md border-2 bg-purple-700 border-purple-700 font-semibold  ">
        {text}
    </button>
}

export const Buttons = ({text, onclick}) =>{
    return <button onClick={onclick} className=" px-3 h-6 text-xs text-white hover:opacity-85 rounded-lg border-2 border-purple-800 bg-purple-800 font-semibold ">
        {text}
    </button>
}
export const ButtonWidthPurpl = ({text, onclick}) =>{
    return <button onClick={onclick} className="py-2 w-65   text-white hover:opacity-85 rounded-md border-2 bg-purple-700 border-purple-700 font-semibold  ">
        {text}
    </button>
}