import Button from "./Button";
import logo from "../assets/logo.png";
import Image1 from "../assets/image1.png";

export default function Header() {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col justify-between">
      <nav className="flex justify-between items-center py-4 px-8 md:px-16 lg:px-24">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 ml-4 mr-4">
          <img src={logo} alt="Logo" className="h-7 w-18" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg font-semibold">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 ml-4">
          <Button className="bg-yellow-400 px-4 py-2" text="Log In" />
          <Button className="bg-emerald-400 px-4 py-2" text="Sign Up" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-24 py-8 lg:py-16">
        {/* Text Section */}
        <div className="flex flex-col space-y-6 max-w-lg">
          <h1 className="text-5xl font-bold text-gray-900">
            The most affordable <br /> Typeform alternative
          </h1>
          <p className="text-lg text-gray-700">
            Youform is a form builder that provides UNLIMITED forms and
            responses for FREE. You can add logic, custom domains, upload
            files, embed forms on your website, and much more.
          </p>
          <Button className="bg-orange-500 text-white px-6 py-3" text="Create free account" />
        </div>

        {/* Welcome Image Section */}
        <div className="mt-8 lg:mt-0 lg:ml-16 relative">
          <img src={Image1} alt="Welcome Youform" className="w-84 h-100" />
        </div>
      </div>

      {/* Footer or any other content can go here */}
    </div>
  );
}
