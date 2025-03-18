import Lottie from "lottie-react"
import notFound from "@assets/lottieFiles/notFound.json"
import error from "@assets/lottieFiles/error.json"
import loading from "@assets/lottieFiles/loading.json"
import empty from "@assets/lottieFiles/empty.json"
import success from "@assets/lottieFiles/success.json"


const lottieFilesMap = {
    notFound,
    error,
    loading,
    empty,
    success
}


type LottieHandlerProps = {
    type: keyof typeof lottieFilesMap;
    message?: string;
    className?: string;
}

const LottieHandler = ( {type, message, className}: LottieHandlerProps ) => {

    const lottie = lottieFilesMap[type]
    const messageStyle = type === "error" ? { fontSiza: "19px", color: "red" } : {fontSiza: "19px", marginTop: "30px"}
  return (
    <div className={` d-flex flex-column align-items-center ${className}`}>
        <Lottie animationData={lottie} style={{width:"400px"}} />
        {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  )
}

export default LottieHandler
