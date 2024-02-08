import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="py-4 md:py-6 text-center w-full">
        <p>©{new Date().getFullYear()} All rights reserved</p>
      </footer>
    </MaxWidthWrapper>
  )
}

export default Footer
