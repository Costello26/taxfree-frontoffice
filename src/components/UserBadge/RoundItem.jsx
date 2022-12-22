import cls from './UserBadge.module.scss'

export const RoundItem = ({ step, title, active = false, done = false }) => {
    console.log(done)
    return(
        <div className={cls['round-item']}>
            <div style={active ? { borderColor: '#067911' } : {}} className={done ? cls['round-done'] : cls['round']}>{step}</div>
            <span className={cls['round-label'] }>
                {title}
            </span>
        </div>
    )
}