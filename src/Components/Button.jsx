function Button({ content, classname }) {
  return <a href="#" className={`bg_highlight clr_primary pt_16 pb_16 ps-5 pe-5 fs_md fw-bold ff_sen text-decoration-none d-inline-block  ${classname}`}>{content}</a>
}
export default Button