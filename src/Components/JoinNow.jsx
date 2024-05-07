import Button from "./Button"
function JoinNow() {
  return <div className="container text-center w_lg_40 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <p className="pb-2 ff_sen fw-bold fs_2xl lh_48 clr_primary">Join our team to be a part of our story</p>
    <p className="ff_inter fw-normal clr_secondary pt-2 lh_32 pb-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <Button content={'Join Now'} classname={'mt-4'}/>
  </div>
}
export default JoinNow