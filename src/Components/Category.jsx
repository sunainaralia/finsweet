function Catagory({ data }) {
  return <div className="col-10 col-sm-6 col-lg-3 mb-3 m-auto m-lg-0">
    <div className="p-2 brdr">
      <div className="p-2
              p-sm-4">
        <img src={data.img} alt="" className="pb-2" />
        <p className="ff_sen fw-bold lh_40 fs_xl clr_primary pt-2 pb-0 pb-sm-2">{data.title}</p>
        <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2">{data.body}</p>

      </div>
    </div>
  </div>
}
export default Catagory