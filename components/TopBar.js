import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => (
  <div className="hidden max-w-[100rem] mx-auto text-gray-500 text-xs md:flex items-center justify-between h-8">
    <div className="flex justify-center items-center gap-2 w-[300px]">
      <Link href="#" className="hover:text-blue-700">
        {/* Facebook SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </Link>
      <Link href="#" className="hover:text-pink-600">
        {/* Instagram SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </Link>
      <Link href="#" className="hover:text-blue-400">
        {/* Twitter SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </Link>
      <Link href="mailto:info@bulutforce.com" className="hover:text-gray-700">
        {/* Email SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </Link>
      <Link href="#" className="hover:text-red-600">
        {/* Pinterest SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 4.418 2.865 8.176 6.91 9.497-.096-.807-.183-2.047.038-2.929.2-.803 1.29-5.122 1.29-5.122s-.329-.658-.329-1.631c0-1.528.886-2.671 1.988-2.671.938 0 1.391.705 1.391 1.551 0 .945-.602 2.358-.912 3.673-.259 1.099.548 1.995 1.627 1.995 1.953 0 3.457-2.06 3.457-5.029 0-2.633-1.894-4.478-4.596-4.478-3.129 0-4.97 2.344-4.97 4.77 0 .945.364 1.961.819 2.513.09.11.103.206.075.316-.082.346-.267 1.099-.304 1.252-.048.2-.157.243-.364.147-1.357-.632-2.205-2.616-2.205-4.215 0-3.43 2.492-6.582 7.186-6.582 3.771 0 6.707 2.687 6.707 6.271 0 3.747-2.36 6.759-5.637 6.759-1.099 0-2.133-.571-2.486-1.217l-.677 2.581c-.205.786-.607 1.771-.904 2.372.68.21 1.398.324 2.148.324 5.514 0 9.997-4.483 9.997-9.997s-4.483-9.997-9.997-9.997z" />
        </svg>
      </Link>
    </div>
    <div className="flex items-center gap-2 pr-5 space-x-2">
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <Link href="mailto:info@bulutforce.com" className="hover:text-gray-700">
          CONTACT US
        </Link>
      </span>
      <span className="mx-1">|</span>
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        09:00 - 19:00
      </span>
      <span className="mx-1">|</span>
      <span className="flex items-center">
        <FaPhoneAlt className="h-3 w-3 mr-1" />
        <Link href="tel:+90 850 308 0246" className="hover:text-gray-700">
          +90 850 308 0246
        </Link>
      </span>
    </div>
  </div>
);

export default TopBar;
