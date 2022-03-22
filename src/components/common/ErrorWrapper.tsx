import { ErrorWrapperProps } from "@/models/component"

const ErrorWrapper = (props:ErrorWrapperProps)=> {
    return (
        <>{props.children}</>
    )
}

export default ErrorWrapper