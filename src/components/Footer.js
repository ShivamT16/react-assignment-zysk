import logo from "../assets/untitled.png" 

export const Footer = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-around px-4 text-slate-700 pb-8 leading-9 text-lg font-medium">
        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Product</p>
        <p>Overview</p>
        <p>Features</p>
        <p>Solutions</p>
        <p>Tutorial</p>
        <p>Pricing</p>
        <p>Releases</p>
        </div>

        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Company</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Press</p>
        <p>News</p>
        <p>Media Kit</p>
        <p>Contact</p>
        </div>
        
        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Resources</p>
        <p>Blog</p>
        <p>Newsletter</p>
        <p>Events</p>
        <p>Help Centre</p>
        <p>Tutorials</p>
        <p>Support</p>
        </div>
        
        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Use cases</p>
        <p>Startups</p>
        <p>Enterprise</p>
        <p>Government</p>
        <p>SaaS centre</p>
        <p>Marketplaces</p>
        <p>Ecommerce</p>
        </div>
        
        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Social</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>GitHub</p>
        <p>AngelList</p>
        <p>Dribbble</p>
        </div>
        
        <div>
        <p className="text-slate-600 py-2 text-base font-medium">Legal</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
        <p>Licenses</p>
        <p>Settings</p>
        <p>Contact</p>
        </div>
    </div>
     
     <div className="md:flex justify-between items-center mx-[6%] border-t py-6 pb-[6rem] mt-10 ">
     <button className="text-2xl font-semibold text-black flex items-center">
       <img src={logo} alt="logo" /> Untitled UI 
     </button>
     <p className="p-2 font-normal text-lg text-slate-600">© 2077 Untitled UI. All rights reserved.</p>
     </div>

    </div>
  )
}
