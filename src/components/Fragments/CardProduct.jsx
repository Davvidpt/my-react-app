import Button from "../Elements/Button/Button";
const CardProduct = (props) => {
    const {children} = props;
    return (
     
        <div className="w-full max-w-[200px] bg-white border border-grey rounded-lg shadow mx-5">
            
            {children}

        </div>
    )
}

const Header = (props) => {
    const {src} = props;
    return (
        <div className="px-5 pt-5">
        <img src= {src} alt="image" className="w-full h-[200px] object-cover"/>
        </div>
    )
}

const Body = (props) => {
    const {title} = props
    return (
        <div className="px-5 pb-5">
        <a href="" className="text-xl font-semibold tracking-tight text-black">
    <h5>{title}</h5>
        <p className="text-sm text: opacity-40">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    
        </a>       
         </div>
    )
}

const Footer = () => {
    return (
        <div className="flex items-center justify-beetwen px5" >
        <Button ButtonTailwind= "h-7 w-20 px-5 font-semibold rounded-md ml-24 mb-6" classname="bg-yellow-500" textCl="text-white">Detail</Button>

     </div>
    )
}

CardProduct.Header = Header;
CardProduct.Footer = Footer;
CardProduct.Body = Body;
export default CardProduct;