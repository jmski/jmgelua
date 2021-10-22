import Link from 'next/link';

const Contact = () => {
  return (
    <section className="h-full">
      <div id="contact" className="bg-gradient-to-r from-indigo-300 to-blue-300 transform skew-y-6 h-96">
        <div className="flex flex-col justify-center items-center transform -skew-y-6">
          <span className="text-1 mt-20 text-white">Have a project in mind?</span>
          <h3 className="text-3xl font-bold">Let's work together</h3>
          <div className="mt-10">
            <Link href="mailto:geluajm@gmail.com">
              <a className="transition duration-200 ease-in-out hover:text-red-500">geluajm@gmail.com</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;