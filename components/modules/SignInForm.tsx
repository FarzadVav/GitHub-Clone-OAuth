"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import SignInButton from "@/components/SignInButton"

const SignInForm = () => {
  return (
    <motion.form
      className="ring-2 ring-base-content/10 bg-base-200 p-6 rounded-lg max-sm:w-full"
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      action=""
    >
      <div className="w-full flex items-center max-sm:flex-col">
        <motion.div
          className="w-[120px]"
          initial={{ scale: 0, rotate: 45, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <Image
            className="w-full"
            src={"/gifs/cat.gif"}
            alt="github cat gif"
            width={120}
            height={120}
          />
        </motion.div>
        <h1 className="font-extrabold text-2xl sm:ml-3 max-sm:text-center">
          Please sign to your <br className="max-sm:hidden" /> GitHub account{" "}
        </h1>
      </div>
      <p className="text-base-content/75 max-w-md text-justify max-sm:mt-1">
        Lorem with good structure ipsum dolor sit amet consectetur, adipisicing elit. Impedit nulla
        and hello world ea animi corporis possimus dolorem culpa dolorum fugiat perspiciatis earum
        in my goal!
      </p>
      <div className="border-t border-base-content/5 flex items-center pt-4 mt-4 max-sm:flex-col">
        <SignInButton />
        <a
          className="btn btn-link text-base-content sm:ml-3 max-sm:mt-3"
          href="https://github.com"
          target="_blank"
        >
          Your dont have an account?
        </a>
      </div>
    </motion.form>
  )
}

export default SignInForm
