interface IProps {
    onClickHandler: () => void
    title: string
    style: string
}


export default function UniversalButton(props: IProps) {
    return (
        <div className={props.style}>
            <div onClick={props.onClickHandler}><p>{props.title}</p></div>
        </div>
    )
}
