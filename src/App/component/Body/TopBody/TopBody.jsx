import './TopBody.css'
import { GetStartedButton, SeeOtherPlansButton } from '../Buttons/ShortButton'

export const TopBody = () => {
    return (<main>
        <h1>
            Get Premium free for 1 month
        </h1>
        <p className='price'>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
        <div className='buttons'>
            <GetStartedButton />
            <SeeOtherPlansButton />
        </div>
        <p className='terms'>
            <a href="#/dashboard">Terms and conditions apply.</a>
            1 month free not available for users who have already tried Premium.
        </p>
    </main>

    )
}