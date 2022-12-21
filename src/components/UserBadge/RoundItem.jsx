import cls from './UserBadge.module.scss'

export const RoundItem = ({ step, title, active = false, done = false }) => {
    return(
        <div className={cls['round-item']}>
            <div className={cls['round']}>{step}</div>
            <span className={cls['round-label']}>
                {title}
            </span>
        </div>
    )
}