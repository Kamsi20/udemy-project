import { FaArrowRight } from "react-icons/fa"


export const Card = ({ bg, text = "Learning AI today",  }) => {


    const style = {
        background: `url(${bg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
         
         backgroundPosition: "center",
    }

    return (
        <div className='w-70 p-3 bg-amber-400 rounded-lg' style={style}>
            <div className='h-60'></div>
            <div className='h-20 p-5 w-full rounded-lg bg-gray-200 hover:shadow-lg text-xl '>
                {text}
                <div className="float-right mt-8">
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Card
