import '../../scss/SuccessModal.scss'
let SuccessModal=(props)=>{

    return(<div className="success-Modal" style={{position:props.position}}>
        <span className="modal-Body">{props.text}</span>
        <span className="modal-Body" id="close-btn" onClick={()=>props.hideModal(<></>)}>X</span>
    </div>)
}

export default SuccessModal;