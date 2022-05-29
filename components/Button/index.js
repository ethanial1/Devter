import st from './button.module.css'

export default function Button({ children, onClick}) {
    return (
        <div className={st.button}>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}