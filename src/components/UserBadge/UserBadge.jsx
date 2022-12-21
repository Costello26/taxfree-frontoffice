import UserInfo from "../UserTaxfree/UserInfo"
import Taxfree from "../UserTaxfree/Taxfree"
import cls from "./UserBadge.module.scss"
import { RoundItem } from "./RoundItem"

const progressSteps = [
    "Qr scan",
    "Shaxsini tasdiqlash",
    "Chiptani tasdiqlash",
    "Tovarlarni tekshirish",
    "Rasmiylashtirish"
]

export const UserBadge = ({ step = 0 }) => {
    return(
        <div className={cls['user-details']}>
            <div className={cls['user-info']}>
                <UserInfo />
            </div>
            <div className={cls['user-taxfree']}>
                <Taxfree />
            </div>


            <div className={cls['progress-bar']}>
                <div className={cls['tube-wrap']}>
                    <div className={cls['progress-tube']}>
                        <div style={{ width: `${25*step - 25}%` }} className={cls['progress']}></div>
                    </div>
                </div>
                <div className={cls['rounds-group']}>
                    {
                        progressSteps.map( (label, key) => {
                            if(key+1 < step) { 
                                return (<RoundItem step={key+1} done={true} key={key} title={label}/>) 
                            } else if(key+1 === step) {
                                return (<RoundItem step={key+1} active={true} key={key} done={false} title={label}/>) 
                            } else {
                                 return (<RoundItem step={key+1} done={false} key={key} title={label}/>)
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
