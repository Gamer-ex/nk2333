import { useAppData } from '../../AppContext/AppContext'
import '../../Styles_temp/ca.css'
import {WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
TelegramIcon,
LinkedinShareButton,
LinkedinIcon,
} from 'react-share'
import "./CAEvent.css"



export const CAEvent=()=>{
        const [{user,CA}]=useAppData()
        const shareText=`Hey guys use my refferal code to register for events at Nakshatra 2023 code: *${CA.refCode}*`

    return (
        <div className='is-CA'>
            <div className="code">
                <p>{CA.refCode}</p>
                <div className="share">
                    <WhatsappShareButton url={shareText}>
                    <WhatsappIcon size={32} round/>
                    </WhatsappShareButton>
                    <FacebookShareButton url={shareText}>
                    <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareText}>
                    <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                    <TelegramShareButton url={shareText}>
                    <TelegramIcon size={32} round/>
                    </TelegramShareButton>
                    <LinkedinShareButton url={shareText}>
                    <LinkedinIcon size={32} round/>
                    </LinkedinShareButton>
                </div>
                <h1>{CA.count*1000}</h1>
                
            </div>
            
                
            

        </div>
    )
}


