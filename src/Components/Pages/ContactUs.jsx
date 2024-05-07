import Button from "../Button"

function ContactUs() {
  return <>
    {/* -------------------contact us section-------------- */}
    <section>
      <div className="min-vh-100 container mb-3 mt-3 mb-md-5 mt-md-5">
        <div className="w-100 w_sm_75 w_lg_50 m-auto pt-3 pt-md-5">
          <p className="pb-md-2 ff_inter clr_primary fw-bolder ltr_spc_3 lh_32 fs_sm text-uppercase text-center">Contact us</p>
          <p className="pt-1 pb-2 pb-md-4 fw-bold fs_3xl lh_64 clr_primary ff_sen text-center">Let’s Start a Conversation</p>
          <p className="pb-3 mb-3 pb-md-5 mb-md-3 ff_inter clr_secondary fs_sm lh_32 fw-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="bg_tertiary pt-3 pb-3 ps-3 pe-3 mb-3 pt-md-5 pb-md-5 ps-md-5 pe-md-5 mb-md-4">
            <div className="row justify-content-between">
              <div className="col-12 col-sm-7">
                <p className="clr_secondary ff_inter fw-normal fs_xsm pb-1 pb-md-2">Working hours </p>
                <hr className="mt-2 mb-1 mb-md-2 clr_secondary" />
                <p className="clr_powder lh_32 fs_smd fw-bold pt-2">Monday To Friday</p>
                <p className="clr_powder lh_32 fs_smd fw-bold">9:00 AM to 8:00 PM </p>
                <p className="ff_inter fs_sm fw-normal lh_32 clr_secondary pt-1">Our Support Team is available 24/7</p>
              </div>
              <div className="col-12 col-sm-5">
                <p className="clr_secondary ff_inter fw-normal fs_xsm pb-2">Working hours </p>
                <hr className="mt-2 mb-1 mb-md-2 clr_secondary" />
                <p className="clr_powder lh_32 fs_smd fw-bold pt-2">020 7993 2905</p>
                <p className="ff_inter fs_sm fw-normal lh_32 clr_secondary pt-1 ">hello@finsweet.com</p>
              </div>
            </div>
          </div>
          <form action="" className="pt-2">
            <input type="text" name="" id="" className="w-100 p-3 p-md-4 fw-normal fs_sm clr_primary ff_inter mb-3" placeholder="Full Name" />
            <input type="email" name="" id="" className="w-100 p-3 p-md-4 fw-normal fs_sm clr_primary ff_inter mb-3" placeholder="Your Email" />

            <select name="" id="" className="w-100 p-3 p-md-4 mb-3 "><option value="" className=" fw-normal fs_sm clr_primary ff_inter w-100">Query Related</option></select>

            <input type="text" name="" id="" className="w-100 p-3 p-md-4 fw-normal fs_sm clr_primary ff_inter mb-3" placeholder="Full Name" />
            <textarea name="" id="" rows="4" className="w-100 p-3 p-md-4 fw-normal fs_sm clr_primary ff_inter mb-3" placeholder="Message"></textarea>
            <Button content={'Send Message'} classname={'mb-3 mb-lg-5 w-100 text-center'} />

          </form>
        </div>

      </div>
    </section>
  </>
}
export default ContactUs