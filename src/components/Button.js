export default function Button({ onClick, children, disabled }){
    return <button onClick={onClick} disabled={disabled}>
        {children}
    </button>
}