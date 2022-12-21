import UserInfo from "../UserTaxfree/UserInfo"
import Taxfree from "../UserTaxfree/Taxfree"
import cls from "./UserBadge.module.scss"
import { RoundItem } from "./RoundItem"

export const UserBadge = () => {
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
                        <div className={cls['progress']}></div>
                    </div>
                </div>
                <div className={cls['rounds-group']}>
                    <RoundItem step="1" done={true} title="Qr scan"/>
                    <RoundItem step="2" active={true} title="Shaxsini tasdiqlash"/>
                    <RoundItem step="3" title="Chiptani tasdiqlash"/>
                    <RoundItem step="4" title="Tovarlarni tekshirish"/>
                    <RoundItem step="5" title="Rasmiylashtirish"/>
                </div>
            </div>
        </div>
    )
}
