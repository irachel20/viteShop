import "./index.css";

export function Footer() {
  return (
    <>
      <footer className="text-gray-800  bg-gray-50 px-24 py-5 justify-center flex flex-wrap">
        <div className="model-accepting w-1/2 flex flex-col gap-3">
          <h1 className="text-xl">BE OUR FUTURE MODEL</h1>
          <p className="text-xs desc-futura-modal w-3/4">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. Handmade,
            and lovingly crafted furniture and homeware is what we live, breathe
            and design so our Chelsea boutique become the hotbed for the London
            interior design community.
          </p>
        </div>
        <div className="contact-in-footer w-1/2 flex justify-center gap-8">
          <ul className="footer-contact text-xl flex flex-col gap-1">
            Contact Us
            <li className="text-xs hover:text-blue-500 cursor-pointer">
              @FRFashionHouse
            </li>
            <li className="text-xs hover:text-blue-500 cursor-pointer">
              www.FRFashionHouse/facebook.com
            </li>
            <li className="text-xs hover:text-blue-500 cursor-pointer">
              www.FRFashionHouse/twitter.com
            </li>
          </ul>
          <ul className="text-xl flex flex-col gap-1">
            Privacy & Policy
            <li className="text-xs hover:text-blue-500 cursor-pointer">www.privacy/privacy.com</li>
            <li className="text-xs hover:text-blue-500 cursor-pointer">www.policy/ruls.com</li>
            <li className="text-xs hover:text-blue-500 cursor-pointer">allright from website reserved</li>
          </ul>
        </div>
      </footer>
      <div className="bg-gray-900 bottom-footer justify-between px-24 text-white h-max text-xs flex items-center gap-8 py-2">
        <p className="cursor-pointer hover:text-blue-500">© 2022 FRFH , Inc.</p>
        <img src="/visa-ways.png" alt="" />
        <button onClick={() => {document.body.scrollIntoView()}} className="cursor-pointer hover:text-blue-500">Scroll to top <span className="text-xl font-thin">⇮</span></button>
      </div>
    </>
  );
}


 function changeColorFooter(){
  const footerContact : any = document.querySelector('.footer-contact');
  footerContact.style.color = 'rgb(59 130 246 / var(--tw-text-opacity))';
 setInterval(()=>{
  footerContact.style.color = '#212121';
 },2000)
}

export default changeColorFooter;