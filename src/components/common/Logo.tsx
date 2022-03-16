import { LogoProps } from "@/models"

const Logo = (props:LogoProps)=>{
    return (
        <>
            <a className={`c-pointer ${props.className}`} href={props.link}>
                <img style={{borderRadius:"3px"}}  src={props.src} alt={props.src} width="120px"  />
            </a>
        </>
    )
}
Logo.defaultProps = {
    alt:"img",
    src:'assets/img/logo.JPG'
}
export default Logo